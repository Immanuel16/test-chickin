import apiHelper from "../helper/api";
import { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";


const onRequest = (config: AxiosRequestConfig) => config;
const onResponse = (res: AxiosResponse) => res;
const onRequestError = (err: AxiosError) => Promise.reject(err);
const onResponseError = (err: AxiosError) => Promise.reject(err.response);

export function AxiosInterceptor() {
  apiHelper.interceptors.request.use(onRequest, onRequestError);
  apiHelper.interceptors.response.use(onResponse, onResponseError);
  return apiHelper;
}
