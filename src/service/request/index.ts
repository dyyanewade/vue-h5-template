import axios, {
  AxiosInstance,
  AxiosError,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
  AxiosResponse
} from 'axios';
// import { useRouter } from 'vue-router';
import { showFailToast } from 'vant';
import { useLoading } from '@/hooks/common/useLoading';
import { ResultEnum, ContentTypeEnum } from '@/enums/httpEnum';
// import { useUserInfo } from '@/store/modules/userInfo';
import { checkInfoCode, handleNetworkError } from './tools';

const { startLoading, stopLoading } = useLoading();
// const router = useRouter();nprogress

// 默认 axios 实例请求配置
const config = {
  headers: {
    'Content-Type': ContentTypeEnum.FORM_URLENCODED as string
  },
  baseURL: import.meta.env.VITE_BASE_API as string,
  timeout: 30000
};

class RequestHttp {
  service: AxiosInstance;
  public constructor(config: AxiosRequestConfig) {
    // 实例化axios
    this.service = axios.create(config);
    // const useUserInfoStore = useUserInfo();

    /**
     * @description 请求拦截器
     * 客户端发送请求 -> [请求拦截器] -> 服务器
     * token校验(JWT) : 接受服务器返回的token,存储到vuex/pinia/本地储存当中
     */
    this.service.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // const token = useUserInfoStore.token;
        const token = '123456';
        // * 如果当前请求不需要显示 loading,在 api 服务中通过指定的第三个参数: { headers: { isShowLoading: true } }来控制不显示loading，参见loginApi
        config.headers!.isShowLoading && startLoading();
        if (config.headers && typeof config.headers?.set === 'function')
          config.headers.set('apptoken', token);
        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );

    /**
     * @description 响应拦截器
     *  服务器换返回信息 -> [拦截统一处理] -> 客户端JS获取到信息
     */

    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        const { data, status } = response;
        // * 在请求结束后，并关闭请求 loading
        stopLoading();

        // * 全局错误信息拦截（防止下载文件得时候返回数据流，没有code，直接报错）
        if (status && status === ResultEnum.SUCCESS) {
          if (data && data.infoCode === 1) {
            return Promise.resolve(data);
          } else {
            // 对业务码infoCode ≠ 1的情况单独处理
            checkInfoCode(data.infoCode, data.info);
            return Promise.reject(data);
          }
        } else {
          showFailToast(data.info);
          return Promise.reject(data);
        }
      },
      async (error: AxiosError) => {
        const { response } = error;
        stopLoading();
        // HTTP 状态码
        handleNetworkError(response?.status);
        return Promise.reject(error);
      }
    );
  }

  /**
   * @description: 常用请求方法封装
   * @param {string} url 请求地址
   * @param {object} params 请求入参，默认空对象
   * @param {boolean} isShowLoading 是否在请求过程中显示loading 默认true
   * @return {*}
   * @author: dyyanewade
   */
  get<T>(url: string, params?: object, isShowLoading: boolean = true): Promise<T> {
    return this.service.get(url, { params, ...{ headers: { isShowLoading } } });
  }
  post<T>(url: string, params?: object, isShowLoading: boolean = true): Promise<T> {
    return this.service.post(url, params, { headers: { isShowLoading } });
  }
  put<T>(url: string, params?: object, isShowLoading: boolean = true): Promise<T> {
    return this.service.post(url, params, { headers: { isShowLoading } });
  }
  delete<T>(url: string, params?: any, isShowLoading: boolean = true): Promise<T> {
    return this.service.post(url, params, { headers: { isShowLoading } });
  }
  download(url: string, params?: object, isShowLoading: boolean = true): Promise<BlobPart> {
    return this.service.post(url, params, {
      ...{ headers: { isShowLoading } },
      responseType: 'blob'
    });
  }
}

export default new RequestHttp(config);
