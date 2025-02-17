<template>
  <div class="header">
    <div class="header-midden">06应急保障数据监测中心</div>
    <div class="header-right">
      <div class="header-left-item">
        <i class="fa-solid fa-cloud"></i>
        <span>多云 12°c</span>
      </div>
      <div class="header-left-item">
        <span>2024-12-25 12:00:11</span>
      </div>
    </div>
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
  height: 90px;
  background-image: url(/materials/titles/title06.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  .header-midden {
    position: absolute;
    top: 15px;
    left: 20px;
    font-family: DouYu;
    font-size: 18px;
    color: #99e5ff;
  }
  .header-right {
    position: absolute;
    right: 10px;
    bottom: 55px;
    display: flex;
    grid-gap: 20px;
    font-size: 12px;
    color: #99e5ff;
    .header-left-item {
      display: flex;
      grid-gap: 4px;
      align-items: center;
      font-family: DsDigital;
    }
  }
}
</style>
