import User from './User.js'

function UserComponent() {

    const name = "İsmail Can";
    const surName = "Aydın";
    const isLoggedIn = false;
    const friends = [
        {
            id: 1,
            name: 'Ahmet'
        },
        {
            id: 2,
            name: 'Mehmet'
        },
        {
            id: 3,
            name: 'Mustafa'
        },
        {
            id: 4,
            name: 'Namık'
        },
    ]

    return (
        <>
            <h1>{name}{surName}</h1>
            <h1>{`Benim adım ${name}, soyadım ${surName}`}</h1>
            <h1>
                {isLoggedIn
                    ? `Benim adım ${name}, soyadım ${surName}`
                    : `Giriş Yapmadınız.`
                }
            </h1>

            <User
                name="İsmail can"
                surName="Aydın"
                isLoggedIn={true}
                age={29}
                friends={friends}
                address={{
                    title: 'Alanya/Antalya',
                    zip: "07400",
                }}
            />
            
        </>
    )
}
export default UserComponent