import { configureStore } from '@reduxjs/toolkit';
import contactsReducer  from './contactsSlice';
import { filterReducer } from "./filterSlice";

export const Store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    }
});