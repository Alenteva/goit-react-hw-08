import { ErrorMessage, Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "../RegistrationForm/RegistrationForm.module.css";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

// Валідація за допомогою Yup
const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Must be at least 2 characters!")
    .max(50, "Must be 50 characters or less!")
    .required("Name is required!"),
  email: Yup.string()
    .required("Email is required!")
    .email("Must be a valid email!"),
  password: Yup.string()
    .required("Password is required!")
    .min(6, "Password must be at least 6 characters!"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ name, email, password }, actions) => {
    dispatch(register({ name, email, password }));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css["FormBox"]}>
        <div>
          <label htmlFor="name">Name:</label>
          <Field
            className={css["Input"]}
            type="text"
            name="name"
            placeholder="Alex Doe"
            autoComplete="current-password"
          />
          <ErrorMessage
            className={css["ErrorMessage"]}
            name="name"
            component="span"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <Field
            className={css["Input"]}
            type="text"
            name="email"
            placeholder="alex@patron.com"
            autoComplete="username"
          />
          <ErrorMessage
            className={css["ErrorMessage"]}
            name="email"
            component="span"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <Field
            className={css["Input"]}
            type="password"
            name="password"
            autoComplete="current-password"
          />
          <ErrorMessage
            className={css["ErrorMessage"]}
            name="password"
            component="span"
          />
        </div>

        <button
          className={css["ButtonSignUp"]}
          type="submit"
          title="Click to register user"
        >
          Sing Up
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
