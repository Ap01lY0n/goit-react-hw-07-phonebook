import React from 'react';
import {
  ItemEl,
  ContactData,
  ContactName,
  ContactNumber,
  ContactDelete,
} from './Contacts.styled';
import { deleteContact } from '../../redux/fetchAPI';
import { useDispatch } from 'react-redux';

export const ContactItem = ({contact: { name, phone, id }}) => {
  
  const dispatch = useDispatch();

  return (
    <ItemEl>
      <ContactData>
        <ContactName>{name}</ContactName>
        <ContactNumber>{phone}</ContactNumber>
      </ContactData>
      <ContactDelete type="button" onClick={() => dispatch(deleteContact(id))}>
        &times;
      </ContactDelete>
    </ItemEl>
  );
};