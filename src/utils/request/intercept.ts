import axios from  'axios';
import { handleConfigureAuth, handleNetworkError, handleAuthError } from './utils';
export const baseUrl = "http://localhost:3300";

// axios的实例及拦截器配置
const axiosInstance = axios.create({
  baseURL: baseUrl
});

axiosInstance.interceptors.request.use((config) => {
  // config = handleChangeRequestHeader(config)
  config = handleConfigureAuth(config)
  return config
});


axiosInstance.interceptors.response.use(
  (response) => {
    if (response.status !== 200) return Promise.reject(response.data)

    handleAuthError(response.data.errno)
    // handleGeneralError(response.data.errno, response.data.errmsg)

    return response
  },
  (err) => {
    handleNetworkError(err.response.status)
    Promise.reject(err.response)
  }
);
