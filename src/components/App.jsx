import React from 'react';
import PhoneBookForm from './PhoneBookForm/PhoneBookForm';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { Title } from './App.styled';

const App = () => {
  return (
    <div>
      <Title>Phonebook</Title>
      <PhoneBookForm />
      <Filter />
      <Title>Contacts</Title>
      <Contacts />
    </div>
  );
};

export default App;