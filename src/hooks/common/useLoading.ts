import { showLoadingToast, closeToast } from 'vant';

// loading
export function useLoading() {
	let toast: any = null;

	const startLoading = () => {
		toast = showLoadingToast({
			duration: 0,
			loadingType: 'spinner',
			forbidClick: true, // 禁用背景点击
			message: '加载中...',
		});
	};

	const stopLoading = () => {
		toast && closeToast();
	};

	onBeforeUnmount(stopLoading);

	return { startLoading, stopLoading };
}
