import { useState, useEffect } from 'react'
import ContactList from './contactlist'
import './App.css'
import ContactForm from './ContactForm'

function App() {
  const [contacts, setContacts] = useState([{"firstName": "King", "lastName": "King", "email": "email", "id": 9}])

  useEffect(() => {
    fetchContacts()
  },[])

  const fetchContacts = async() => {
    const response = await fetch("http://127.0.0.1:5000/contacts")
    const data = await response.json()
    setContacts(data.contacts)
    console.log(data.contacts)
  }

  return (
    <>
      <ContactList contacts={contacts} /> 
      <ContactForm/>
    </>
  );
}

export default App
