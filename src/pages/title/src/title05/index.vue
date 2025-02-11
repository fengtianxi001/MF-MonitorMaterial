<template>
  <div class="header">
    <div class="header-left">
      <div class="header-left-item">
        <i class="fa-solid fa-location-dot"></i>
        <span>山西</span>
      </div>
      <div class="header-left-item">
        <i class="fa-solid fa-cloud"></i>
        <span>多云 13-25°c</span>
      </div>
      <div class="header-left-item">
        <i class="fa-solid fa-message"></i>
        <span> 甘肃省农业部相关消息... </span>
      </div>
    </div>
    <div class="header-midden">05应急保障数据监测中心</div>
    <div class="header-right">
      <div class="header-right-item">
        <i class="fa-solid fa-circle-user"></i>
        <span>欢迎您！fengtianxi001</span>
      </div>
      <div class="header-right-item">
        <i class="fa-solid fa-power-off"></i>
        <span>退出登陆</span>
      </div>
    </div>
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
  height: 180px;
  background-image: url(./bgi.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  .header-left {
    position: absolute;
    bottom: 80px;
    left: 40px;
    display: flex;
    grid-gap: 30px;
    font-size: 12px;
    color: #70e2ca;
    .header-left-item {
      display: flex;
      grid-gap: 4px;
      align-items: center;
    }
  }
  .header-midden {
    position: relative;
    top: -10px;
    font-family: DouYu;
    font-size: 23px;
    color: #fff;
  }
  .header-right {
    position: absolute;
    right: 40px;
    bottom: 80px;
    display: flex;
    grid-gap: 40px;
    font-size: 12px;
    color: #70e2ca;
    .header-right-item {
      display: flex;
      grid-gap: 4px;
      align-items: center;
    }
  }
}
</style>
