import React, { useState, useEffect } from 'react';

export default function Teach({couseName}){
    // 函数组件，纯函数，执行完即销毁
    // 所以，无论组件初始化（render）还是组件更新（re-render）
    // 都会重新执行一次这个函数，获取最新的组件

    // render：初始化 state 的值 '张三'
    // re-render：读取 state 的值 '张三'
    const [studentName, setStudentName] = useState('张三')
    const [teacherName, setTeacherName] = useState('李老师')

    // 错误写法
    // if(couseName) {
    //     const [studentName, setStudentName] = useState('张三')
    // }
    // if(couseName) {
    //     useEffect(() => {
    //     // 模拟学生签到
    //     localStorage.setItem('name', studentName)
    //     })
    // }

    // render：添加effect 函数
    // re-render：替换 effect 函数 (内部的函数也会重新定义)
    useEffect(() => {
        // 模拟学生签到
        localStorage.setItem('name', studentName)
    })

    useEffect(() => {
        // 模拟开始上课
        console.log(`${teacherName} 开始上课，学生 ${studentName}`)
    })

    return (
    <div>
        <p>课程：{couseName}</p>
        <p>老师：{teacherName}</p>
        <p>学生：{studentName}</p>
    </div>
    )
}