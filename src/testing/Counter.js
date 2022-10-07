import React, { useState } from 'react'

function Counter() {
    const [count,setCount] = useState(0);

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count - 1)}>Azalt</button>&nbsp;
        <button onClick={() => setCount(count + 1)}>Arttır</button>

    </div>
  )
}

export default Counter