import React, { useState } from "react";


const ReactHooks = () => {
    const [counter, setCounter] = useState(0);
    const [status, setStatus] = useState('student');
    return (
        <>
            <h1>React Hooks State {counter}</h1>
            <input value={status} onChange={(e) => { setStatus(e.target.value) }} />
                React Hooks Version
                <button onClick={() => { setCounter(counter + 1) }}>+ </button>
                <button onClick={() => { setCounter(counter - 1) }}>-</button>
        </>
    )
}

export default ReactHooks