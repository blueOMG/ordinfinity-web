import axios from 'axios';
import { ElMessage, ElMessageBox } from 'element-plus'
import router from '@/router'
import API from './API'
axios.defaults.timeout = 50000;
axios.defaults.baseURL = '';

//http request 拦截器
axios.interceptors.request.use(
  config => {
    config.data = JSON.stringify(config.data);
    config.headers = {
      'Content-Type': 'application/json'
    }
    const addr = localStorage.getItem('userAddr');
    if (addr) {
      const token = localStorage.getItem(addr);
      config.headers['NFT-TOKEN'] = token;
    }
    config.headers['lang'] = API.langMap[localStorage.getItem("NFTLANG")];
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);


//http response 拦截器
axios.interceptors.response.use(
  response => {
    if (!response.data || response.data.code == 'LOGIN') {
      const addr = localStorage.getItem('userAddr');
      localStorage.removeItem(addr);
      localStorage.removeItem('userAddr')
      ElMessageBox({
        message: 'Please login',
        closeOnClickModal: false,
      })
        .then(() => {
          router.replace('/app/home')
        })
      return response
    }
    return response;
  },
  (error) => {
    if (error.response.data) {
      if (error.response.data.code == 'LOGIN') {
        const addr = localStorage.getItem('userAddr');
        localStorage.removeItem(addr);
        localStorage.removeItem('userAddr')

        router.replace('/app/home')
      }
      ElMessage({
        message: error.response.data.msg,
        type: 'error',
      })
    }
    return Promise.reject(error)
  }
)


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(url, params = {}) {
  // // // console.log(params)
  return new Promise((resolve, reject) => {
    axios.get(API.apiUrl + url, {
      params: params
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(API.apiUrl + url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(API.apiUrl + url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(API.apiUrl + url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}
