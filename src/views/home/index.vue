<template>
  <div class="home">
    <img class="block" alt="Vue logo" src="~@/assets/logo_vue3_ts.png" />
    <div class="content">
      <a href="https://github.com/yulimchen/vue3-h5-template" target="_blank">
        <h2>Vue3-h5-template</h2>
      </a>
    </div>
    <div class="info">
      <p> 🌱 基于 Vue3 全家桶、TypeScript、Vite 构建工具，开箱即用的 H5 移动端项目基础模板 </p>
    </div>

    <div class="demo-main">
      <van-cell v-for="(item, idx) in contentList" :key="idx" :title="item" />
    </div>
  </div>
</template>

<script setup lang="ts" name="Home">
  import { reactive } from 'vue';

  const contentList = reactive([
    '✔ ⚡ Vue3 + Vite4',
    '✔ 🍕 TypeScript',
    '✔ ✨ Vant4 组件库',
    '✔ 🍍 Pinia 状态管理',
    '✔ ✨ Vue-router 4',
    '✔✨ i18n 文本多语言解决方案',
    '✔✨ 支持 SVG 图标自动注册组件',
    '✔✨ 适配苹果底部安全距离',
    '✔✨ vite.config.ts 基础配置',
    '✔✨ vw 视口适配',
    '✔✨ Axios 封装及接口管理',
    '✔✨ Alova 轻量级请求策略库',
    '✔✨ 打包资源 gzip 压缩',
    '✔✨ 开发环境支持 Mock 数据',
    '✔✨ Eslint+Pettier+stylelint 统一开发规范 ',
    '× ✨ 首屏加载动画',
    '× ✨ 开发环境调试面板'
  ]);
</script>

<style scoped lang="scss">
  .home {
    @include page-common-set(2);
  }
  .content {
    margin: 20px 0;
  }
  .info {
    margin: 20px 0;
  }
</style>
