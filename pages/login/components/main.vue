<template>
  <a-tabs class="custom-tabs" defaultActiveKey="login" @change="callback">
    <a-tab-pane tab="登陆" key="login">
      <login-form @onForget="$emit('onForget')"></login-form>
    </a-tab-pane>
    <a-tab-pane tab="注册" key="register" forceRender>
      <register-form></register-form>
    </a-tab-pane>
  </a-tabs>
</template>

<script>
const loginForm = () => import('./loginForm');
const registerForm = () => import('./registerForm');
export default {
  components: {
    loginForm,
    registerForm
  },
  methods: {
    callback(key){
      // console.log(key)
    }
  },
}
</script>