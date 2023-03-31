import { showFailToast, showToast } from 'vant';

/**
 * @description: 网络错误处理
 * @param {*} errStatus
 * @return {*}
 * @author: dyyanewade
 */
export const handleNetworkError = (errStatus: any) => {
	let errMessage = '未知错误';
	if (errStatus) {
		switch (errStatus) {
			case 400:
				errMessage = '错误的请求';
				break;
			case 401:
				errMessage = '未授权，请重新登录';
				break;
			case 403:
				errMessage = '拒绝访问';
				break;
			case 404:
				errMessage = '请求错误,未找到该资源';
				break;
			case 405:
				errMessage = '请求方法未允许';
				break;
			case 408:
				errMessage = '请求超时';
				break;
			case 500:
				errMessage = '服务器端出错';
				break;
			case 501:
				errMessage = '网络未实现';
				break;
			case 502:
				errMessage = '网络错误';
				break;
			case 503:
				errMessage = '服务不可用';
				break;
			case 504:
				errMessage = '网络超时';
				break;
			case 505:
				errMessage = 'http版本不支持该请求';
				break;
			default:
				errMessage = `其他连接错误 --${errStatus}`;
		}
	} else {
		errMessage = `无法连接到服务器！`;
	}
	showFailToast(errMessage);
};

/**
 * @description: 普通错误处理
 * @param {*} infoCode
 * @param {*} errmsg
 * @return {*}
 * @author: dyyanewade
 */
export const checkInfoCode = (infoCode: number, errmsg: any) => {
	const authErrMap: any = {
		253: 'token失效，请重新登录', // token 失效
		254: 'token失效，请重新登录', // token 过期
		258: 'token失效，请重新登录',
		255: '抱歉，该企业注销了您的账户，如有问题，请与企业管理员联系',
	};

	if (authErrMap.hasOwnProperty(infoCode)) {
		showToast(authErrMap[infoCode]);
		// 授权错误，登出账户
		// logout();
		return false;
	} else {
		showFailToast(errmsg);
		return true;
	}
};
