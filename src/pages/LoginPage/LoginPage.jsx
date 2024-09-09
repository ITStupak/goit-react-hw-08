import css from "./LoginPage.module.css";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <>
      <h2 className={css.title}>Login Page</h2>
      <LoginForm />
    </>
  );
};

export default LoginPage;
