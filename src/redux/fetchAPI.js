import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://656b71b3dac3630cf7281b04.mockapi.io';

export const fetchAllContacts = createAsyncThunk('tasks/fetchAll', async (_, thunkAPI) => {
	try {
		const response = await axios.get('/contacts');
		return response.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

export const fetchPostContact = createAsyncThunk(
	'tasks/fetchPost',
	async ({ name, number }, thunkAPI) => {
		try {
			const response = await axios.post('/contacts', { name, number });
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const fetchDelContact = createAsyncThunk(
	'contacts/deleteContact',
	async (id, thunkAPI) => {
	  try {
		const { data } = await axios.delete(`contacts/${id}`);
		return data;
	  } catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	  }
	}
  );