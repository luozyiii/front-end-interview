// 手写一个 ajax
const xhr = new XMLHttpRequest()
xhr.open('GET', '/data/test.json', true)
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4) {
    if(xhr.status === 200) {
      console.log(JSON.parse(xhr.responseText))
      alert(xhr.responseText)
    }else {
      alert('其他情况')
    }
  }
}
xhr.send(null)

const postXhr = new XMLHttpRequest()
postXhr.open('POST', '/xxx', true)
postXhr.onreadystatechange = function () {
  if(postXhr.readyState === 4) {
    if(postXhr.status === 200) {
      // console.log(JSON.parse(postXhr.responseText))
      alert(postXhr.responseText)
    }else {
      alert('其他情况')
    }
  }
}
postXhr.send(JSON.stringify({name: 'hi'}))

// 进阶版手写 ajax， 使用Promise
function ajax(url) {
  const p = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.onreadystatechange = function () {
      if(xhr.readyState === 4) {
        if(xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText))
        }else if(xhr.status === 404){
          reject(new Error('404 not found'))
        }
      }
    }
    xhr.send(null)
  })
  return p
}
const url = '/data/test.json'
ajax(url).then((res)=> {
  console.log(res)
}).catch((err)=> {
  console.log(err)
})