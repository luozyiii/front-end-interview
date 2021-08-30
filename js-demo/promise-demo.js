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

const url1 = 'http://xxx.com/a.png'
const url2 = 'http://xxx.com/b.png'
loadImg(url1).then(img1 => {
    console.log(img1.width)
    return img1 // 普通对象
}).then(img1 => {
    console.log(img1.height)
    return loadImg(url2) // promise 实例
}).then(img2 => {
    console.log(img2.width)
}).catch((err)=> {
    console.log(err)
})

