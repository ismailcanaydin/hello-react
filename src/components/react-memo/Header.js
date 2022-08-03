import React, { memo } from 'react'

function Header({number, data}) {
  return (
    <div>Header - {number}
        {console.log('Header Component Re-rendered!')}
        <br />
        <code>{JSON.stringify(data)}</code>
    </div>
  )
}

export default memo(Header)