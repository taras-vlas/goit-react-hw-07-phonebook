import React from 'react';
import styled from 'styled-components'
import Spinner from 'react-loader-spinner';
import { useSelector } from "react-redux";
import AddContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import { getIsLoading } from "./redux/phonebook/phonebook-selectors";

import Filter from './components/Filter/Filter';

const App = () => {
  const isLoading = useSelector(getIsLoading);

  return (
    <>
      <Section>
        <h1>Phonebook</h1>
        <AddContactForm />
      </Section>
          
      <Section>
        <h2>Contacts</h2>
    
        <Filter />
       
            {/* {isLoading && <p>Loading...</p>} */}
            {isLoading && 
              <Spinner type="TailSpin" color="#00BFFF" height={40} width={40} className="Spinner" timeout={3000} />
            }
        <ContactList />
      </Section>
    </>        
  );
};

const Section = styled.section`
  &:not(:last-of-type) {
    margin-bottom: 40px;
  }
`;

export default App;