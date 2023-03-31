/*
 * @Author: Yongon
 * @LastEditors: Yongon
 * @Description: file content
 */
export default {
  // 页面标题
  title: '中油车队端',
  // 全局主色JS使用
  themeColor: '#0380c8' // 按钮或背景主题色
};
// ? 全局不动配置项 只做导出不做修改
// 页面标题
export const ROUTER_NAV_TITLE: string = '中油车队端';

// * 首页地址（默认）
export const HOME_URL: string = '/home/index';

// * 登录页地址（默认）
export const LOGIN_URL: string = '/login';

// * 默认主题颜色
export const DEFAULT_PRIMARY: string = '#0380c8';

// * 路由白名单地址（必须是本地存在的路由 staticRouter.ts）
export const ROUTER_WHITE_LIST: string[] = ['/500'];

// * 高德地图 key
export const AMAP_MAP_KEY: string = '';

// * 百度地图 key
export const BAIDU_MAP_KEY: string = '';
