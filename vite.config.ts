import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'; //引入node提供内置模块path：可以获取免费路径

export default defineConfig({
  plugins: [vue()],
  //src文件夹配置别名
  resolve:{
    alias:{
      "@":path.resolve(__dirname,'src')
    }
  },
  //配置代理跨域
  server:{
    proxy:{
      '/api':{
        target:'http://localhost:5173',
        changeOrigin:true,
        rewrite:(path)=>path.replace(/^\/api/,''),
      },
    }
  }
})
