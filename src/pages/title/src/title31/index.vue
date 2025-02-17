<template>
  <div class="header">
    <div class="header-midden">30应急保障数据监测中心</div>
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
  height: 150px;
  background-image: url(/materials/titles/title31.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  .header-midden {
    position: relative;
    top: -10px;
    font-family: DouYu;
    font-size: 20px;
    color: #000;
    text-shadow: 0 0 10px rgba(0, 0, 0, 50%);
    background: linear-gradient(0deg, #dafbff 0%, #b2f2fc 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
