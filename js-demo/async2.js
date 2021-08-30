async function fn1() {
  return 100
}
const res1 = fn1()
console.log('res1',res1) // Promise 对象
res1.then((data)=> {
  console.log(data) // 100
})

!(async function(){
  const p1 = Promise.resolve(300)
  const data = await p1 // await 相当于 Promise的then
  console.log('data',data)
})()

!(async function(){
  const data = await 400 // await Promise.resolve(400)
  console.log('data',data)
})()

!(async function(){
  const p4 = Promise.reject('err') // rejected状态
  try {
    const res = await p4
    console.log(res)
  } catch (error) {
    console.log(error) // try...catch 相当于 Promise的catch
  }
})()

!(async function() {
  const p4 = Promise.reject('err') // rejected状态
  const res = await p4 // await => then
  console.log('res',res)
})