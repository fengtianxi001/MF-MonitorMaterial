<template>
  <div class="header">
    <div class="header-main">
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
      <div class="header-midden">03应急保障数据监测中心</div>
      <div class="header-right">
        <div class="header-left-item">
          <i class="fa-solid fa-circle-user"></i>
          <span>欢迎您！fengtianxi001</span>
        </div>
        <div class="header-left-item">
          <i class="fa-solid fa-power-off"></i>
          <span>退出登陆</span>
        </div>
      </div>
    </div>
    <div class="header-items">
      <div class="header-item">特殊资源</div>
      <div class="header-item">特殊资源</div>
      <div class="header-item">特殊资源</div>
      <div class="header-item">特殊资源</div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.header {
  .header-main {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80px;
    background-image: url(./bgi.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    .header-left {
      position: absolute;
      bottom: 14px;
      left: 80px;
      display: flex;
      grid-gap: 30px;
      font-size: 12px;
      color: #659ae7;
      .header-left-item {
        display: flex;
        grid-gap: 8px;
        align-items: center;
      }
    }
    .header-midden {
      position: relative;
      top: -10px;
      left: 20px;
      font-family: DouYu;
      font-size: 24px;
      background: linear-gradient(0deg, #b9cfff 0%, #fff 99%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .header-right {
      position: absolute;
      right: 80px;
      bottom: 14px;
      display: flex;
      grid-gap: 30px;
      font-size: 12px;
      color: #659ae7;
      .header-left-item {
        display: flex;
        grid-gap: 8px;
        align-items: center;
      }
    }
  }
  .header-items {
    display: flex;
    grid-gap: 60px;
    align-items: center;
    justify-content: center;
    font-family: DouYu;
    font-size: 15px;
    color: #fff;
    .header-item {
      padding: 10px 30px;
      background-image: url(./item_normal.png);
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% 100%;
    }
  }
}
</style>
