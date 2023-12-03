import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  MyForm,
  MyField,
  Label,
  InputContainer,
  ButtonForm,
  ErrorMsg,
} from './PhoneBookForm.styled';
import { addContact } from '../../redux/fetchAPI';
import { selectContacts } from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PhoneBookSchema = Yup.object().shape({
  name: Yup.string()
    .min(6, 'Too short!')
    .max(9, 'Too long!')
    .required('This field is required!'),
});

const PhoneBookForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = ({ name, phone }, { resetForm }) => {
    const finalContact = {
      id: nanoid(),
      name: name,
      phone: phone,
    };
  
    const identContactName = contacts.find(contact => contact.name === name);

    if (identContactName) {
      return toast.info(`is already in contacts`, 'ok');
    }
    console.log(name, phone);
    dispatch(addContact(finalContact));
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          phone: '',
        }}
        validationSchema={PhoneBookSchema}
        onSubmit={handleSubmit}
      >
        <MyForm>
          <InputContainer>
            <Label htmlFor="name">Name</Label>
            <MyField type="text" name="name" placeholder="" />
            <ErrorMsg name="name" component="div" />
          </InputContainer>

          <InputContainer>
            <Label htmlFor="phone">Number</Label>
            <MyField type="tel" name="phone" placeholder="" />
            <ErrorMsg name="phone" component="div" />
          </InputContainer>
          <ButtonForm type="submit">Add contact</ButtonForm>
        </MyForm>
      </Formik>
      <ToastContainer />
    </>
  );
};
export default PhoneBookForm;