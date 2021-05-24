
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import ContactItem from "./ContactListItem";
import { getVisibleContacts } from "../../redux/phonebook/phonebook-selectors";
import operations from "../../redux/phonebook/phonebook-operations";


const ContactList = () => {
  const dispatch = useDispatch();
 
  const visibleContacts = useSelector(getVisibleContacts);               

  useEffect(() =>
  // {
  //   dispatch(operations.getAllContacts());
  //   }, [dispatch]
    () => dispatch(operations.getAllContacts()),
    []
  );

  return (
    <ul >
      {visibleContacts.map( contact => (
        <ContactItem
          //key={contact.id}
          contactID={contact.id}
        />
      ))}
    </ul>
  );
};

export default ContactList;











// import React, { Component } from 'react';
// import { connect } from 'react-redux';

// import styled from 'styled-components';
//     import { getVisibleContacts } from '../../redux/phonebook/phonebook-selectors';
// import ContactListItem from './ContactListItem';
// //import phonebookActions from '../../redux/phonebook/phonebook-actions';
// import phonebookOperations from '../../redux/phonebook/phonebook-operations';
// //import phonebookSelectors from '../../redux/phonebook/phonebook-selectors';


// // компонента ContactList
// class ContactList extends Component {
// //const ContactsList = ({ contacts, onDelete }) => (
  
//   componentDidUpdate(prevProp, prevState) {
//     const prevContacts = prevProp.contacts;
//     const currentContacts = this.props.contacts;

//     if (prevContacts !== currentContacts) {
//       localStorage.setItem('contacts', JSON.stringify(currentContacts));
//     }
//   };

//   render() {
//     const { contacts, onDelete } = this.props;

//     if (contacts.length < 1) {
//       return null;
//     }

//     return (
//       <List>
//         {contacts.map(({ id, name, number }) => {
//           return (
//             <ContactListItem
//               key={id}
//               name={name}
//               number={number}
//               onDelete={() => onDelete(id)}
//             />
//           );
//         })}
//       </List>
//     )
//   }
// }

// const List = styled.ul`
//   width: 500px;
// `;

// // Аргумент mapStateToProps функции connect для предоставления данных хранилища вашему компоненту
// const mapStateToProps = state => {
//   const { contacts, filter } = state.phonebook;
//   //const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
//   const visibleContacts = useSelector(getVisibleContacts); //from redux
  

//   return {
//     contacts: visibleContacts,
//     //contacts: phonebookSelectors.visibleContacts,
//   };
// };


// // Аргумент mapDispatchToProps может быть либо объектом, либо функцией, которая возвращает либо обычный объект, либо другую функцию
//     // const mapDispatchToProps = {
//     //   onDelete: phonebookOperations.deleteContact,
//     // };
// const mapDispatchToProps = dispatch => ({
//   onDelete: id => dispatch(phonebookOperations.deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
// //export default connect( null, mapDispatchToProps)(ContactList);






// //class ContactList extends Component {
// const ContactList = ({ contacts, onDelete }) => {
  
//   // componentDidUpdate(prevProp, prevState) {
//   //   const prevContacts = prevProp.contacts;
//   //   const currentContacts = this.props.contacts;

//   //   if (prevContacts !== currentContacts) {
//   //     localStorage.setItem('contacts', JSON.stringify(currentContacts));
//   //   }
//   // };

//   //render() 
//     // const { contacts, onDelete } = this.props;

//     // if (contacts.length < 1) {
//     //   return null;
//     // }

//     return (
//       <List>
//         {contacts.map(({ id, name, number }) => {
//           return (
//             <ContactListItem
//               key={id}
//               name={name}
//               number={number}
//               onDelete={() => onDelete(id)}
//             />
//           );
//         })}
//       </List>
//     )
//   // }
// }

// const List = styled.ul`
//   width: 500px;
// `;

// // Аргумент mapStateToProps функции connect для предоставления данных хранилища вашему компоненту
//     // const mapStateToProps = state => {
//     //   const { contacts, filter } = state.phonebook;
//     //   const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

//     //   return {
//     //     contacts: visibleContacts,
//     //     //contacts: phonebookSelectors.visibleContacts,
//     //   };
//     // };
// // const mapStateToProps = state => ({
// //   contacts: phonebookSelectors.getVisibleContacts(state),
// // });






