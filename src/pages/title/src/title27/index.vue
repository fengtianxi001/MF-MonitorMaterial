<template>
  <div class="header">
    <div class="header-midden">27应急保障数据监测中心</div>
    <!-- <div class="header-bottom">2024/05/01 星期二 10:22:00 多云</div> -->
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.header {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 60px;
  background-image: url(/materials/titles/title27.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  .header-midden {
    position: relative;
    top: -5px;
    font-family: DouYu;
    font-size: 20px;
    color: #8be5ee;
    background: linear-gradient(0deg, #c6f3ff 0%, #f3feff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  // .header-bottom {
  //   position: absolute;
  //   bottom: 15px;
  //   font-family: DouYu;
  //   font-size: 10px;
  //   color: #fff;
  // }
}
</style>
