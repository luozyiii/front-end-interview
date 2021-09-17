import React, { useRef, useEffect } from 'react';

export default function UseRefDemo(props){
    const btnRef = useRef(null) // 初始值

    // const numRef = useRef(0)
    // numRef.current

    useEffect(() => {
        console.log(btnRef.current) // DOM 节点
    }, [])

    return (
        <div>
            <button ref={btnRef}>click</button>
        </div>
    )
}