<template>
  <div class="about">
    <h2>联系笔者</h2>

    <div class="item">
      <span>博客：</span>
      <a href="https://yangxiaolei190.github.io/">
        <span>https://yangxiaolei190.github.io/</span>
      </a>
    </div>
    <div class="item">
      <span>QQ：</span>
      <span>1763781349</span>
    </div>
    <div class="item">
      <span>微信：</span>
      <span>dyyanewade</span>
    </div>
  </div>
</template>

<script setup lang="ts" name="about"></script>

<style scoped lang="scss">
  .about {
    @include page-common-set(1);
    h2 {
      text-align: center;
      margin-bottom: 50px;
    }
  }
  .item {
    line-height: 60px;
  }
</style>
