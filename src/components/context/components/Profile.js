import { useContext, useState } from 'react'
// import UserContext from '../UserContext'
import { useUser } from '../UserContext';

function Profile() {
    // const { user, setUser } = useContext(UserContext);
    const { user, setUser } = useUser();
    console.log({ user });

    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
        setLoading(true);
        setTimeout(() => {
            setUser({ id: 2, userName: 'ismailcan', bio: 'dolar dolar dolar' })
            setLoading(false);
        }, 1500);
    }

    const handleLogout = () => {
        setUser(null)
    }

    return (
        <div>
            {
                !user ? (
                    <button className="buton" onClick={handleLogin}>
                        {loading ? "Loading..." : "Login"}
                    </button>
                ) : <button className='buton' onClick={handleLogout}>Logout</button>
            }
            <br />
            <code>{JSON.stringify({ user })}</code>
            <br />

        </div>
    )
}

export default Profile