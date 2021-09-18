import React, { useState, memo, useMemo } from 'react';

// 子组件
// function Child({ userInfo }) {
//     console.log('Child render...', userInfo)
//     return <div>this is Child {userInfo.name} {userInfo.age}</div>
// }

// 类似class PureComponent，对 props 进行浅层对比
const Child = memo(({ userInfo }) => {
    console.log('Child render...', userInfo)
    return <div>this is Child {userInfo.name} {userInfo.age}</div>
})


function UseMemoDemo(){
    console.log('Parent render...')

    const [count, setCount] = useState(0)
    const [name, setName] = useState('leslie')

    // const userInfo = {name, age: 20}
    // 用 useMemo 缓存数据，有依赖
    const userInfo = useMemo(() => {
        return {name, age: 20}
    }, [name])


    return (
        <div>
            <p>useMemo demo count: {count}</p>
            <button onClick={() => setCount(count + 1)}>click</button>
            <Child userInfo={userInfo}/>
        </div>
    )
}
export default UseMemoDemo