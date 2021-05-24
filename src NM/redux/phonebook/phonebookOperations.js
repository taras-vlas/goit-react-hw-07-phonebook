import axios from 'axios';
import phonebookActions from './phonebookActions';

//axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/v1';
axios.defaults.baseURL = 'http://localhost:4040';
//axios.defaults.headers.common['Authorization'] = 'a8ba0f66-29a2-4ed7-9ff2-514ea8b41c11';
//axios.defaults.headers.post['Content-Type'] = 'application/json';

const addContact = (name, number) => (dispatch, getState) => {
  // Check if a new name exists in contacts
  const currentContacts = getState().phonebook.contacts;
  if (currentContacts.find(contact => contact.name === name)) {
    alert(`${name} is already in contacts`);
    return null;
  }

  // Add a new contact
  dispatch(phonebookActions.addContactRequest());

  axios
    .post('/contacts', { name, number })
    .then(({ data }) => dispatch(phonebookActions.addContactSuccess(data)))
    .catch(error => dispatch(phonebookActions.addContactError(error)));
};

const fetchContacts = () => dispatch => {
  dispatch(phonebookActions.fetchContactsRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(phonebookActions.fetchContactsSuccess(data)))
    .catch(error => dispatch(phonebookActions.fetchContactsError(error)));
};

const deleteContact = id => dispatch => {
  dispatch(phonebookActions.deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(phonebookActions.deleteContactSuccess(id)))
    .catch(error => dispatch(phonebookActions.deleteContactError(error)));
};

export default {
  addContact,
  fetchContacts,
  deleteContact
}