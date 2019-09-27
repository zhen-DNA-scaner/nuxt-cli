<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        晓月中后台管理
      </h1>
      <h2 class="subtitle">
        基于 Nuxt.js 和 Vue.js 的中后台解决方案
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          <a-icon type="file-unknown" /> Documentation
        </a>
        <a
          href="https://github.com/Zepeng-Zheng/nuxt-cli"
          target="_blank"
          class="button--grey"
        >
          <a-icon type="github" /> GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
  margin: 1em 0 .3em;
}

.subtitle {
  font-weight: 300;
  font-size: 30px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.links a{
  margin: 0 15px;
}
</style>
