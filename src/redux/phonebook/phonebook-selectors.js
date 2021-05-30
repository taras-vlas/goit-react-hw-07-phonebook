import { createSelector } from "@reduxjs/toolkit";

const getLoading = (state) => state.phonebook.loading;
const getError = (state) => state.phonebook.error;
const getFilter = (state) => state.phonebook.filter;

const getAllContacts = (state) => state.phonebook.contacts;

// Мемоізація функції фільтра контактів
const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
      const toLowerCaseFilter = filter.toLowerCase();
    
    return contacts.filter(contact => contact.name.toLowerCase().includes(toLowerCaseFilter) );
    //return contacts.filter(({ name }) =>      name.toLowerCase().includes(toLowerCaseFilter) );
  }
);

          // const getContactId = (contactID) => (state) =>
          //   state.phonebook.contacts.find((contact) => contact.id === contactID);
const getContactId = createSelector(
  [(_, contactId) => contactId, getAllContacts],
  (contactId, contacts) => contacts.find(contact => contact.id === contactId)
);

          // eslint-disable-next-line
export default {
  getAllContacts,
  getLoading,
    getError,
  getFilter,

  getVisibleContacts,
  getContactId
};
