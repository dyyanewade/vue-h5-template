import type { ComponentRenderProxy, VNode, VNodeChild, PropType as VuePropType } from 'vue';

declare global {
	declare type Recordable<T = any> = Record<string, T>;

	declare interface WheelEvent {
		path?: EventTarget[];
	}
}
