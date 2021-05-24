import { useSelector, useDispatch } from "react-redux";
import operations from "../../redux/phonebook/phonebook-operations";
import { getContactID } from "../../redux/phonebook/phonebook-selectors";
import styles from "./Contact-ListItem.module.css";


const ContactItem = ({ contactID }) => {
  
  const dispatch = useDispatch();

  const contact = useSelector(getContactID(contactID)); //from redux
  const { id, name, number } = contact;

  const handleDeleteItem = () => dispatch(operations.deleteContact(id));

  return (
    <li  className= {styles.List_item} key={id}>         
       {"• " + name + ":   " + number}
      <button className={styles.List_button}
              id={id}
              type="button"
              name="delete"
              onClick={handleDeleteItem}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;








  //import { createUseStyles } from "react-jss";
 
  // const useStyles = createUseStyles({
//   item: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

  // const classes = useStyles();