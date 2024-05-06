import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as Yup from "yup";
import css from "../LoginForm/LoginForm.module.css";

const initialValues = {
  email: "",
  password: "",
};
const validationSchema = Yup.object({
  email: Yup.string()
    .required("Email is required!")
    .email("Must be a valid email!"),
  password: Yup.string()
    .required("Password is required!")
    .min(8, "Password must be at least 8 characters!"),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ email, password }, actions) => {
    dispatch(login({ email, password }));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css["FormBox"]}>
        <label htmlFor="email">Email:</label>

        <div>
          <Field
            className={css["Input"]}
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="username"
          />
          <ErrorMessage
            className={css["ErrorMessage"]}
            name="email"
            component="span"
          />
        </div>

        <label htmlFor="password">Password:</label>

        <div>
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

        <button className={css["ButtonSignIn"]} type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
