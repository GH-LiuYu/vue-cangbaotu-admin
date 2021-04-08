import axios from "axios";
import { MessageBox, Message} from "element-ui"
import {baseUrl} from "../api/config/config";
const service = axios.create({//创建实例
  baseURL:baseUrl,//配置根地址
  timeout:5000
})
//拦截器，在请求或响应被 then 或 catch 处理前拦截它们。
// 添加请求拦截器
service.interceptors.request.use(
    config=>{ // 在发送请求之前做些什么
      // if (store.getters.token) {
      //   // let each request carry token
      //   // ['X-Token'] is a custom headers key
      //   // please modify it according to the actual situation
      //   config.headers['X-Token'] = getToken()//发送前添加token
      // }
      return config
    },
    error =>{// 对请求错误做些什么
      return Promise.reject(error)
    }

)
// 添加响应拦截器
service.interceptors.response.use(
    response => {
      const res = response.data
      // if the custom code is not 20000, it is judged as an error.
      if (res.code !== 20000) {
        Message({
          message: res.message || 'Error',
          type: 'error',
          duration: 5 * 1000
        })

        // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
        if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
          // to re-login
          MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
            confirmButtonText: 'Re-Login',
            cancelButtonText: 'Cancel',
            type: 'warning'
          }).then(() => {
            store.dispatch('user/resetToken').then(() => {
              location.reload()
            })
          })
        }
        return Promise.reject(new Error(res.message || 'Error'))
      } else {
        return res
      }
    },
    error => {
      console.log('err' + error) // for debug
      Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(error)
    }
)
export default service
