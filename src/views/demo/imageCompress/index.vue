v
<template>
  <div class="imageCompress">
    <div class="items">
      <h2>compressorjs图片压缩</h2>
      <div class="photo">
        <van-uploader
          ref="clickUploadFront"
          :after-read="afterReadFront"
          v-model="frontPicList"
          preview-size="180px"
          :max-count="1"
          class="upload-photo"
        />
      </div>
      <div class="show">
        <div>
          <p>压缩前：{{ showInfo.beforeSize.toFixed(2) + 'M' }}</p>
          <p>压缩后：{{ showInfo.afterSize.toFixed(2) + 'M' }}</p>
          <p>压缩率：{{ text }}</p>
          <p style="font-size: 14px; color: red">提示：图片小于1M不压缩，直接上传</p>
        </div>

        <van-circle v-model:current-rate="currentRate" :rate="0" :speed="100" :text="text" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="imageCompress">
  import { compressionFile } from '@/utils/index';

  const frontPicList = ref<any>([]);
  const frontPic = ref<any>([]);
  const frontErr = ref('');
  const currentRate = ref(0);
  const text = computed(() => currentRate.value.toFixed(2) + '%');
  const showInfo = ref<any>({
    beforeSize: 0,
    afterSize: 0
  });

  /**
   * @description: 文件读取完成后的回调函数
   * @return {*}
   * @author: dyyanewade
   */
  function afterReadFront(file: any) {
    frontPic.value = [];
    frontErr.value = '上传中...';
    compressionFile(file.file, postImgFront);
  }
  /**
   * @description: 提交图片到后端ocr识别
   * @param {*} base64
   * @return {*}
   * @author: dyyanewade
   */
  function postImgFront(base64: any, imageInfo: any) {
    console.log(imageInfo);
    showInfo.value = imageInfo;
    currentRate.value = imageInfo.resultPercentage;

    frontPic.value.push({ content: base64 });
    console.log(frontPic.value);
  }
</script>

<style scoped lang="scss">
  .imageCompress {
    @include page-common-set(1);

    .items {
      .photo {
        @include flex(x, between, center);
        margin: 20px 0;
        border: 1px solid #f7b0b0;
        padding: 20px;
        .upload-photo {
          border: 1px solid;
        }
      }
      .show {
        border: 1px solid lightblue;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 60px 0;
      }
    }
  }
</style>
