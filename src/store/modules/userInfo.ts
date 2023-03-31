import { defineStore } from 'pinia';

/**
 * 用户信息
 * @methods setUserInfos 设置用户信息
 */
export const useUserInfo = defineStore('userInfo', {
  state: (): UserInfosState => ({
    token: '',
    /** 是否显示迁移  迁移状态，0-默认状态, 1-需要迁移, 2-已迁移 */
    isQianYi: 1,
    userInfo: {}
  }),
  actions: {
    // setToken
    setToken(token: string) {
      this.token = token;
    },
    // 迁移
    setIsQianYi(isQianYi: number) {
      this.isQianYi = isQianYi;
    },
    // setUserInfo
    setUserInfo(userInfo: any) {
      this.userInfo = userInfo;
    }
  }
});
