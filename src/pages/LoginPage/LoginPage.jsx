import { useDispatch } from "react-redux";
import LoginForm from "../../components/LoginForm/LoginForm";
import { login } from "../../redux/auth/operations";
import css from "../LoginPage/LoginPage.module.css";
const LoginPage = () => {
  const dispatch = useDispatch();
  const handleLogin = (userData) => {
    dispatch(login(userData));
  };

  return (
    <div className={css["LoginBox"]}>
      <h2 className={css["Title"]}>Login</h2>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
