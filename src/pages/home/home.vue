<template>
    <div class="wrap">
     <div class="background">
       <!--<img width="100%" height="100%" src="https://y.gtimg.cn/music/photo_new/T002R300x300M000003y8dsH2wBHlo.jpg?max_age=2592000">-->
       <!--<img width="100%" height="100%" src="../../common/image/bg.jpeg" alt="">-->
     </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'home'
}
</script>

<style scoped lang="scss">
  .wrap {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 150;
    background: rgba(0,0,0,0.1);
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      filter: blur(15px);
      overflow: hidden;
      background: url("../../common/image/bg1.jpg");
      background-size: 100% 100%;
      /*background-attachment: fixed;*/
    }
  }
</style>
