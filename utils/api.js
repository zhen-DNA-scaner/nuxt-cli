import axios from '@/plugins/axios';

// 获取验证码
export const getCaptcha = () => axios.post('/api/captcha');
// 注册
export const register = ({ body }) => axios.post('/api/register', body);
// 登陆
export const login = ({ body }) => axios.post('/api/login', body);
// 忘记密码
export const forget = ({ body }) => axios.post('/api/forget', body);