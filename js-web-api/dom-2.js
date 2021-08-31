const div1 = document.getElementById('div1')
const div2 = document.getElementById('div2')

// 新建节点
const newP = document.createElement('p')
newP.innerHTML = 'this is newP'

// 插入节点
div1.appendChild(newP)

// 移动节点
const p1 = document.getElementById('p1')
div2.appendChild(p1)

// 获取父元素
const parent = div1.parentNode

// 获取子元素列表
const child = div1.childNodes

const div1ChildNodesP = Array.prototype.slice.call(div1.childNodes).filter(child => {
    if(child.nodeType === 1) {
        return true
    }
    return false
})
console.log(div1ChildNodesP)

// 删除子元素
div1.removeChild(div1ChildNodesP[0])