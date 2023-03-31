import { createApp } from 'vue';
import App from './App.vue';
import { i18n } from '@/i18n';
import router from '@/router';
import store from '@/store';
// 全局样式
import '@/styles/css/index.css';
import 'vant/es/toast/style';
import 'vant/es/dialog/style';

// 引入svg注册脚本
import 'virtual:svg-icons-register';

const app = createApp(App);

// 路由
app.use(router);

// 国际化
app.use(i18n);

// 状态管理
app.use(store);

app.mount('#app');
