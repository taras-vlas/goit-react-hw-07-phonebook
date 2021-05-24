import React from 'react';
import styled from 'styled-components'
import Spinner from 'react-loader-spinner';
import AddContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
//import { getFilter, getLoading } from "./redux/phonebook/phonebook-selectors";

const App = () => {
  //const isloading = useSelector(getLoading);
  
  return (
      <>
        <Section>
          <h1>Phonebook</h1>
          <AddContactForm />
        </Section>
      
        <Section>
        <h2>Contacts</h2>
          {/* <Filter /> */}
          {/* {contacts.length > 1 && <Filter />} */}
          {/* {isloading ? (
              <Spinner type="TailSpin" color="#00BFFF" height={60} width={60} className="Spinner" />
                ) : (
              <ContactList />
            )} */}
         <Filter />
             <Spinner type="TailSpin" color="#00BFFF" height={60} width={60} className="Spinner" />
          <ContactList />
        </Section>
      </>  
  )
}


        // const mapStateToProps = state => {
        //   return {
        //     contacts: state.phonebook.contacts,
        //     value: state.phonebook.filter,
        //   };
        // };


const Section = styled.section`
  &:not(:last-of-type) {
    margin-bottom: 40px;
  }
`;

export default App;