import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  ContactsBookForm,
  Text,
  ContactsBookInput,
  SubmitBtn,
  ValidationError,
} from './PhoneBookForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostContact } from '../../redux/fetchAPI'; 

const PhoneBookSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too short!').required('This field is required!'),
  number: Yup.string()
    .min(6, 'Too short!')
    .max(9, 'Too long!')
    .required('This field is required!'),
});

const PhoneBookForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.data);

  const onFormSubmit = newContact => {
    handleAddContact(dispatch, contacts, newContact);
  };

  const handleAddContact = async (dispatch, contacts, newContact) => {
    const hasContact = contacts.some(({ name }) => name.toLowerCase() === newContact.name.toLowerCase());
    const isNumberExists = contacts.some(({ number }) => number === newContact.number);

    if (hasContact) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    if (isNumberExists) {
      alert(`${newContact.number} is already in contacts.`);
      return;
    }

    try {
      await dispatch(fetchPostContact(newContact));
    } catch (error) {
      alert(`Error adding contact: ${error.message}`);
    }
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={PhoneBookSchema}
      onSubmit={(value, helper) => {
        onFormSubmit(value);
        helper.resetForm({
          values: {
            name: '',
            number: '',
          },
        });
      }}
    >
      <ContactsBookForm>
        <label>
          <Text>Name-Surname:</Text>
          <ContactsBookInput name="name" placeholder="Yaroslav Harkavec" />
          <ValidationError name="name" component="span" />
        </label>

        <label>
          <Text>Number:</Text>
          <ContactsBookInput
            type="text"
            name="number"
            placeholder="111-11-11"
          />
          <ValidationError name="number" component="span" />
        </label>
        <SubmitBtn type="submit">Add contact</SubmitBtn>
      </ContactsBookForm>
    </Formik>
  );
};

export default PhoneBookForm;
