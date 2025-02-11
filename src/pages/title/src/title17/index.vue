<template>
  <div class="header">
    <div class="header-midden">17应急保障数据监测中心</div>
    <div class="header-bottom">数据更新时间: 12:00:00</div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  background-image: url(./bgi.png);
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
  .header-bottom {
    position: absolute;
    bottom: 10px;
    font-family: DouYu;
    font-size: 10px;
    color: #fff;
  }
}
</style>
