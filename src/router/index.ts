import { createRouter, createWebHistory, Router, type RouteLocationNormalized } from 'vue-router';
import { routes, errorRouter } from './routes';
import { setPageTitle } from '@/utils/index';

const router: Router = createRouter({
  history: createWebHistory('/'),
  routes: [...routes, ...errorRouter]
});

export interface toRouteType extends RouteLocationNormalized {
  meta: {
    title?: string;
    noCache?: boolean;
  };
}
router.beforeEach((to: toRouteType, from, next) => {
  console.log(from);

  /// 页面 title
  setPageTitle(to.meta.title);
  next();
});

export default router;
