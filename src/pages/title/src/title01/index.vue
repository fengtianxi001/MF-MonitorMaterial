<template>
  <div class="header">
    <div class="header-left">
      <span>
        【公告】优秀的创意设计师，丰厚的奖金和奖品等你来拿哦，赶快来参加吧
      </span>
    </div>
    <div class="header-midden">01应急保障数据监测中心</div>
    <div class="header-right">
      <span>09:35:00</span>
      <span>2019-10-19</span>
      <span>Monday</span>
      <span>cloudy</span>
      <span>13°c</span>
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
  height: 50px;
  background-image: url(/materials/titles/title01.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .header-left {
    position: absolute;
    bottom: 12px;
    left: 50px;
    display: flex;
    grid-gap: 40px;
    align-items: center;
    width: 500px;
    overflow: hidden;
    span {
      font-family: DsDigital;
      font-size: 12px;
      text-shadow: 0 3px 2px rgba(140, 211, 167, 29%);
      text-wrap: nowrap;
      background: linear-gradient(0deg, #7dffaf 0%, #c8ffdd 100%);
      background-clip: text;
      animation: text-over-roll 10s linear infinite;
      -webkit-text-fill-color: transparent;
    }
  }
  .header-midden {
    font-family: DouYu;
    font-size: 22px;
    text-shadow: 0 3px 2px rgba(140, 211, 167, 29%);
    background: linear-gradient(0deg, #7dffaf 0%, #c8ffdd 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .header-right {
    position: absolute;
    right: 0;
    bottom: 8px;
    display: flex;
    grid-gap: 20px;
    padding-right: 50px;
    span {
      position: relative;
      display: flex;
      align-items: center;
      font-family: DsDigital;
      font-size: 16px;
      text-shadow: 0 3px 2px rgba(140, 211, 167, 29%);
      background: linear-gradient(0deg, #7dffaf 0%, #c8ffdd 100%);
      background-clip: text;
      -webkit-text-fill-color: transparent;
      &:not(:last-child)::after {
        position: absolute;
        right: -10px;
        width: 2px;
        height: 10px;
        content: '';
        background-color: #6ead7c;
      }
    }
  }
}

@keyframes text-over-roll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>
