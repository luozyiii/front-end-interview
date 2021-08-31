window.callback = function (data) {
  // 这就是我们跨域得到的信息
  console.log(data)
}

// <script src="http://a.com/getData.js"></script>
// 将返回 callback({name: 'hi'})