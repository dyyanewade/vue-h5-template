<template>
  <van-cell-group inset>
    <van-cell v-for="(item, index) in menuData" :key="index" is-link :to="item.url">
      <template #title>
        <van-icon v-if="isLeftIcon" :name="item.icon" color="#0380c8" size="18" />
        <span>{{ item.title }}</span>
      </template>
    </van-cell>
  </van-cell-group>
</template>

<script setup lang="ts">
  type menuDataItem = {
    title: string;
    icon?: string;
    url: string;
  };
  defineProps({
    isLeftIcon: {
      type: Boolean,
      default: () => false
    },
    menuData: {
      type: Array<menuDataItem>,
      default: () => []
    }
  });
</script>

<style scoped lang="scss"></style>
