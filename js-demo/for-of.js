function muti(num) {
  return new Promise(resolve => {
    setTimeout(()=> {
      resolve(num*num)
    },1000)
  })
}

const nums = [1, 2, 3]
nums.forEach(async (i)=> {
  const res = await muti(i)
  console.log(res)
}) // 1s 后， 全部打印 1 4 9

!(async function() {
  for (const i of nums) {
    let res = await muti(i)
    console.log(res)
  }
})() // 每隔1s 依次打印 1 4 9

