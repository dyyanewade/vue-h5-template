<template>
  <div class="main-page">
    <navbar
      :left-arrow="Boolean(route.meta.isBack)"
      :is-left-text="Boolean(false)"
      :right-icon="Boolean(false)"
      :title="$t($route.meta.title as string)"
      icon-name="setting-o"
      @click-right="onClickRight"
    />

    <router-view v-slot="{ Component }" class="rooter-view">
      <keep-alive :include="cachedViews">
        <component :is="Component" />
      </keep-alive>
    </router-view>

    <tabbar v-if="route.meta.showTabBar" />
  </div>
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
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;

    .rooter-view {
      // overflow-y: scroll;
      width: 100%;
      height: 100%;
    }
  }
</style>
