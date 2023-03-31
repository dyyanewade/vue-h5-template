<template>
  <div class="request">
    <h3>Mock模拟</h3>
    <div class="btns">
      <van-button type="success" @click="handleSuccessReq">成功按钮</van-button>
      <van-button type="danger" @click="handleErrorReq">失败请求</van-button>
    </div>
    <div>
      <van-cell-group inset v-for="item in list" :key="item">
        <van-cell :title="item.location" :value="item.ip" class="items" />
      </van-cell-group>
    </div>
  </div>
</template>

<script setup lang="ts" name="Request">
  import { getListApi, getListApiError } from '@/service/api';

  const list = ref<any[]>([]);
  const loading = ref(false);
  const finished = ref(false);
  const refreshing = ref(false);

  const handleSuccessReq = () => {
    if (refreshing.value) {
      list.value = [];
      refreshing.value = false;
    }
    loading.value = true;
    const params = {
      page: 1,
      pageSize: 10
    };
    getListApi(params).then(
      (res) => {
        loading.value = false;
        if (list.value.length >= 40) {
          finished.value = true;
        }
        list.value.push(...res.data);
        // 数据全部加载完成
        if (list.value.length >= 40) {
          finished.value = true;
        }
      },
      (err) => {
        console.error(err);
      }
    );
  };

  const handleErrorReq = () => {
    getListApiError({}).then((res) => {
      console.log('res:', res);
    });
  };
</script>

<style scoped lang="scss">
  .request {
    @include page-common-set(2);

    .btns {
      width: 100%;
      @include flex(x, around, center);
      margin: 30px 0;
    }
  }
  .items {
    margin: 20px 0;
  }
  :deep(.van-cell-group) {
    background-color: $sysBgGray;
  }
</style>
