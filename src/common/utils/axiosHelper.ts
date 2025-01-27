import axios, {
  AxiosInstance,
  AxiosRequestHeaders,
  InternalAxiosRequestConfig,
} from 'axios';
import services from '@common/constants/service.constants'

// TODO: 추후 api 명시후 interceptor 처리
/**
 * axios 통신 도움 함수
 * @returns https method
 */
const axiosHelper = () => {
  const client: AxiosInstance = axios.create({
    baseURL: services.api.host,
  });

  /** 해더 설정 */
  const setRequestHeaders = (request: InternalAxiosRequestConfig) => {
    request.headers = {
      ...request.headers,
      'Content-Type': services.api.contentType,
    } as AxiosRequestHeaders;
    return request;
  };

  client.interceptors.request.use(setRequestHeaders);

  /**
   * GET 방식 http 통신 처리
   * @param path
   * @param param
   * @returns
   */
  const get = async <T>(
    path: string,
    param?: object,
  ): Promise<T | null> => {
    const params = param ? param : ({} as any);
    let query = Object.keys(params as object)
      .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
      .join('&');
    try {
      const res = await client.get(path + '?' + query);
      return res.data;
    } catch (error) {
      throw new Error(`error ${path} api`);
    }
  };

  /**
   * POST 방식 http 통신 처리
   * @param path
   * @param param
   * @returns POST 응답 데이터
   */
  const post = async <T>(path: string, param?: object): Promise<T | null> => {
    const res = await client.post(path, param);
    try {
      return res.data;
    } catch (error) {
      throw new Error(`error ${path} api`);
    }
  };

  /**
   * patch 방식 http 통신 처리
   * @param path
   * @param param
   * @returns patch 응답 데이터
   */
  const patch = async <T>(path: string, param?: object): Promise<T | null> => {
    const res = await client.patch(services.api.host + path, param);
    try {
      return res.data;
    } catch (error) {
      throw new Error(`error ${path} api`);
    }
  };

  return {
    get,
    post,
    patch,
  };
};

export default axiosHelper;
