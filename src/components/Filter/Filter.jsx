import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import phonebookActions from '../../redux/phonebook/phonebook-actions';
//import phonebookOperations from '../../redux/phonebook/phonebook-operations';
import phonebookSelectors from '../../redux/phonebook/phonebook-selectors';

    import { createUseStyles } from 'react-jss';

    const useStyles = createUseStyles({
        Label:{
            display: 'inline-block',
            marginBottom: 16,
            width: 200,
            fontSize: 16,
            color: '#171718',
            cursor: 'pointer',
            }, 
         
        Input: {
            color: '#171718',
            font: 'inherit',
            fontSize: '0.9rem',
            marginTop: 6,
            borderRadius: 4,
            border: '1px solid #9e9d9d',
            width: 200,
            outline: 0,
            '&:focus': {
                border: '2px solid blue',
                boxShadow: '1px 1px 3px 1px rgba(41, 107, 250, 0.14)',
                },
            }
        });

// Приймає значення з поля фільтра 
const Filter = ({ value, onChange }) => {
  const classes = useStyles();

   return (
      <div className = {classes.Label}>
        Find contacts by name
        <input className={classes.Input}
          type="text"
          name="filter"
          value={value}
          //onChange={e => onChange(e.currentTarget.value)} />
          onChange={onChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
        />
      </div>
    )
}

// Аргумент mapStateToProps функциії connect для предоставления данных хранилища вашему компоненту
const mapStateToProps = state => ({
  value: phonebookSelectors.getFilter(state),
});

// Аргумент mapDispatchToProps может быть либо объектом, либо функцией, которая возвращает либо обычный объект, либо другую функцию
const mapDispatchToProps = {
  onChange: phonebookActions.changeFilter,
  // onChange: e => (phonebookActions.changeFilter(e.currentTarget.value))
 
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);


Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onchange: PropTypes.func.isRequired,
};
