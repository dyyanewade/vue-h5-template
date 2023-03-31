/**
 * @description: 浏览器伪造 useragent,确保浏览器能打开
 * @return {*}
 */
const browserUserAgent = `Mozilla/5.0 (Linux; Android 12; M2102K1AC Build/SKQ1.211006.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/95.0.4638.74 Mobile Safari/537.36$ua={"statusHeight":39,"cpsStatus":1,"reapplyStatus":0,"agreePrivacy":true,"name":"Xiaomi","bottomHeight":0,"isVirBar":false,"type":"Android","deviceId":"f359d59f3c6e0e8f","version":"1.0.7","token":"", "mock": "浏览器模拟数据"}`;
export const isBrowser = () => {
  let ua = navigator.userAgent;
  // 如果默认打开是浏览器
  if (ua.indexOf('$ua=') == -1) {
    return true;
  } else {
    return false;
  }
};

/**
 * @func 获取userAgent
 */
export const getUserAgent = () => {
  let ua = '';
  ua = isBrowser() ? browserUserAgent : navigator.userAgent;
  let userAgent = ua.substring(ua.indexOf('$ua=') + 4, ua.length);
  return JSON.parse(userAgent);
};

/**
 * @description: 判断当前是否为安卓设备
 * @return {*}
 */
export const isAndroid = function () {
  let ua = '';
  ua = isBrowser() ? browserUserAgent : navigator.userAgent;
  let userAgent = ua.substring(ua.indexOf('$ua=') + 4, ua.length);
  const isAndroid = JSON.parse(userAgent)?.type == 'Android' ? true : false;
  return isAndroid;
};

/**
 * @func 构造UUID
 */
export const generateUUID = function () {
  var d = new Date().getTime();
  if (window.performance && typeof window.performance.now === 'function') {
    d += performance.now(); //use high-precision timer if available
  }
  var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 32) % 32 | 0;
    d = Math.floor(d / 32);
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(32);
  });
  return uuid;
};

/**
 * @description: 生成签名
 * @return {*}
 */
export const sign = () => {
  return '';
};

/**
 * 姓名格式化隐藏
 * @param {*} name
 */
export const formatName = (name: string) => {
  return new Array(name.length).join('*') + name.substr(-1);
};

/**
 *  手机号格式化
 *  @param {String} phone
 *
 */
export const formatPhone = (phone: string) => {
  phone = phone.toString();
  return `${phone.substr(0, 3)}****${phone.substr(7, 11)}`;
};

/**
 * 身份证号格式化
 * @param {*} idCard
 */
export const formatIdCard = (idCard: string) => {
  return `${idCard.substr(0, 2)}**************${idCard.substr(16, 18)}`;
};
