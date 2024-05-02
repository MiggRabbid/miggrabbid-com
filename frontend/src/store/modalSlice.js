import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
    modalType: null,
    data: null,
  },
  reducers: {
    modalOpen: (state, { payload }) => {
      console.log(payload);
      return ({
        ...state,
        isOpen: true,
        modalType: payload.modalType,
        data: payload.message,
      });
    },
    modalClose: (state) => ({
      ...state,
      isOpen: false,
      modalType: null,
      data: null,
    }),
  },
});

export const { actions } = modalSlice;

export default modalSlice.reducer;
