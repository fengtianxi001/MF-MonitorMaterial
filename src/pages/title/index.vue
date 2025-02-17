<template>
  <div class="container">
    <BasePanel v-for="(item, keyname) in list" :data="item" />
  </div>
</template>
<script setup lang="ts">
import list from './src'
import { BasePanel } from '@/components'
</script>
<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 20px;
  width: 100%;
  height: 100%;
}
</style>
