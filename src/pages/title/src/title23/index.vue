<template>
  <div class="header">
    <div class="header-left">
      <div class="header-item">
        <span>一级模块切换</span>
        <img src="./item.svg" class="item-icon" />
      </div>
      <div class="header-item">
        <span>一级模块切换</span>
        <img src="./item.svg" class="item-icon" />
      </div>
      <div class="header-item">
        <span>一级模块切换</span>
        <img src="./item.svg" class="item-icon" />
      </div>
    </div>
    <div class="header-midden">23应急保障数据监测中心</div>
    <div class="header-right">
      <div class="header-item active">
        <span>一级模块切换</span>
        <img src="./item.svg" class="item-icon" />
      </div>
      <div class="header-item">
        <span>一级模块切换</span>
        <img src="./item.svg" class="item-icon" />
      </div>
      <div class="header-item">
        <span>一级模块切换</span>
        <img src="./item.svg" class="item-icon" />
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
  height: 70px;
  background-image: url(/materials/titles/title23.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  .header-left {
    position: absolute;
    top: 25px;
    left: 80px;
    display: flex;
    grid-gap: 20px;
    align-items: center;
    font-size: 12px;
    color: #fff;
  }
  .header-right {
    position: absolute;
    top: 25px;
    right: 80px;
    display: flex;
    grid-gap: 20px;
    align-items: center;
    font-size: 12px;
    color: #fff;
  }
  .header-item {
    display: flex;
    grid-gap: 4px;
    align-items: center;
    cursor: pointer;
    opacity: 0.7;
    .item-icon {
      width: 10px;
      height: 10px;
    }
    &.active,
    &:hover {
      opacity: 1;
    }
  }
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
}
</style>
