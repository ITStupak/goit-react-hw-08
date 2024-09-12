import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { selectIsLoading } from "../../redux/contacts/selectors";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId))
      .unwrap()
      .then((data) => {
        toast.success(`Contact ${data.name} was deleted!`);
      })
      .catch(toast.error("Something went wrong"));
  };

  return (
    <>
      <ul className={css["card-items"]}>
        <li className={css["card-item"]}>
          <FaUser />
          &nbsp;
          {name}
        </li>
        <li className={css["card-item"]}>
          <FaPhone />
          &nbsp;
          {number}
        </li>
      </ul>
      <button
        disabled={isLoading}
        type="button"
        className={css["card-btn"]}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete&nbsp;❌
      </button>
    </>
  );
};
export default Contact;
