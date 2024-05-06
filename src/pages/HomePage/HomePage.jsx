import css from "../HomePage/HomePage.module.css";

const HomePage = () => {
  return (
    <div>
      <div>
        <h2 className={css["Title"]}>Welcome to Phonebook! </h2>
      </div>
      <div className={css["DescriptionBox"]}>
        <p>
          Phonebook is your go-to contact management solution, offering seamless
          contact storage and retrieval to safeguard your important connections.
          Create, edit, delete and organize contacts as you wish. Your data is
          always at hand.
          <br></br>
          Get started with it today!
        </p>
      </div>
      <div>
        <footer>Created with ❤️ by Marina Alenteva</footer>
      </div>
    </div>
  );
};

export default HomePage;
