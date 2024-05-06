import Contact from "../contact/contact";
import css from "../contactlist/contactlist.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/filters/selectors";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div className={css["contactlistBox"]}>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  );
};
export default ContactList;
