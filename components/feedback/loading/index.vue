<template>
  <div :class="className">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
  </div>
</template>

<script>
export default {
  props: {
    size: String
  },
  computed: {
    className(){
      return ['loading-spin', `loading-spin-${this.size}`]
    }
  }
}
</script>

<style scoped>
  .loading-spin{
    position: relative;
    display: inline-block;
    font-size: 20px;
    width: 1em;
    height: 1em;
    transform: rotate(45deg);
    animation: spin 1.2s linear infinite;
  }
  .loading-spin-lg{
    font-size: 30px;
  }
  .dot{
    position: absolute;
    display: block;
    width: .45em;
    height: .45em;
    background-color: #1890ff;
    border-radius: 100%;
    transform: scale(.75);
    transform-origin: 50% 50%;
    opacity: .3;
    animation: opacity 1s linear infinite alternate;
  }
  .dot:first-child{
    top: 0;
    left: 0;
  }
  .dot:nth-child(2){
    top: 0;
    right: 0;
    animation-delay: .4s;
  }
  .dot:nth-child(3){
    right: 0;
    bottom: 0;
    animation-delay: .8s;
  }
  .dot:nth-child(4){
    bottom: 0;
    left: 0;
    animation-delay: 1.2s;
  }
  @keyframes spin {
    100% {
      transform: rotate(405deg);
    }
  }
  @keyframes opacity {
    100% {
      opacity: 1;
    }
  }
</style>