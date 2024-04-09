import { combineReducers } from '@reduxjs/toolkit';
import authReducer, { actions as authActions } from './authSlice';
import modalReducer, { actions as modalActions } from './modalSlice';
import todoReducer, { actions as todoActions } from './todoSlice';

const actions = {
  ...authActions,
  ...modalActions,
  ...todoActions,
};

export { actions };

export default combineReducers({
  authReducer,
  modalReducer,
  todoReducer,
});
