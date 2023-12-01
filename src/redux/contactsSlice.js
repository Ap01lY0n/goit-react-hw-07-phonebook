import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { data: [], filter: '' },
  reducers: {
    addContact: (state, action) => {
      state.data.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.data = state.data.filter(contact => contact.id !== action.payload);
    },
    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, updateFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
