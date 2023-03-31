import http from '@/service/request';

type ListResult = {
  infoCode: number;
  info: string;
  data: Array<any>;
};

export const getListApi = (params: any) => {
  return http.post<ListResult>('/mock/api/getList', params, true);
};

export const getListApiError = (params: any) => {
  return http.post<ListResult>('/mock/api/getStatusList', params, false);
};
