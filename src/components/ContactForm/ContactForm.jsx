import React, { Component } from 'react';
//import { useState } from 'react';
//import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from "./ContactForm.module.css";
//import phonebookActions from '../../redux/phonebook/phonebook-actions';
import phonebookOperations from '../../redux/phonebook/phonebook-operations';
import phonebookSelectors from '../../redux/phonebook/phonebook-selectors';


const INITIAL_STATE = {
  name: '',
  number: '',
};
             //const [state, setState] = useState(INITIAL_STATE);

// компонента ContactForm
class AddContactForm extends Component {
  state = INITIAL_STATE;

// Очистка поля форми     resetForm = () => {
  resetForm = () => {
    this.setState({
      INITIAL_STATE
      // name: '',
      // number: '',
    });
  };
  
  //       handleSubmit = (event) => {
  //         event.preventDefault();
          
  //           // if (name && number) {
  //           // this.props.onCreateContact(
  //           //   this.state.name,
  //           //   this.state.number
  //           // );
  //           this.props.onCreateContact({
  //             name: this.state.name,
  //             number: this.state.number,
  //           });
  //           ////   return this.setState({ name: '', number: '' });  // alert (...) is already in contacts`);
  //           //// }
  //           //  if (this.props.onCreateContact.some(element => element.name === this.state.name))
        
  //           //   return alert.show(`${this.state.name} is already in your contacts`);
  //           //     this.props.onSubmit(this.state);

  //           this.resetForm();
  //       };
 

  // Iнпут...
  handleChange = event => {
    const { name, value } = event.currentTarget;
 
      this.setState(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  // handleChange = ({ target }) => {
  //   const { name, value } = target;

  //   this.setState({
  //     [name]: value,
  //   })
  // };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    if (name && number) {
      this.props.onCreateContact(this.state.name, String(this.state.number));
      return this.setState({ name: '', number: '' });
    }

    return null;
  };


  render() {
    const { name, number } = this.state;
    
    return (
      <form className={styles.Form} onSubmit={this.handleSubmit}>
        
          <label className={styles.Label}>
            Name
            <input
                className={styles.Input}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                value={name}  // // {this.state.name} -  значення передає в локальний стейт
                onChange={this.handleChange}
            />
          </label>
        
          <label className={styles.Label}>
            Number
            <input
                className={styles.Input}
                type="tel"
                name="number"
                pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
                title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
                required
                value={number}      // {this.state.number}
                onChange={this.handleChange}
            />
          </label>
        
            <button className={styles.Button} type="submit">
              Add contact
            </button>
      </form>
    )
  }
}

// Аргумент mapStateToProps функції connect для надання даних сховища у пропи компонентв   з глобального стейта
const mapStateToProps = state => ({
  onCreateContact: phonebookSelectors.getAllContacts(state),
  // contacts: phonebookSelectors.getAllContacts(state),
});

// Аргумент mapDispatchToProps может быть либо объектом, либо функцией, которая возвращает либо обычный объект, либо другую функцию
    const mapDispatchToProps = {
      onCreateContact: phonebookOperations.addContact,
    };
// const mapDispatchToProps = dispatch => ({
//   onSubmit: text => dispatch(phonebookOperations.addContact(text)),
// });


AddContactForm.propTypes = {
  onCreateContact: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(AddContactForm);

