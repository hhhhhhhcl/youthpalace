//Axios函数库进行二次封装目的：
//1.利用Axios请求，响应拦截器功能
//2.请求拦截器，在请求头中携带公共的参数：token
//3.响应拦截器，简化服务器返回的数据，处理http的网络错误
import axios from 'axios';
import { ElMessage } from 'element-plus';
//利用Axios.create方法创建一个Axios实例：可以设置基础路径、超时的时间
const request = axios.create({
    baseURL: '/api', //请求的基础路径的设置
    timeout: 5000 //超时时间的设置，超时5s即为失败
});

//请求拦截器
request.interceptors.request.use((config) => {
    //config：请求拦截器回调注入的对象（配置对象），配置对象最重要的一件事情headers属性
    //可以通过请求头携带公共参数：token
    return config;
});

//响应拦截器
request.interceptors.response.use((response) => {
    //响应拦截器成功的回调，一般会进行简化数据
    return response;
}, (error) => {
    //处理http网络错误
    let status = error.response.status;
    switch (status) {
        case 404:
            //错误提示信息
            ElMessage({
                type: 'error',
                message: '请求失败路径出现问题'
            })
            break;
        case 500 | 501 | 502 | 503 | 504 | 505:
            ElMessage({
                type: 'error',
                message: '服务器崩溃'
            })
            break;
        case 401:
            ElMessage({
                type: 'error',
                message: '参数有误'
            })
            break;
    }
    return Promise.reject(new Error(error.message))
});

//对外暴露Axios
export default request;