const p1 = Promise.resolve().then(()=> {
  return 100
})
console.log('p1', p1) // resolved, 触发后续then 回调

const p2 = Promise.resolve().then(()=> {
  throw new Error('then err')
})
console.log('p2', p2) // rejected， 触发后续catch