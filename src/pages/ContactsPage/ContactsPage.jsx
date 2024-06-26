import { useEffect } from "react";
import ContactForm from "../../components/contactform/contactform";
import ContactList from "../../components/contactlist/contactlist";
import SearchBox from "../../components/searchbox/searchbox";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { Toaster } from "react-hot-toast";
import css from "./ContactsPage.module.css";

const ContactsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts()); // Викликаємо функцію, що виконує запит за контактами
  });

  return (
    <div className={css["ContactsPageBox"]}>
      <Toaster position="top-right" reverseOrder={false} toastOptions={{}} />
      <h2 className={css["Title"]}>Phonebook</h2>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
