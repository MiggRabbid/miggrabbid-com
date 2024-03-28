import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
    modalType: null,
  },
  reducers: {
    modalOpen: (state, { payload }) => ({
      ...state,
      isOpen: true,
      modalType: payload,
    }),
    modalClose: (state) => ({
      ...state,
      isOpen: false,
      modalType: null,
    }),
  },
});

export const { actions } = modalSlice;

export default modalSlice.reducer;
