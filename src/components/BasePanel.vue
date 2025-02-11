<template>
  <div class="base-panel">
    <div></div>
  </div>
</template>
<script setup lang="ts">
// interface PropsType {}
// const props = defineProps<PropsType>()
</script>
<style lang="scss" scoped>
.base-panel {
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
</style>
