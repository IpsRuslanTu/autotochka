import axios, { type AxiosRequestConfig } from 'axios'
import { localStorageConsts } from '@/shared/consts/localStorageConsts.ts'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosInstance.interceptors.request.use(async (config) => {
  if (!config || !config.url) {
    return config
  }

  const token = localStorage.getItem(localStorageConsts.ACCESS_TOKEN)
  config.headers.setAuthorization(token)

  return config
})

export const createInstance = async <T>(config: AxiosRequestConfig, options?: AxiosRequestConfig): Promise<T> => {
  const r = await axiosInstance({
    ...config,
    ...options,
  })

  return r.data
}

export type BodyType<Data> = Data
