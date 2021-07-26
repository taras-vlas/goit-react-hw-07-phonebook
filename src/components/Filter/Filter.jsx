import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import contactsSelectors from '../../redux/phonebook/contacts-selectors';
import { changeFilter } from '../../redux/phonebook/contacts-actions';
import TextField from "@material-ui/core/TextField";
import styles from './Filter.module.scss';

const Filter = ({ value, onChange }) => {
  // <div className={styles.container}>
  //   <label className={styles.label}>
  //     Phone book search
  //     <input
  //       type="text"
  //       value={value}
  //       onChange={onChange}
  //       className={styles.input}
  //     />
  //   </label>
  // </div>
   
      return (
    <div className={styles.filter}>
      <h2 className={styles.title}>Contacts</h2>
        
        {/* <label className={styles.Label}>
        Find contacts by name
          <input className={styles.Input}
          type="text"
          name="filter"
          value={filterValue}
          placeholder="Filter search"
          //onChange={e => onChange(e.currentTarget.value)} />
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          />
        </label> */}
      
        <div className={styles.HeaderWrapper}>
          {/* <h3>Find contacts by name</h3> */}
          <TextField
            value={value}        
            onChange={onChange}        
            label = "Searches by name"       // Фільтрувати            
            //disabled={isLoading}
          />
        </div>
     </div>
    )
};

Filter.defaultProps = {
  value: '',
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};



const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);



