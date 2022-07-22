import { useState, useEffect } from 'react'

function UseEffect() {
    const [number, setNumber] = useState(0);
    const [name, setName] = useState('Can');

    useEffect(() => {
        console.log("number State Güncellendi.");
    }, [number]);

    useEffect(() => {
        console.log("name State Güncellendi.");
    }, [name]);

    useEffect(() => {
        console.log("Componen mount edildi.");

        const interval = setInterval(() => {
            setNumber((n) => n +1);
        }, 1000);

        return () => clearInterval(interval);
    }, [])

    return (
        <>
            <h1>{number}</h1>
            <div>
                <button onClick={() => setNumber(number + 1)}>Click</button>
            </div>
            <br />
            <h1>{name}</h1>
            <div>
                <button onClick={() => setName('İsmail Can')}>Click</button>
            </div>
        </>
    )
}

export default UseEffect