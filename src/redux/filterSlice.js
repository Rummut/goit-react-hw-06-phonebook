const { createSlice } = require('@reduxjs/toolkit');

const filterSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    filterContact: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { filterContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
