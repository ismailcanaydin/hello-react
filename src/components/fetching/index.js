import './styless.css'

import { useState, useEffect } from 'react'
import axios from 'axios'

function Users() {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then((res) => res.json())
        // .then((data) => setUsers(data))
        axios('https://jsonplaceholder.typicode.com/users')
            .then((res) => setUsers(res.data))
            .catch((e) => console.log(e))
            .finally(() => setIsLoading(false))
    });
    return (
        <div>
            <h1>Users</h1>
            {isLoading && <h2 className='loading'>Loading...</h2>}
            {
                users.map((user) => (
                    <h2 key={user.id}>{user.name}</h2>
                ))
            }
        </div>
    )
}

export default Users