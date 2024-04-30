import Contact from "../contact/contact";
import css from "../contactlist/contactlist.module.css";
import { useSelector } from "react-redux";
// import { selectNameFilter } from "../../redux/filtersSlice";
// import { selectContacts } from "../../redux/contactsSlice";
import { selectFilteredContacts } from "../../redux/selectors";

const ContactList = () => {
  // const contactsData = useSelector(selectContacts);

  const filteredContacts = useSelector(selectFilteredContacts);

  // const search = useSelector(selectNameFilter);
  // let filterContacts = [];
  // if (contactsData !== undefined) {
  //   // Перевірка на undefined
  //   filterContacts = contactsData.filter((contact) =>
  //     contact.name.toLowerCase().includes(search.trim().toLowerCase())
  //   );
  // }
  return (
    <div className={css["contactlistBox"]}>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  );
};
export default ContactList;
