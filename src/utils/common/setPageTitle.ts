import { pageDefaultTitle } from '@/settings';

export function setPageTitle(routerTitle?: string): void {
  window.document.title = routerTitle
    ? `${routerTitle} | ${pageDefaultTitle}`
    : `${pageDefaultTitle}`;
}
