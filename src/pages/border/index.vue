<template>
  <div class="container">
    <div class="item" v-for="item in 100">
      <div class="banner"></div>
      <div class="info">
        <span>title{{ item }}</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Button } from '@arco-design/web-vue'
// interface PropsType {}
// const props = defineProps<PropsType>()
</script>
<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  width: 100%;
  height: 100%;
  .item {
    box-sizing: border-box;
    width: 100%;
    padding: 10px;
    background-color: #fff;
    .banner {
      height: 300px;
      background-color: #f2f3f5;
      border: 1px solid #dedede;
    }
    .info {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
    }
  }
}
</style>
