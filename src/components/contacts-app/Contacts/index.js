import { useState, useEffect } from 'react'

import Form from './Form'
import List from './List'

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: 'İsmail Can',
      phone_number: '123'
    },
    {
      fullname: 'Aydın',
      phone_number: '345'
    },
    {
      fullname: 'Ahmet',
      phone_number: '567'
    }
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id='container'>
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts