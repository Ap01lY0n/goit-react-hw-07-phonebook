// store.js
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contactsSlice';

const customMiddleware = (store) => (next) => (action) => {
  console.log('contact added:', action);
  return next(action);
};

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [...getDefaultMiddleware(), customMiddleware],
});

export const persistor = persistStore(store);