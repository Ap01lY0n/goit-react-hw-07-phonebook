import React from 'react';
import PhoneBookForm from './PhoneBookForm/PhoneBookForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Title } from './App.styled';
import { selectContacts } from '../redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { fetchContacts } from "../redux/fetchAPI";

const App = () => {
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();
    useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])
  
  return (
    <div>
      <Title>Phonebook</Title>
      <PhoneBookForm />
      <Filter />
      <Title>Contacts</Title>
      {contacts.length !== 0 && <ContactList/>}
    </div>
  );
};

export default App;