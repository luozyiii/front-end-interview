const p1 = new Promise((resolve, reject) => {

})
console.log('p1', p1)

const p2 = new Promise((resolve, reject) => {
  setTimeout(()=> {
    resolve()
  },0)
})
setTimeout(()=> {
  console.log('p2', p2)
},10)

const p3 = new Promise((resolve, reject) => {
  setTimeout(()=> {
    reject()
  },0)
})
setTimeout(()=> {
  console.log('p3', p3)
},10)