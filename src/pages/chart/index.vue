<template>
  <iframe ref="container" class="container" src="https://ppchart.com/#/" />
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: calc(100% - 4px);
  border: none;
}
</style>
