import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { login } from "../../redux/auth/operations";
import css from "../LoginForm/LoginForm.module.css";

const LoginForm = () => {
  const INITIAL_VALUES = { email: "", password: "" };
  const emailId = nanoid();
  const passwordId = nanoid();
  const dispatch = useDispatch();
  const handleSubmit = (values, action) => {
    dispatch(login(values));
    action.resetForm();
  };

  return (
    <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label htmlFor="emailId" className={css.label}>
          Email
        </label>
        <Field
          type="email"
          name="email"
          id={emailId}
          className={css.input}
        ></Field>
        <label htmlFor="passwordId" className={css.label}>
          Password
        </label>
        <Field
          type="password"
          name="password"
          id={passwordId}
          className={css.input}
        ></Field>
        <button type="submit" className={css.button}>
          Login
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
