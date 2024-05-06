import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { HiMiniHome } from "react-icons/hi2";
import css from "../Navigation/Navigation.module.css";

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css["LinkBox"]}>
      <NavLink className={css["LinkHome"]} to="/">
        <HiMiniHome /> Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css["LinkContacts"]} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
export default Navigation;
