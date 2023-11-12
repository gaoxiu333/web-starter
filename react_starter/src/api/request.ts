import axios from "axios"
import type {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosRequestConfig
} from "axios"

import { notification } from "antd"

const TIMEOUT = 0
const MITE_TYPE: any = {
  JSON: "json"
}

const createInstance = () => {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    withCredentials: true,
    timeout: TIMEOUT,
    responseType: MITE_TYPE
  })
  instance.interceptors.request.use(handleRequest)
  instance.interceptors.response.use(handleResponse, handleError)
  return instance
}

const handleResponse = (response: AxiosResponse) => {
  return response.data
}

const handleRequest = (config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem("token")

  if (token) {
    config.headers!.token = token
  }

  if (!config.headers["Content-Type"]) {
    config.headers["Content-Type"] = "application/json"
  }

  return config
}

const handleError = (error: any) => {
  const { response, message } = error
  return Promise.reject(response ? new Error(response?.data?.message || message) : error)
}

interface Instance extends AxiosInstance {
  (config: AxiosRequestConfig): Promise<any>
}

const toastError = (error: any) => {
  const { response, message } = error
  notification.error({ message: "请求出错", description: message })
  return Promise.reject(response ? new Error(response?.data?.message || message) : error)
}
export const requestWithoutError: Instance = createInstance()
const request: Instance = createInstance()
request.interceptors.response.use(undefined, toastError)

export default request
