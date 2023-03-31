<template>
  <div class="navigation">
    <div class="header">
      <img src="@/assets/images/logo.png" alt="" />
      <span>Plug-in Demo Example</span>
    </div>

    <section class="base">
      <div v-for="item in navList" :key="item.id" class="items" @click="goNext(item)">
        <span>{{ item.title }}</span>
        <van-icon name="arrow" />
      </div>
    </section>

    <van-back-top right="15vw" bottom="10vh" />
  </div>
</template>

<script setup lang="ts" name="Navigation">
  import { useRouter } from 'vue-router';
  const router = useRouter();

  interface navListType {
    id: number;
    title: string;
    routerName: string;
  }
  const navList = ref<navListType[]>([
    {
      id: 0,
      title: '请求示例',
      routerName: 'request'
    },
    {
      id: 1,
      title: '图片压缩',
      routerName: 'imageCompress'
    },
    {
      id: 10,
      title: 'error-page',
      routerName: 'error'
    },
    {
      id: 11,
      title: '关于我',
      routerName: 'about'
    }
  ]);
  function goNext(item: navListType) {
    router.push({ name: item.routerName });
  }
</script>

<style scoped lang="scss">
  .navigation {
    @include page-common-set(1);
    .header {
      display: flex;
      align-items: center;
      img {
        @include w-h(120, 120);
        border-radius: 50%;
        border: 1px solid lightblue;
      }
      span {
        margin-left: 50px;
        @include font(36, $sysFontColor, 30, 700);
      }
    }

    .base {
      width: 100%;
      .items {
        margin: 20px auto;
        padding: 0 30px;
        border-radius: 40px;
        @include font(32, #333, 90, 400);
        background-color: #fff;
        width: 95%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
</style>
