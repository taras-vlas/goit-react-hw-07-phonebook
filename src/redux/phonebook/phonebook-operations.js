import axios from 'axios';
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
//   } from './phonebook-actions';
import actions from './phonebook-actions';
  
//axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/v1';
axios.defaults.baseURL = 'http://localhost:4040';

// Отримання списка контактів (Асинхр.операц.)
const getAllContacts = () => async dispatch => {
  dispatch(actions.fetchContactsRequest());

    // try {
    //   const { data } = await axios.get('/contacts');
    //   dispatch(actions.fetchContactsSuccess(data));
    // } catch (error) {
    //   dispatch(actions.fetchContactsError(error));
    // }
  axios
    .get("/contacts")
    .then(({ data }) => dispatch(actions.fetchContactsSuccess(data)))
    .catch((error) => dispatch(actions.fetchContactsError(error)));
};

// Додавання контактів :
const addContact = ({ name, number }) => (dispatch,   getState)  => {
  // Перевірка наявності контактів в Contacts
  const currentContacts = getState().phonebook.contacts;
  if (currentContacts.find(contact => contact.name === name)) {
    alert(`${name} is already in contacts`);
    return null;
  }
  
  // Додавання контактів (Асинхр.операц.)
  dispatch(actions.addContactRequest());

  axios
    //.post('/contacts', contact)
    .post('/contacts', { name, number })
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch(error => dispatch(actions.addContactError(error)));
};

// Видалення контактів (Асинхр.операц.)
const deleteContact = contactId => async dispatch => {
  dispatch(actions.deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(actions.deleteContactSuccess(contactId)))
    .catch(error => dispatch(actions.deleteContactError(error)));
};

          // eslint-disable-next-line
export default {
  getAllContacts,
  addContact,
  deleteContact
};








// import axios from "axios";

// import contactsActions from "./contactsActions";

// axios.defaults.baseURL = "http://localhost:4040";


// const addContact = (name, number) => (dispatch) => {
//   dispatch(contactsActions.addContactRequest());

//   axios
//     .post("/contacts", { name, number })
//     .then(({ data }) => dispatch(contactsActions.addContactSuccess(data)))
//     .catch((error) => dispatch(contactsActions.addContactError(error)));
// };


// const fetchContacts = () => (dispatch) => {
//   dispatch(contactsActions.fetchContactsRequest());

//   axios
//     .get("/contacts")
//     .then(({ data }) => dispatch(contactsActions.fetchContactsSuccess(data)))
//     .catch((error) => dispatch(contactsActions.fetchContactsError(error)));
// };


// const deleteContact = (id) => (dispatch) => {
//   dispatch(contactsActions.deleteContactRequest());

//   axios
//     .delete(`/contacts/${id}`)
//     .then(() => dispatch(contactsActions.deleteContactSuccess(id)))
//     .catch((error) => dispatch(contactsActions.deleteContactError(error)));
// };

// export default { addContact, fetchContacts, deleteContact, };









// // const fetchData = () => {
// //   return axios.get(`/`).then((res) => {
// //     console.log(res);
// //     return res;
// //   });
// // };

// const postContact = ({ name, number }) => {
//   return axios.post(`/contacts`, { name, number }).then(({ data }) => {
//     return data;
//   });
// };

// const fetchContacts = () => {
//   return axios.get(`/contacts`).then(({ data }) => {
//     return data;
//   });
// };

// const deleteContact = ({ id }) => {
//   return axios.delete(`/contacts/${id}`).then(() => {
//     return id;
//   });
// };

// export default {
//   fetchContacts,
//   postContact,
//   deleteContact,
//   // fetchData,
// };