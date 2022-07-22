import { useState } from 'react'
function UseState() {
    const [name, setName] = useState('CAN');
    const [age, setAge] = useState('22');
    const [friends, setFriends] = useState(['Ahmet', 'Mehmet']);

    return (
        <>
            <h1>Merhaba {name}!</h1>
            <h2>Yaş: {age}</h2>
            <br />
            <button onClick={() => setName('İSMAİL CAN')}>İsmi değiştir</button>
            <button onClick={() => setAge('29')}>Yaşı değiştir</button>

            <br></br><br></br>

            <h2>Friends</h2>

            {friends.map((friend, index) => (
                <div key={index}>{friend}</div>
            ))}
            <br></br><br></br>
            <button onClick={() => setFriends([...friends, 'Mustafa'])}>Arkadaş ekle</button>
        </>
    )
}

export default UseState