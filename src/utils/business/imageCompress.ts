import Compressor from 'compressorjs';

// 封装读取文件
export const compressionFile = (file: Blob, callBack: any) => {
  if (!file || !window.FileReader) return;
  if (/^image/.test(file.type)) {
    // 创建一个reader
    const reader = new FileReader();
    // 将图片将转成 base64 格式
    reader.readAsDataURL(file);
    // 读取成功后的回调
    reader.onloadend = (e) => {
      let base64 = (e.target as FileReader).result;

      //判断图片是否大于1M,是就直接上传，反之压缩图片
      if (file.size <= 1000 * 1024) {
        callBack(base64);
      } else {
        new Compressor(file, {
          // compressorjs 默认开启 checkOrientation 选项
          quality: 0,
          success(result: any) {
            const imageInfo = {
              beforeSize: file.size / 1024 / 1024,
              afterSize: result.size / 1024 / 1024,
              resultPercentage: (100 * (file.size - result.size)) / file.size
            };
            console.log('压缩前：' + file.size / 1024 / 1024 + 'M');
            console.log('压缩后：' + result.size / 1024 / 1024 + 'M');
            console.log('压缩率：' + ~~((100 * (file.size - result.size)) / file.size) + '%');

            // result 为Blob对象 需将压缩后的Blob转为base64
            let newBase64;
            reader.readAsDataURL(result);
            reader.onloadend = (e) => {
              newBase64 = (e.target as FileReader).result;
              callBack(newBase64, imageInfo);
            };
          },
          error(err: any) {
            console.log(err.message);
          }
        });
      }
    };
  }
};
