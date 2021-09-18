import { useEffect, useState } from "react";
import axios from 'axios'

// 封装 axios 发送网络请求的自定义 Hook
function useAxios(url) {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        // 利用 axios 发送网络请求
        setLoading(true)
        // 发送一个get请求
        axios.get(url)
            .then(res => setData(res))
            .catch(err => setError(err))
            .finally(() => {setLoading(false)})
    }, [url])

    return [loading, data, error]
}

export default useAxios