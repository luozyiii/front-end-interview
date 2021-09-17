import React, { useState } from 'react';

import ClickCounter from "./components/ClickCounter";
import ClickCounterClass from "./components/ClickCounterClass"
import LifeCycles from "./components/LifeCycles"
import FriendStatus from "./components/FriendStatus"
import UseRefDemo from "./components/UseRefDemo"
import UseContextDemo from "./components/UseContextDemo"

function App() {
    const [flag, setFlag] = useState(true)
    const [id, setId] = useState(1)
    return (
        <div className="App">
            <p>React hooks 示例</p>
            <hr />
            {/* <ClickCounter />
            <hr />
            <ClickCounterClass />
            <hr /> */}
            {/* {flag && <LifeCycles />} */}
            {/* {flag && <FriendStatus friendId={id}/>} */}
            {/* <button onClick={() => setFlag(false)}>flag = false</button> */}
            {/* <button onClick={() => setId(id + 1)}>id++</button> */}

            {/* <UseRefDemo /> */}
            <UseContextDemo />
        </div>
    );
}

export default App;
