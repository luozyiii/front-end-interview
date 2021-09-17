import React, { useState, useEffect } from 'react';

export default function ClickCounter(props){
    // 数组的解构
    // useState 就是一个 hook "钩"，最基本的一个 Hook
    const [count, setCount] = useState(0)

    useEffect(() => {

    }, [])

    return (
        <div>
            <p>你点击了{count}次</p>
            <button onClick={() => setCount(count + 1)}>点击</button>
        </div>
    )
}