
import { connect } from 'react-redux';
import styled from 'styled-components'

import AddContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

import phonebookSelectors from "./redux/phonebook/phonebook-selectors";
// import { getFilter, getLoading } from "./redux/phonebook/phonebook-selectors";
import Loader from './components/Loader';

const App = ({ contacts, loading }) => {

  return (
      <>
        <Section>
          <h1>Phonebook</h1>
          <AddContactForm />
        </Section>
      
           {loading && <Loader />}
      
        <Section>
          <h2>Contacts</h2>
            {contacts.length > 1 && <Filter />}
            {/* <Filter /> */}
          <ContactList />
        </Section>
      </>  
  )
}


        const mapStateToProps = state => {
         
          return {
            contacts: phonebookSelectors.getAllContacts(state),
            loading: phonebookSelectors.getLoading(state)
          };
        };


const Section = styled.section`
  &:not(:last-of-type) {
    margin-bottom: 40px;
  }`
;

export default connect(mapStateToProps)(App);