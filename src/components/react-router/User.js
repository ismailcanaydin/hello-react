import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import axios from 'axios'
import { Link, Outlet } from 'react-router-dom'
import Users from './Users'

function User() {
    const { id } = useParams()
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)
    const [totalUser, setTotalUser] = useState([])

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => setUser(res.data))
            .finally(() => setLoading(false))
    }, [id])

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/`)
            .then(res => setTotalUser(res.data))
            .finally(() => setLoading(false))
    }, [id])
    return (
        <div>
            <div>User Detail</div>
            {loading && <div>Loading...</div>}
            {!loading &&
                <div>
                    id: {id}
                    <br /><br />
                    <code>{JSON.stringify(user)}</code>
                    <h2>Name:{user.name}</h2>
                    <h2>UserName:{user.username}</h2>
                    <h2>Email:{user.email}</h2>
                    <Link to={`/user/${parseInt(id) <= totalUser.length && parseInt(id) + 1}`}>
                        <h3>Next User ({parseInt(id) <= totalUser.length && parseInt(id) + 1}) - Total({totalUser.length})</h3>
                    </Link>
                </div>
            }
        </div>
    )
}

export default User