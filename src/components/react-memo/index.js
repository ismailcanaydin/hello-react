import React, { useCallback, useMemo, useState } from 'react'
import Header from './Header';

function React_Memo() {
    const [number, setNumber] = useState(0);
    const [text, setText] = useState('');

    // const data = useMemo(() => {
    //     // return {name: 'Can', number}
    //     return calculateObject(number);
    // }, [number]);

    const increment = useCallback(() => {
        setNumber((prevState) => prevState + 1 )
    }, []);
    
    return (
        <div>
            <div>React_Memo</div>
            {/* <Header data={data} /> */}
            <Header increment={increment} />

            <hr />
            <h1>Number - {number}</h1>
            <hr />
            {/* <button className='buton' onClick={() => { setNumber(number + 1) }}>Arttır</button> */}
            <br /><br />
            <input value={text} onChange={({target}) => setText(target.value)} />
        </div>
    )
}

// function calculateObject(number) {
//     console.log('Calculating');
//     for(let i=0; i<100000000; i++) {}
//     console.log('Calculating complated!');
//     return [{name: 'Can', number}]
// }

export default React_Memo