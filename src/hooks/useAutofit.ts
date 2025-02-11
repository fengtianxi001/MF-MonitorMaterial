import { onMounted, ref } from 'vue'

export function useAutofit() {
  //   const sizeEnum = {
  //     big: [2560, 1440],
  //     normal: [1920, 1080],
  //     small: [1280, 720],
  //   }
  const container = ref<HTMLElement | null>(null)
  const wrap = ref<HTMLElement | null>(null)

  onMounted(() => {
    const screenWidth = window.innerWidth
    // const screenHeight = window.innerHeight
    const elWdith = wrap.value?.clientWidth!
    // const elHeight = container.value?.clientHeight!

    // const scale = Math.min(, elHeight / screenHeight)
    // console.log('screenWidth', screenWidth)
    // console.log('elWdith', elWdith)

    container.value!.style.transform = `scale(${elWdith / screenWidth})`
  })
  return {
    container,
    wrap,
  }
}
