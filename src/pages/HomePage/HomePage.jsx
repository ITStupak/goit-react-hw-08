import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <h1 className={css.title}>PhoneBook Welcome Page!</h1>
      <p className={css.text}>Your contacts 📲 can be stored here 😉</p>
    </>
  );
};

export default HomePage;
