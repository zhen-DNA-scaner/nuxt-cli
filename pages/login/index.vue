<template>
  <div class="login-page">

    <div class="top-wraper">

      <div class="center">
        <a href="https://xiaoyueit.com" target="_blank">
          <img class="logo" src="/img/logo.svg" alt="晓月" />
        </a>
        <p class="subtitle">晓月IT集设计与开发于一身</p>
      </div>

      <div class="form-wraper">
        <component :is="type" @onForget="type = 'forget'" @onLogin="type = 'login-form'"></component>
      </div>

    </div>

    <footer class="center">Copyright <a-icon type="copyright" /> 2019 晓月IT工作室</footer>

  </div>
</template>

<script src="./index.js"></script>
<style src="./index.scss" scoped lang="scss"></style>
<style lang="scss">
  .login-page{
    .custom-tabs{
      .ant-tabs-bar{
        border: 0;
        margin-bottom: 20px;
      }
    }
    .ant-tabs-nav-scroll{
      display: flex;
      justify-content: center;
    }
    .subtitle{
      color: $text-color-secondary;
      margin: 1em 0;
      font-size: $font-size-base;
    }
  }
</style>