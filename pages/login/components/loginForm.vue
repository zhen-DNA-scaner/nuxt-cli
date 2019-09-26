<template>
  <a-form
    id="components-form-demo-normal-login"
    :form="form"
    class="login-form"
    @submit="handleSubmit"
  >
    <a-form-item>
      <a-alert v-if="message" :message="message" type="error" showIcon closable />
    </a-form-item>
    <a-form-item>
      <a-input
        v-decorator="[
          'userName',
          { rules: [{ required: true, message: '用户名不能为空!' }] }
        ]"
        placeholder="用户名/邮箱"
        size="large"
      >
        <a-icon
          slot="prefix"
          type="user"
          style="color: rgba(0,0,0,.25)"
        />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input
        v-decorator="[
          'password',
          { rules: [{ required: true, message: '密码不能为空!' }] }
        ]"
        type="password"
        placeholder="密码"
        size="large"
      >
        <a-icon
          slot="prefix"
          type="lock"
          style="color: rgba(0,0,0,.25)"
        />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-checkbox
        v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          }
        ]"
      >
        记住我
      </a-checkbox>
      <a
        class="login-form-forgot"
        @click.prevent="$emit('onForget')"
      >
        忘记密码？
      </a>
      <a-button
        type="primary"
        html-type="submit"
        class="login-form-button"
        size="large"
        :loading="loading"
      >
        登陆
      </a-button>
    </a-form-item>
    <div class="third-login">
      第三方登陆：
      <a-icon class="icon github" type="github" />
      <a-icon class="icon wechat" type="wechat" />
      <a-icon class="icon qq" type="qq" />
    </div>
  </a-form>
</template>

<script>
  import { login } from '@/utils/api'
  export default {
    beforeCreate () {
      this.form = this.$form.createForm(this);
    },
    data(){
      return{
        loading: false,
        message: ''
      }
    },
    methods: {
      handleSubmit (e) {
        e.preventDefault();

        if (this.message) this.message = '';
        this.form.validateFields(async (err, values) => {
          if (!err) {
            this.loading = 'loading';
            const res = await login({ body: values });
            if (res.status === 200) this.$router.push('/');
            else this.message = res.data.errMsg;
            this.loading = false;
          }
        });
      }
    },
  };
</script>

<style lang="scss">
  #components-form-demo-normal-login .login-form {
    max-width: 300px;
  }
  #components-form-demo-normal-login .login-form-forgot {
    float: right;
  }
  #components-form-demo-normal-login .login-form-button {
    width: 100%;
  }
  .login-form {
    .third-login{
      color: $text-color-secondary;
      display: flex;
      align-items: center;
      .icon{
        font-size: 20px;
        margin: 0 8px;
        &:hover{
          cursor: pointer;
          color: $heading-color;
        }
      }
    }
  }
</style>