<template>
  <div class="header">
    <div class="header-left">
      <div class="header-left-item">数字基建</div>
      <div class="header-left-item">数字基建</div>
      <div class="header-left-item">数字基建</div>
      <div class="header-left-item active">数字基建</div>
    </div>
    <div class="header-midden">
      <div class="cn">04应急保障数据监测中心</div>
      <div class="en">New infrastructure digital command center</div>
    </div>
    <div class="header-right">
      <div class="header-right-item">数字基建</div>
      <div class="header-right-item">数字基建</div>
      <div class="header-right-item">数字基建</div>
      <div class="header-right-item">数字基建</div>
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
  height: 80px;
  background-image: url(./bgi.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  .header-left {
    position: absolute;
    top: 18px;
    left: 120px;
    display: flex;
    grid-gap: 10px;
    .header-left-item {
      display: flex;
      align-items: center;
      padding: 4px 20px;
      font-size: 12px;
      color: #fff;
      cursor: pointer;
      background-image: url(./item_normal_l.png);
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% 100%;
      &.active,
      &:hover {
        background-image: url(./item_active_l.png);
      }
    }
  }
  .header-midden {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    .cn {
      font-family: DouYu;
      font-size: 24px;
    }
    .en {
      font-size: 14px;
    }
  }
  .header-right {
    position: absolute;
    top: 18px;
    right: 120px;
    display: flex;
    grid-gap: 10px;
    .header-right-item {
      display: flex;
      align-items: center;
      padding: 4px 20px;
      font-size: 12px;
      color: #fff;
      cursor: pointer;
      background-image: url(./item_normal_r.png);
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% 100%;
      &.active,
      &:hover {
        background-image: url(./item_active_r.png);
      }
    }
  }
}
</style>
