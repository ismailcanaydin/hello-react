import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    }

    const decrease = () => {
        setCount(count - 1);
    }
    const reset = () => {
        setCount(0);
    }
    return (
        <>
            <h2>{count}</h2>
            <br></br>
            <button onClick={decrease}>Azalt</button>
            <button onClick={increase}>Arttır</button>
            <button onClick={() => setCount(0)}>Sıfırla</button>
        </>
    )
}

export default Counter