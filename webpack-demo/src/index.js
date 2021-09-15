import { fn } from './a' // 解构赋值
fn()
import { fnb } from './b'
fnb()

import objc from './c'
console.log(objc)

console.log('this is index.js')

import { sum } from './math'
const res = sum(10, 20)
console.log(res)

console.log('window.ENV', ENV)

// 引入第三方模块
import _ from 'lodash'
console.log(_.each)

// 引入 css
import './style/css1.css'
import './style/css2.less'

// 引入图片
import img1 from './img/1.jpg'
import img2 from './img/2.jpeg'

const createImg = (imgUrl) => {
    let imgObj = new Image()
    imgObj.src = imgUrl
    imgObj.onload = () => {
        document.body.appendChild(imgObj)
    }
}
createImg(img1)
createImg(img2)