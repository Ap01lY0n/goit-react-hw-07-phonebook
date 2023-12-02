import React from 'react';
import PhoneBookForm from './PhoneBookForm/PhoneBookForm';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { statusError } from '../redux/selectors';
import { resetError } from '../redux/contactsSlice';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { Title } from './App.styled';
import { toastWindow } from './toast';

const App = () => {
  const error = useSelector(statusError);
	const dispatch = useDispatch();
	useEffect(() => {
		if (error !== null) toastWindow(`Error loading contacts: ${error}`);
		dispatch(resetError());
	}, [dispatch, error]);

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