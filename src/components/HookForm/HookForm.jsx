import { Component } from 'react';
import { connect } from 'react-redux';
import TextField from "@material-ui/core/TextField";
import contactsOperations from '../../redux/phonebook/contacts-operations';
import contactsSelectors from '../../redux/phonebook/contacts-selectors';
import AddTodoButton from '../AddTodoButton';
import styles from './HookForm.module.scss';

class HookForm extends Component {
  state = {
    name: '',
    number: '',
  };

   /* Iнпут... */
  handleSubmit = event => {
    event.preventDefault();
    if (this.props.contacts.some(name => name.name === this.state.name))
      return alert(`${this.state.name} is already in your contacts`);
    this.props.onSubmit(this.state);

  /**  Очистка поля форми  */
    this.reset();  // or
    // this.setState({
    //   name: '',
    //   number: '',
    // });
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        {/* <label className={styles.label}> Name </label>
        <input
          onChange={this.handleChange}
          value={this.state.name}
          // className={styles.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
        <label className={styles.label}> Phone number </label> */}

          < div className={styles.HeaderWrapper}>
          {/* <h3>Find contacts by name</h3> */}
          <TextField
          label = "Name"       // Фільтрувати  
          onChange={this.handleChange}
          value={this.state.name}
          // className={styles.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required          
          />
        </div>



        {/* <input
          type="tel"
          onChange={this.handleChange}
                      value={this.state.nnumber}
          // className={styles.input}
          name="number"
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          required
        /> */}
        
        <div className={styles.HeaderWrapper}>
          <TextField
            label = "Number"       // Фільтрувати
          onChange={this.handleChange}
          value={this.state.nnumber}
          type="tel"
          // className={styles.input}
          name="number"
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          required
          />
        </div>     
 

        <AddTodoButton />
        {/* <button type="submit" className={styles.button}>
          Add
        </button> */}
      </form>
    );
  }
}

// Аргумент mapStateToProps функции connect для предоставления данных хранилища вашему компоненту
const mapStateToProps = state => ({
  contacts: contactsSelectors.getInputContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: text => dispatch(contactsOperations.addContact(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HookForm);
