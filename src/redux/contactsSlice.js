import { createSlice } from '@reduxjs/toolkit';
import { fetchAllContacts, fetchDelContact, fetchPostContact } from './fetchAPI';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { data: [], filter: '' },
  reducers: {
    resetError: (state) => {
      state.error = null;
    },
    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(fetchAllContacts.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error.message;
      })
      .addCase(fetchDelContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDelContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter((item) => item.id !== payload.id);
      })
      .addCase(fetchDelContact.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error.message;
      })
      .addCase(fetchPostContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPostContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = [...state.items, payload];
      })
      .addCase(fetchPostContact.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error.message;
      })
  },
});

export const { resetError, updateFilter} = contactsSlice.actions;
export default contactsSlice.reducer;
