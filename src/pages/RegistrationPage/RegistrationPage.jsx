import css from "./RegistrationPage.module.css";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

const RegistrationPage = () => {
  return (
    <>
      <h2 className={css.title}>Registration Page</h2>
      <RegistrationForm />
    </>
  );
};

export default RegistrationPage;
