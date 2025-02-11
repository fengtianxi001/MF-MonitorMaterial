import { FileUtils } from './file'

export const VideoUtils = {
  getId() {
    return FileUtils.getId()
  },
  chooser() {
    return FileUtils.chooser('video/*')
  },
  getVideoObject(url: string) {
    return new Promise<HTMLVideoElement>((resolve) => {
      const video = document.createElement('video')
      video.src = url
      video.addEventListener('loadedmetadata', () => {
        resolve(video)
        // const width = video.videoWidth;
        // const height = video.videoHeight;
        // const duration = video.duration;
        // videoInfoDiv.textContent = `视频分辨率: ${width} x ${height}, 时长: ${duration.toFixed(2)} 秒`;
        // // 释放对象 URL
        // URL.revokeObjectURL(url);
      })
      video.load()
    })
  },
}

export default VideoUtils
