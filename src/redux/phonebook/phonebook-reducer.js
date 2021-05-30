import { combineReducers } from 'redux';          //Імпорт функц. комбайна редюсерів
import { createReducer } from '@reduxjs/toolkit'; //Імпорт функц. створення редюсера
// import {
//   fetchContactsRequest,
//   fetchContactsSuccess,
//   fetchContactsError,

//   addContactRequest,
//   addContactSuccess,
//   addContactError,
  
//   deleteContactRequest,
//   deleteContactSuccess,
//   deleteContactError,
  
//   changeFilter } from './phonebook-actions';
import actions from './phonebook-actions';


// const initialContacts = [
//   { id: "id-1", name: "Rosie Simpson", number: "+38-044-459-1256" },
//   { id: "id-2", name: "Hermione Kline", number: "+38-041-443-8912" },
//   { id: "id-3", name: "Eden Clements", number: "+38-048-645-1779" },
//   { id: "id-4", name: "Annie Copeland", number: "+38-042-227-9126" },
// ];


// ***** Створення reducers для масива items в контактах (фетч усих контактів, додавання та видалерря контакту)
const contacts = createReducer([], {
//const contacts = createReducer(initialContacts, {
  [actions.fetchContactsSuccess]: (_, { payload }) => payload,
      //*** functions
  // const addContact = (state, action) => {
  //   return [...state, action.payload]  }
  // [actions.addContactSuccess]: addContact,
  [actions.addContactSuccess]: (state, { payload }) => [...state, payload],
      //*** functions
  // const deleteContact = (state, action) => {
  //   return state.filter(({ id }) => id !== action.payload);  }
  // [actions.deleteContactSuccess]: deleteContact,
  [actions.deleteContactSuccess]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

// ***** Створення reducers для фільтра 
const filter = createReducer('', {
      //*** functions
// const changeFilter = (state, action) => {
//   return action.payload  }
// [actions.changeFilter]: changeFilter,
  [actions.changeFilter]: (_, { payload }) => payload,
});

// ***** Створення reducers індикації загрузки
const loading = createReducer(false, {
  [actions.fetchContactsRequest]: () => true,
  [actions.fetchContactsSuccess]: () => false,
  [actions.fetchContactsError]: () => false,

  [actions.addContactRequest]: () => true,
  [actions.addContactSuccess]: () => false,
  [actions.addContactError]: () => false,

  [actions.deleteContactRequest]: () => true,
  [actions.deleteContactSuccess]: () => false,
  [actions.deleteContactError]: () => false
});


export default combineReducers({
  contacts,
  filter,
  loading
});















// import { combineReducers } from 'redux';
// import { createReducer } from '@reduxjs/toolkit';
// import phonebookActions from './phonebook-actions';

// const initContacts = [
//   { id: "id-1", name: "Rosie Simpson", number: "+38-044-459-1256" },
//   { id: "id-2", name: "Hermione Kline", number: "+38-041-443-8912" },
//   { id: "id-3", name: "Eden Clements", number: "+38-048-645-1779" },
//   { id: "id-4", name: "Annie Copeland", number: "+38-042-227-9126" },
// ];


// const addContact = (state, action) => {
//   if (state.find(contact => contact.name === action.payload.contact.name)) {
//     alert(`${action.payload.contact.name} is already in contacts`);
//     return state
//   }

//   return [...state, action.payload.contact]
// }

// const deleteContact = (state, action) => {
//   return state.filter(({ id }) => id !== action.payload);
// }

// const changeFilter = (state, action) => {
//   return action.payload
// }

//                             /* reducers */
// const contacts = createReducer(initContacts, {  
//   [phonebookActions.addContact]: addContact,
//   [phonebookActions.deleteContact]: deleteContact,
// });

// const filter = createReducer ('', {
//   [phonebookActions.changeFilter]: changeFilter,
// });


// export default combineReducers({ contacts, filter });














// import { createReducer } from "@reduxjs/toolkit";
// import {addContact, deleteContact, changeFilter } from "./phonebook-actions";


// const contacts = [
//   { id: "id-1", name: "Rosie Simpson", number: "+38-044-459-1256" },
//   { id: "id-2", name: "Hermione Kline", number: "+38-041-443-8912" },
//   { id: "id-3", name: "Eden Clements", number: "+38-048-645-1779" },
//   { id: "id-4", name: "Annie Copeland", number: "+38-042-227-9126" },
// ];

// const contactsReducer = createReducer(contacts, {
//   [addContact]: (state, { payload }) => [...state, payload],
//   [deleteContact]: (state, { payload }) =>
//     state.filter((contact) => contact.id !== payload),
//  //[getContactsFromLS]: (state, { payload }) => payload,
//   [changeFilter]: (state, { payload }) => payload,
// });

// export default contactsReducer;