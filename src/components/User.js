import '../App.css';
import propTypes from 'prop-types';

function User({ name, surName, age, isLoggedIn, friends, address }) {
    if (!isLoggedIn) {
        return <div>Giriş Yapılmadı.</div>
    }
    return (
        <>
            <h1 style={{color: "orange", textAlign: "center", fontSize: 50}}><u>User.js</u></h1>
            <h1 className='user'>{'user =>'}
                {isLoggedIn ? ` ${name} ${surName} (${age})` : ' Giriş Yapılmadı!.'}
            </h1>
            <br />
            <br />

            {address.title} {address.zip}
            {friends &&
                friends.map((friend) => (
                    <div key={friend.id}>
                        {friend.id} - {friend.name}
                    </div>
                ))
            }
        </>
    )
}

User.propTypes = {
    name: propTypes.string.isRequired,
    surName: propTypes.string.isRequired,
    age: propTypes.oneOfType([
        propTypes.number,
        propTypes.string
    ]).isRequired,
    isLoggedIn: propTypes.bool.isRequired,
    friends: propTypes.array,
    address: propTypes.shape({
        title: propTypes.string,
        zip: propTypes.oneOfType([
            propTypes.number,
            propTypes.string
        ]),
    })
}
User.defaultProps = {
    name: "İsimsiz",
    isLoggedIn: false
}
export default User;