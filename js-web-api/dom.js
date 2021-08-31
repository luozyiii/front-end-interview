// const div1 = document.getElementById('div1')
// console.log(div1)

// const divList = document.getElementsByTagName('div') // 集合
// console.log('divList.length', divList.length)
// console.log('divList[0]', divList[0])

// const containerList = document.getElementsByClassName('container') // 集合
// console.log('containerList', containerList)

// const pList = document.querySelectorAll('p')
// console.log('pList', pList)

// const pList = document.querySelectorAll('p')
// const p1 = pList[0]

// // property 形式
// p1.style.width = '100px'
// p1.className = 'red'
// console.log(p1.style.width)
// console.log(p1.className)
// console.log(p1.nodeName)
// console.log(p1.nodeType)

// attribute
const pList = document.querySelectorAll('p')
const p1 = pList[0]
p1.setAttribute('data-name', 'name')
console.log(p1.getAttribute('data-name'))
p1.setAttribute('style', 'font-size:20px')