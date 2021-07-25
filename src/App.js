import { connect } from 'react-redux';
import React, { Component } from 'react';
import contactsSelectors from './redux/phonebook/contacts-selectors';
import contactsOperations from './redux/phonebook/contacts-operations';

import BrandMark from './Components/BrandMark';
import Loader from './Components/Loader';
import Container from './Components/Container';
import HookForm from './Components/HookForm';
import ContactsList from './Components/ContactsList';
import Filter from './Components/Filter';

import { ToastContainer } from 'react-toastify';
//import Alert from '@material-ui/lab/Alert';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <Container>
        <BrandMark />
        <HookForm />        
          {this.props.isLoadingContacts && <Loader />}
          {/* {loading && <Loader />} */}
          {/* {isError && <Alert severity="error">{isError.message}</Alert>} */}
          {/* <Alert severity="error"> api-server not started</Alert> */}
          <ToastContainer autoClose={2000} />  
        <hr />
                    
              {/* Перевірка: кількість контактів > 1 {contacts.length > 1 && <Filter />} */}
                <Filter />   
            <ContactsList />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);



