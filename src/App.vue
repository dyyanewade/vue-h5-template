<template>
  <router-view />
</template>

<script setup lang="ts">
  import { storage, getUserAgent } from '@/utils/index';

  onMounted(() => {
    getUserAgentInfo();
  });

  /**
   * 通过UserAgent获取设备信息
   */
  function getUserAgentInfo() {
    let uaStr = getUserAgent();
    console.log('APP UserAgent:' + '\n' + JSON.stringify(uaStr));
    setDeviceInfo(uaStr);
  }

  /**
   * @description: 设置设备信息包括设备名、安全区域高度
   * @return {*}
   */
  function setDeviceInfo(params: any) {
    storage.set('deviceInfo', { ...params });
  }
</script>

<style scoped></style>
