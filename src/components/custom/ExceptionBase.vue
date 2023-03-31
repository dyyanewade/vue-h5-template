<template>
  <div class="exception-base">
    <svg-icon name="no-permission" class-name="custom-class" v-if="type === '403'" />
    <svg-icon name="not-found" class-name="custom-class" v-if="type === '404'" />
    <svg-icon name="service-error" class-name="custom-class" v-if="type === '500'" />

    <div class="back">
      <router-link to="/home">
        <van-button plain type="default">回到首页</van-button>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
  import SvgIcon from './SvgIcon.vue';
  type ExceptionType = '403' | '404' | '500';

  interface Props {
    /** 异常类型 403 404 500 */
    type: ExceptionType;
  }
  defineProps<Props>();
</script>

<style scoped lang="scss">
  .exception-base {
    @include page-common-set(1);
    // @include flex(y, center, conter);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .back {
      margin-top: 100px;
    }
  }
  .custom-class {
    width: 600px;
    height: 600px;
    // margin: 300px auto;
  }
</style>
