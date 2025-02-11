<template>
  <div class="container">
    <div class="item" v-for="(item, keyname) in list">
      <div class="banner">
        <component :is="item" />
      </div>
      <div class="info">
        <span>{{ keyname }}</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import list from './src'
// interface PropsType {}
// const props = defineProps<PropsType>()
</script>
<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 20px;
  width: 100%;
  height: 100%;
  .item {
    box-sizing: border-box;
    width: 100%;
    padding: 10px;
    background-color: #fff;
    .banner {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100px;
      background-color: #000;
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
