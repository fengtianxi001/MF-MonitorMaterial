<template>
  <div class="base-panel">
    <div class="base-panel-banner" ref="wrap">
      <component :is="data.component" ref="container" />
    </div>
    <div class="base-panel-info">{{ data.name }}</div>
  </div>
</template>
<script setup lang="ts">
import { useAutofit } from '@/hooks'
interface PropsType {
  data: any
}
const props = defineProps<PropsType>()

const { container, wrap } = useAutofit()
</script>
<style lang="scss" scoped>
.base-panel {
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  background-color: var(--color-menu-light-bg);
  border: 1px solid var(--color-border);
  &-banner {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background-color: #000;
    border: 1px solid var(--color-border);
    transform: scale(1);
  }
  &-info {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    color: var(--color-text-2);
  }
}
</style>
