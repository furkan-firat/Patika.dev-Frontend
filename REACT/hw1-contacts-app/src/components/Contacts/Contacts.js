import {React, useState, useEffect } from 'react'
import "./contacs.css"
import List from './List/List'
import Form from './Form/Form'

function Contacts() {
  const [contacts, setContacts] = useState([
    {
        fullName: "Furkan",
        phoneNumber: "123123"
    },
    {
        fullName: "Fırat",
        phoneNumber: "333444"
    },
    {
        fullName: "Ali",
        phoneNumber: "543456"
    }
  ]);

  useEffect(() => {
    console.log(contacts)

  }, [contacts] )

    return (
    <div id='container'>
        <h1>Contacts</h1>
        <br></br>
        <List contacts = {contacts}/>
        <Form addContact = {setContacts} contacts = {contacts}/>
    </div>
  )
}

export default Contacts