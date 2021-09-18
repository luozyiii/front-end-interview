import React, { useReducer } from 'react';

const initalState = { count: 0 }

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1}
        case 'decrement':
            return { count: state.count - 1}
        default:
            return state
    }
}

export default function UseReducerDemo(props){
    const [state, dispatch] = useReducer(reducer, initalState)

    return (
        <div>
            <p>count: {state.count}</p>
            <button onClick={() => dispatch({type: 'increment'})}>increment</button>
            <button onClick={() => dispatch({type: 'decrement'})}>decrement</button>
        </div>
    )
}