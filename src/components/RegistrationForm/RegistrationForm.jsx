import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "../RegistrationForm/RegistrationForm.module.css";
import { selectError } from "../../redux/auth/selectors";

const RegistrationForm = () => {
  const emailRegExp = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  const RegistrationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Name Is Too Short!")
      .max(50, "Name Is Too Long!")
      .required("Required Name"),
    email: Yup.string()
      .matches(emailRegExp, "Email is not valid!")
      .required("Required Email "),
    password: Yup.string()
      .min(8, "Password Is Too Short!")
      .max(30, "Password Is Too Long!")
      .required("Required Password"),
  });

  const INITIAL_VALUES = { name: "", email: "", password: "" };
  const nameId = nanoid();
  const emailId = nanoid();
  const passwordId = nanoid();
  const dispatch = useDispatch();
  const handleSubmit = (values, action) => {
    dispatch(register(values));
    action.resetForm();
  };
  const error = useSelector(selectError);

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={RegistrationSchema}
    >
      {({ errors }) => (
        <Form className={css.form}>
          <label htmlFor={nameId} className={css.label}>
            Name
          </label>
          <Field
            className={css.input}
            type="text"
            name="name"
            id={nameId}
            placeholder="Enter your Name..."
            autoComplete="off"
          />
          <ErrorMessage
            className={css.errorText}
            name="name"
            component="span"
          />
          <label htmlFor={emailId} className={css.label}>
            Email
          </label>
          <Field
            className={css.input}
            type="text"
            name="email"
            id={emailId}
            placeholder="Enter your E-mail..."
            autoComplete="off"
          />
          <ErrorMessage
            className={css.errorText}
            name="email"
            component="span"
          />
          <label htmlFor={passwordId} className={css.label}>
            Password
          </label>
          <Field
            className={css.input}
            type="password"
            name="password"
            id={passwordId}
            placeholder="Enter your Password..."
            autoComplete="off"
          />
          <ErrorMessage
            className={css.errorText}
            name="password"
            component="span"
          />
          <button
            disabled={Object.keys(errors).length > 0}
            type="submit"
            className={css.button}
          >
            Sign Up
          </button>
          {error && (
            <span className={css.errorText}>
              Oops, some error occured {error}
            </span>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
