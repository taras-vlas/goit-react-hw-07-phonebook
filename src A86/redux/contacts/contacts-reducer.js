import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  changeFilter,
  deleteContactRequest,
  deleteContactError,
  deleteContactSuccess,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './contacts-actions';

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "+38-044-459-1256" },
  { id: "id-2", name: "Hermione Kline", number: "+38-041-443-8912" },
  { id: "id-3", name: "Eden Clements", number: "+38-048-645-1779" },
  { id: "id-4", name: "Annie Copeland", number: "+38-042-227-9126" },
];

const contacts = createReducer(initialContacts, {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

export default combineReducers({
  contacts,
  filter,
  loading,
});
