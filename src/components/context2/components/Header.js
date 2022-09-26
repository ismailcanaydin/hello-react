import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

function Header() {
    const { id, deger } = useContext(GlobalContext)

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='alert alert-primary'>
                        <h2>{id} - Context'ten gelen veri: {deger}</h2>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header