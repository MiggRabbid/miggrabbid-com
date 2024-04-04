import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
    modalType: null,
    message: null,
  },
  reducers: {
    modalOpen: (state, { payload }) => {
      console.log(payload);
      return ({
        ...state,
        isOpen: true,
        modalType: payload.modalType,
        message: payload.message || null,
      });
    },
    modalClose: (state) => ({
      ...state,
      isOpen: false,
      modalType: null,
      message: null,
    }),
  },
});

export const { actions } = modalSlice;

export default modalSlice.reducer;
