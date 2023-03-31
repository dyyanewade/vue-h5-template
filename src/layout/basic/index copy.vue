<template>
  <navbar
    :left-arrow="Boolean(route.meta.isBack)"
    :is-left-text="Boolean(false)"
    :right-icon="Boolean(false)"
    :title="$t($route.meta.title as string)"
    icon-name="setting-o"
    @click-right="onClickRight"
  />
  <div class="main-page">
    <router-view v-slot="{ Component }">
      <keep-alive :include="cachedViews">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>

  <tabbar v-if="route.meta.showTabBar" />
</template>

<script setup lang="ts">
  import { useRouter, useRoute } from 'vue-router';
  import Tabbar from '@/components/common/Tabbar.vue';
  import Navbar from '@/components/common/Navbar.vue';
  import { useCachedViewStoreHook } from '@/store/modules/cachedView';

  const router = useRouter();
  const route = useRoute();
  function onClickRight() {
    router.push({ path: 'set' });
  }

  const cachedViews = computed(() => {
    return useCachedViewStoreHook().cachedViewList;
  });
</script>

<style lang="scss" scoped>
  @import '@/styles/scss/index.scss';

  .main-page {
    width: 100%;
    // height: 100%;
    background-color: $sysBgGray;
    position: relative;
    box-sizing: border-box;
  }
</style>
