export const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/home',
    component: () => import('@/layout/basic/index.vue'),
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          keepAlive: true,
          showTabBar: true
        }
      },
      {
        path: 'navigation',
        name: 'Navigation',
        component: () => import('@/views/navigation/index.vue'),
        meta: {
          title: '插件示例',
          keepAlive: true,
          showTabBar: true
        }
      },
      {
        path: 'request',
        name: 'request',
        component: () => import('@/views/demo/request/index.vue'),
        meta: {
          title: '请求封装',
          keepAlive: true,
          showTabBar: false,
          isBack: true
        }
      },
      {
        path: 'imageCompress',
        name: 'imageCompress',
        component: () => import('@/views/demo/imageCompress/index.vue'),
        meta: {
          title: '图片压缩',
          keepAlive: true,
          showTabBar: false,
          isBack: true
        }
      },
      {
        path: 'imageCompress',
        name: 'imageCompress',
        component: () => import('@/views/demo/imageCompress/index.vue'),
        meta: {
          title: '图片压缩',
          keepAlive: true,
          showTabBar: false,
          isBack: true
        }
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/demo/about/index.vue'),
        meta: {
          title: '关于我',
          keepAlive: true,
          showTabBar: false,
          isBack: true
        }
      },
      {
        path: 'error',
        name: 'error',
        component: () => import('@/views/demo/error/index.vue'),
        meta: {
          title: 'error-pages',
          keepAlive: true,
          showTabBar: false,
          isBack: true
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '',
      keepAlive: true
    }
  }
];

/**
 * errorRouter(错误页面路由)
 */
export const errorRouter = [
  {
    path: '/403',
    name: '403',
    component: () => import('@/views/error/403.vue'),
    meta: {
      title: '403页面'
    }
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error/404.vue'),
    meta: {
      title: '404页面'
    }
  },
  {
    path: '/500',
    name: '500',
    component: () => import('@/views/error/500.vue'),
    meta: {
      title: '500页面'
    }
  },
  // 解决刷新页面，路由警告
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/error/404.vue')
  }
];
