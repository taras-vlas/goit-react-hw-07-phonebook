import axios from 'axios';
import { toast } from 'react-toastify';

import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,} from './contacts-actions';  // import actions from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:4040';


/** отримання списка контактів: запит, dispatch(actions.отримання */
const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');

    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
    toast.error(error.message); 
  }
};

/** Додавання контакта: пройом даних з форми, запит, dispatch(actions.додавання */
// const addContact = (name, number) => async dispatch => {
const addContact = ({ name, number }) => dispatch => {      //****
  const contact = { name, number };

  dispatch(addContactRequest);

  //  try {
  //   const { data } = await axios.post('/contacts', contact);
    
  //   dispatch(addContactSuccess(data)); //actions.addContactSuccess(data)
  // } catch (error) {
  //   dispatch(addContactError(error));  //actions.addContactError(error)
  //   toast.error(error.message);
  // }
  //   //**** або ттаким чином:
  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

/** Видалення контакта: пройом id, запит, dispatch(actions.видалення */
// const deleteContact = id => async dispatch => {
const deleteContact = contactId => dispatch => {              //****
  dispatch(deleteContactRequest());
  
  //  try {
  //   await axios.delete(`/contacts/${id}`);

  //   dispatch(deleteContactSuccess(id));   // actions.deleteContactSuccess(id)
  // } catch (error) {
  //   dispatch(deleteContactError(error));  // actions.deleteContactError(error)
  //   toast.error(error.message);
  // }
  // //**** або ттаким чином:
  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch(error => dispatch(deleteContactError(error)));
};

// eslint-disable-next-line
export default {
  fetchContacts,
  addContact,
  deleteContact,
};
