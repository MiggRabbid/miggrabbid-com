export const getModalState = (state) => state.modalReducer.isOpen;

export const getModalType = (state) => state.modalReducer.modalType;

export const getModalMessage = (state) => state.modalReducer.message;
