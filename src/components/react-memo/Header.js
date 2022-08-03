import React, { memo } from 'react'

function Header({number, increment}) {
  return (
    <div>Header - {number}
        {console.log('Header Component Re-rendered!')}
        <br />
        <button className='buton' onClick={increment}>Arttır</button>
        <br /><br />
        {/* <code>{JSON.stringify(data)}</code> */}
    </div>
  )
}

export default memo(Header)