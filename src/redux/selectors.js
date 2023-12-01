import { updateFilter } from './contactsSlice';
import { createSelector } from '@reduxjs/toolkit';

export const getContacts = (state) => state.contacts.data;
export const getFilter = (state) => state.contacts.filter;
export const selectVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter((contact) => contact.name.toLowerCase().includes(filter));
  }
);

export const onFilterInput = (dispatch, value) => {
  dispatch(updateFilter(value.toLowerCase().trim()));
};

