const { createSlice } = require('@reduxjs/toolkit');

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    deleteContact: (state, action) => {
      return state.filter(el => el.id !== action.payload);
    },
    addContact: (state, action) => {
      return [...state, action.payload];
    },
  },
});
export const { deleteContact, addContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
