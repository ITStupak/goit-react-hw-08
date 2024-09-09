import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Formik, Form, Field } from "formik";
import css from "../RegistrationForm/RegistrationForm.module.css";

const RegistrationForm = () => {
  const INITIAL_VALUES = { name: "", email: "", password: "" };
  const nameId = nanoid();
  const emailId = nanoid();
  const passwordId = nanoid();
  const dispatch = useDispatch();
  const handleSubmit = (values, action) => {
    dispatch(register(values));
    action.resetForm();
  };

  return (
    <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label htmlFor="nameId" className={css.label}>
          Name
        </label>
        <Field
          type="text"
          name="name"
          id={nameId}
          className={css.input}
        ></Field>
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
          Sign up
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
