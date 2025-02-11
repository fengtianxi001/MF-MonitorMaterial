<template>
  <div class="header">
    <div class="header-left">
      <div class="header-left-item">数字基建</div>
      <div class="header-left-item">数字基建</div>
      <!-- <div class="header-left-item">数字基建</div> -->
    </div>
    <div class="header-midden">
      <div class="cn">04应急保障数据监测中心</div>
      <div class="en">New infrastructure digital command center</div>
    </div>
    <div class="header-right">
      <div class="header-right-item">数字基建</div>
      <div class="header-right-item">数字基建</div>
      <!-- <div class="header-right-item">数字基建</div> -->
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
  height: 200px;
  background-image: url(./bgi.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  .header-left {
    position: absolute;
    top: 70px;
    left: 250px;
    display: flex;
    grid-gap: 0;
    .header-left-item {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 120px;
      height: 30px;
      font-size: 12px;
      color: #fff;
      cursor: pointer;
      background-image: url(./item_normal_l.png);
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% 100%;
    }
  }
  .header-midden {
    position: relative;
    top: -10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    .cn {
      font-family: DouYu;
      font-size: 20px;
    }
    .en {
      font-size: 12px;
    }
  }
  .header-right {
    position: absolute;
    top: 70px;
    right: 250px;
    display: flex;
    grid-gap: 10px;
    .header-right-item {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 120px;
      height: 30px;
      font-size: 12px;
      color: #fff;
      cursor: pointer;
      background-image: url(./item_normal_r.png);
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% 100%;
    }
  }
}
</style>
