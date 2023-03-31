import type { MockMethod } from 'vite-plugin-mock';

const arr: any = [];
for (let index = 0; index < 20; index++) {
  arr.push({
    id: index,
    status_text: '登录成功',
    os: 'Windows 10',
    browser: 'Chrome(99.0.4844.51)',
    ip: '192.168.9' + '.' + Math.floor(Math.random() * 225),
    created: '2021-12-14 10:41:02',
    location: '局域网 局域网'
  });
}

const apis: MockMethod[] = [
  {
    url: '/mock/api/getList',
    method: 'post',
    response: () => {
      return {
        infoCode: 1,
        info: 'ok',
        data: arr
      };
    }
  },
  {
    url: '/mock/api/getStatusList',
    method: 'get',
    response: () => {
      return {
        infoCode: 1,
        info: 'ok',
        data: ''
      };
    }
  }
];

export default apis;
