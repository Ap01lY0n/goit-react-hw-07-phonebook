// store.js
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';

const customMiddleware = (store) => (next) => (action) => {
  console.log('contact added:', action);
  return next(action);
};

export const store = configureStore({
  reducer: contactsReducer,
  middleware: [...getDefaultMiddleware(), customMiddleware],
});
