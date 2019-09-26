import Vue from 'vue';
import storage from '@/utils/storage';
import filter from '@/filters';
import directive from '@/directive';
import funlib from '@/utils/funlib';
import axios from './axios'

const isDev = process.env.NODE_ENV === 'development';

//异步全局组件
const loading = () => import('@/components/feedback/loading');
Vue.component('loading', loading);

//全局方法
Vue.prototype.$storage = storage;
Vue.prototype.$funlib = funlib;
Vue.prototype.$axios = axios;

//注册过滤器
Object.keys(filter).forEach(k => {
	Vue.filter(k, filter[k]);
})
//注册自定义Vue指令
Object.keys(directive).forEach(k => {
	Vue.directive(k, directive[k]);
})