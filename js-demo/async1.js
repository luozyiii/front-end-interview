function loadImg(src) {
  const p = new Promise((resolve, reject) => {
      const img = document.createElement('img')
      img.onload = () => {
          resolve(img)
      }
      img.onerror = () => {
          const err = new Error(`图片加载失败 ${src}`)
          reject(err)
      }
      img.src = src
  })
  return p
}
const url1 = 'http://xxx.com/a.png';
const url2 = 'http://xxx.com/b.png';

!(async function(){
  // 同步的语法
  const img1 = await loadImg(url1)
  console.log('img1', img1.width, img1.height)
  const img2 = await loadImg(url2)
  console.log('img2', img2.width, img2.height)
})()