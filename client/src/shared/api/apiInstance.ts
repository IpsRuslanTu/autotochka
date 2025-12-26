import axios, { type AxiosRequestConfig } from 'axios'

export const axiosInstance = axios.create({
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const createInstance = async <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> => {
  const r = await axiosInstance({
    ...config,
    ...options,
  })

  return r.data
}

export type BodyType<Data> = Data;