/**
 * pinia 类型定义
 */

// 用户信息
declare interface UserInfosState<T = any> {
  token: string;
  isQianYi: number;
  userInfo: any;
}
