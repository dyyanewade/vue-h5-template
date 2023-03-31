<template>
  <div class="error-page">
    <menu-item :menu-data="navList" />
  </div>
</template>

<script setup lang="ts">
  import menuItem from '@/components/common/menuItem.vue';

  const navList = ref([
    {
      title: 'error-403',
      url: '/403'
    },
    {
      title: 'error-404',
      url: '/404'
    },
    {
      title: 'error-500',
      url: '/500'
    }
  ]);
</script>

<style scoped lang="scss">
  .error-page {
    @include page-common-set(1);
  }
</style>
