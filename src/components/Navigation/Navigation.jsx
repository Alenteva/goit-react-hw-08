import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "../Navigation/Navigation.module.css";

export const Navigation = () => {
  const { isLoggedIn } = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink className={css["LinkHome"]} to="/">
        Home
      </NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};
export default Navigation;
