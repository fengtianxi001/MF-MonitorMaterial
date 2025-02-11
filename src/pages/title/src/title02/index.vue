<template>
  <div class="header">
    <div class="header-midden">02应急保障数据监测中心</div>
    <div class="header-right">
      <span>09:35:00</span>
      <span>2019-10-19</span>
      <span>13°c</span>
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
  height: 65px;
  background-image: url(./bgi.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .header-left {
    position: absolute;
    top: 25px;
    left: 10px;
    font-family: DsDigital;
    color: #dbf;
    opacity: 0.5;
  }
  .header-midden {
    font-family: DouYu;
    font-size: 24px;
    color: #fefefe;
    background: linear-gradient(0deg, #fff 0%, #cfa1ff 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .header-right {
    position: absolute;
    top: 25px;
    right: 10px;
    display: flex;
    grid-gap: 20px;
    padding-right: 50px;
    span {
      position: relative;
      display: flex;
      align-items: center;
      font-family: DsDigital;
      font-size: 18px;
      color: #dbf;
      &:not(:last-child)::after {
        position: absolute;
        right: -10px;
        width: 2px;
        height: 10px;
        content: '';
        background-color: #dbf;
        opacity: 0.3;
      }
    }
  }
}
</style>
