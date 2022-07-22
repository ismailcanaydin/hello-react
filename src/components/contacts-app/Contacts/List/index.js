import { useState } from 'react'

function List({ contacts }) {
  const [filterText, setFilterText] = useState('');

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => (
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    ))

});

return (
  <div>
    <input
      placeholder='Filter contact'
      value={filterText}
      onChange={(e) => setFilterText(e.target.value)} />

    <ul className='list'>
      {
        filtered.map((contact, i) => (
          <li key={i}>
            <span style={{ color: 'green' }}>{i}</span><span style={{ color: 'red' }}>{contact.fullname}</span>
            <span style={{ color: 'blue' }}>{contact.phone_number}</span></li>
        ))
      }
    </ul>
      <p>Total contacts: {filtered.length}</p>
  </div>
)
}

export default List