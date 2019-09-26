<template>
  <a-form
    id="components-form-demo-normal-forget"
    :form="form"
    class="forget-form"
    @submit="handleSubmit"
  >
    <a-form-item>
      <a-alert v-if="message" :message="message" :type="msgType" showIcon closable />
    </a-form-item>
    <a-form-item>
      <a-input
        v-decorator="[
          'email',
          {rules: [
            { required: true, message: '邮箱不能为空!' },
            { type: 'email', message: '请输入正确的邮箱' }
          ]},
        ]"
        placeholder="邮箱"
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
          'password2',
          { rules: [{ required: true, message: '密码不能为空!' }] }
        ]"
        type="password"
        placeholder="新密码"
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
      <a-row :gutter="8">
        <a-col :span="14">
          <a-input
            v-decorator="[
              'captcha',
              {rules: [{ required: true, message: '请输入验证码' }]}
            ]"
            placeholder="验证码"
            size="large"
          >
            <a-icon
              slot="prefix"
              type="code"
              style="color: rgba(0,0,0,.25)"
            />
          </a-input>
        </a-col>
        <a-col :span="10">
          <a-button block size="large" @click="getCaptcha" :disabled="captchaDisabled">{{captchaText || '发送验证码'}}</a-button>
        </a-col>
      </a-row>
    </a-form-item>
    <a-form-item>
      <a-button
        type="primary"
        html-type="submit"
        class="forget-form-button"
        size="large"
        :loading="loading"
      >
        提交
      </a-button>
    </a-form-item>
    <a-form-item>
      <a
        class="login-form-forgot"
        @click.prevent="$emit('onLogin')"
      >
        登陆/注册
      </a>
    </a-form-item>
  </a-form>
</template>

<script>
  import { getCaptcha, forget } from '@/utils/api'
  export default {
    beforeCreate () {
      this.form = this.$form.createForm(this);
    },
    data () {
      return {
        captchaDisabled: false,
        captchaText: '',
        loading: false,
        message: '',
        msgType: ''
      }
    },
    methods: {
      handleSubmit (e) {
        e.preventDefault();
        this.form.validateFields(async (err, values) => {
          if (!err) {
            this.loading = 'loading';
            const res = await forget({ body: values });
            if (res.status === 200) {
              this.msgType = 'success';
              this.message = '验证成功';
              setTimeout(()=>{
                this.$router.push('/');
              }, 1000);
            }
            this.loading = false;
          }
        });
      },
      async getCaptcha () {
        this.form.validateFields(['email'], async (err, values) => {
          if(!err){
            if(!this.form.getFieldsValue().email) return false;
            this.captchaDisabled = true;
            const res = await getCaptcha();
            console.log(res);
            this.captchaCountdown();
          }
        })
      },
      captchaCountdown () {
        let time = 60000;
        this.captchaText = `${time/1000}s`;
        const timer = setInterval(()=>{
          time -= 1000;
          if(time === 0) {
            clearInterval(timer);
            this.captchaText = '';
            this.captchaDisabled = false;
          }else{
            this.captchaText = `${time/1000}s`;
          }
        }, 1000);
      }
    },
  };
</script>

<style lang="scss">
  #components-form-demo-normal-forget .forget-form {
    max-width: 300px;
  }
  #components-form-demo-normal-forget .forget-form-forgot {
    float: right;
  }
  #components-form-demo-normal-forget .forget-form-button {
    width: 100%;
    margin-top: 20px;
  }
  .forget-form {
    .login-form-forgot{
      display: block;
      text-align: center;
    }
  }
</style>