var Mock = require('mockjs');
var Random = Mock.Random;
var xhr = new XMLHttpRequest();

const data = {
  char: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
}

// _xhr.upload.addEventListener is not a function 解决方案
Mock.XHR.prototype.upload = xhr.upload;

Mock.setup({
  timeout: '500-1000'
});

// 设置1秒至3秒间响应
// Mock.setup({ timeout: '1000-3000' });

// 扩展 Random
Random.extend({
  weekday: function(date) {
      var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      return this.pick(weekdays);
  },
  sex: function(date) {
      var sexes = ['男', '女', '中性', '未知'];
      return this.pick(sexes);
  }
});

Mock.mock('/api/captcha', {
  'captcha|1': Random.string( data.char, 4 )
});

Mock.mock('/api/register', {
  'id|1': Random.string( data.char, 16 )
});

Mock.mock('/api/login', ({ body }) => {
  if(body.userName !== 'admin'){
    return {errMsg: '用户不存在'};
  }
  if(body.password !== 'admin123'){
    return {errMsg: '用户名或密码错误'};
  }
});

Mock.mock('/api/forget', {});