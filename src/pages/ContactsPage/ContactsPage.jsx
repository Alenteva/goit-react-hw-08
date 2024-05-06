import { useEffect } from "react";
import ContactForm from "../../components/contactform/contactform";
import ContactList from "../../components/contactList/contactList";
import SearchBox from "../../components/searchBox/searchBox";
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
    <div>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          className: css.toastTextCenter,
        }}
      />
      <h2 className={css.titleContactPage}>Phonebook</h2>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
