import React from 'react';
import PhoneBookForm from './PhoneBookForm/PhoneBookForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Title } from './App.styled';

const App = () => {

  return (
    <div>
      <Title>Phonebook</Title>
      <PhoneBookForm />
      <Filter />
      <Title>Contacts</Title>
      <ContactList />
    </div>
  );
};

export default App;