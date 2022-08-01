import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, Route, Routes } from "react-router-dom";
import axios from 'axios'

function Users() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
            .then(res => setUsers(res.data))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div>
            <h1>Users</h1>
            {loading && <div>Loading...</div>}
            <ul>
                {
                    users.map((user) => (
                        <li key={user.id}>
                            <NavLink to={`/user/${user.id}`} className={({ isActive }) =>
                                isActive && 'navLink'}>{user.id} - {user.name}</NavLink>
                        </li>
                    ))
                }
            </ul>
            <Outlet />
        </div>
    )
}

export default Users