import { FileUtils } from './file'

export const ImageUtils = {
  getId() {
    return FileUtils.getId()
  },
  chooser() {
    return FileUtils.chooser('image/*')
  },
  getDpi(url: string) {
    return new Promise<{ width: number; height: number }>((resolve) => {
      const image = new Image()
      image.onload = () => resolve({ width: image.width, height: image.height })
      image.src = url
    })
  },
}

export default ImageUtils
