<template>
  <div class="nav-header">
    <div class="placeholder" :style="{ height: placeholderHeigth }">
      <div class="content" :style="{ height: contentHeight, paddingTop: topSafeArea }">
        <div class="left" @click="onClickLeft">
          <span v-if="leftArrow"> <van-icon name="arrow-left" color="#fff" /></span>
          <span v-if="isLeftText">{{ leftText }}</span>
        </div>
        <div class="title">{{ title }}</div>
        <div class="right" @click="onClickRight">
          <span v-if="rightIcon">
            <van-icon :name="props.iconName" size="22" color="#fff" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router';
  import { storage } from '@/utils/index';

  const router = useRouter();

  const topSafeArea = computed(() => {
    return Number(storage.get('deviceInfo')?.statusHeight ?? 30) + 'px';
  });
  const placeholderHeigth = computed(() => {
    return Number((storage.get('deviceInfo')?.statusHeight ?? 30) + 46) + 'px';
  });
  const contentHeight = computed(() => {
    return '46px';
  });

  const props = defineProps({
    title: {
      type: String,
      default: ''
    },
    isLeftText: {
      type: Boolean,
      default: false
    },
    leftText: {
      type: String,
      default: ''
    },
    leftArrow: {
      type: Boolean,
      default: true
    },
    rightIcon: {
      type: Boolean,
      default: false
    },
    iconName: {
      type: String,
      default: 'add'
    }
  });

  const emit = defineEmits(['click-right']);

  // 左侧点击事件
  const onClickLeft = () => {
    if (props.isLeftText) return;
    router.go(-1);
  };
  // 右侧点击事件
  const onClickRight = () => {
    emit('click-right');
  };
</script>

<style lang="scss" scoped>
  .nav-header {
    // position: fixed;
    // top: 0;
    // left: 0;
    // right: 0;
    // width: 100%;
    // z-index: 999;

    // position: fixed;
    // width: 100%;
    // top: 0;

    .content {
      background: #0380c8;
      box-sizing: content-box;
      color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .left,
      .right {
        padding: 0 16px;
      }

      .title {
        max-width: 60%;
        font-weight: 500;
        font-size: 36px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
</style>
