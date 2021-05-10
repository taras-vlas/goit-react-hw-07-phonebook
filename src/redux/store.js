import { configureStore } from '@reduxjs/toolkit';
import phonebookReducer from './phonebook/phonebook-reducer';

const preloadedState = {
  phonebook: {
    contacts: JSON.parse(localStorage.getItem('contacts')) || []
  }
}

const store = configureStore({
  reducer: {
    phonebook: phonebookReducer
  },
  preloadedState
});

export default store;