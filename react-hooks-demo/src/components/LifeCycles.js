import React, { useState, useEffect } from 'react';

export default function ClickCounter(props){
    // 数组的解构
    // useState 就是一个 hook "钩"，最基本的一个 Hook
    const [count, setCount] = useState(0)

    // 模拟class 组件的 DidMount 和 DidUpdate
    useEffect(() => {
        console.log('在此发送一个ajax请求')
    })

    // 模拟class 组件的 DidMount
    useEffect(() => {
        console.log('加载完了')
    },[]) // 第二个参数 是 [] 不依赖 任何 state

    // 模拟class 组件的 DidUpdate
    useEffect(() => {
        console.log('更新了')
    }, [count]) // 第二个参数就是依赖的 state

    useEffect(() => {
        let timerId = setInterval(() => {
            console.log(Date.now())
        }, 1000)

        // 返回一个函数
        // 模拟组件销毁 WillUnMount
        return () => {
            clearInterval(timerId)
        }
    }, [])

    return (
        <div>
            <p>你点击了{count}次</p>
            <button onClick={() => setCount(count + 1)}>点击</button>
        </div>
    )
}