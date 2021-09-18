import React from "react";
import useAxios from "../customHooks/useAxios";

function App() {
    const url = 'http://10.0.9.4:3001/'
    const [loading, data, error] = useAxios(url)
    if(loading) return <div>loading...</div>
    return error ? <div>{JSON.stringify(error)}</div> : <div>{JSON.stringify(data)}</div>
}

export default App