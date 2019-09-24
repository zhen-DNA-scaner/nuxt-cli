import Vue from 'vue'
import storage from '@/utils/storage'
import filter from '@/filters'
import directive from '@/directive'
import funlib from '@/utils/funlib'

const isDev = process.env.NODE_ENV === 'development'

Vue.prototype.$storage = storage
Vue.prototype.$funlib = funlib

//注册过滤器
Object.keys(filter).forEach(k => {
	Vue.filter(k, filter[k])
})
//注册自定义Vue指令
Object.keys(directive).forEach(k => {
	Vue.directive(k, directive[k])
})