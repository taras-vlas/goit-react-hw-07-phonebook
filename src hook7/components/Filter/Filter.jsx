import { useSelector, useDispatch } from "react-redux";
import actions from "../../redux/phonebook/phonebook-actions";
import { getFilter } from "../../redux/phonebook/phonebook-selectors";

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


const ContactFilter = () => {
  const classes = useStyles();
  
  const dispatch = useDispatch();
  
  const filter = useSelector(getFilter);         //from redux
  
  const handleFilter = (filterText) =>
    dispatch(actions.changeFilter(filterText));

  const handleChange = (e) => {
    const filter = e.target.value;

    handleFilter(filter);
  };


  return (
    <div className = {classes.Label}>
        Find contacts by name
        <input
          type="text"
          value={filter}
          name="filter"
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
    </div>
  );
};

export default ContactFilter;