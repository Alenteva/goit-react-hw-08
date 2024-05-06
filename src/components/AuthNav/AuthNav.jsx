import { NavLink } from "react-router-dom";
import css from "../AuthNav/AuthNav.module.css";

export const AuthNav = () => {
  return (
    <div className={css["NavLinkBox"]}>
      <NavLink className={css["NavLink"]} to="/register">
        Registration
      </NavLink>
      <NavLink className={css["NavLink"]} to="/login">
        Log In
      </NavLink>
    </div>
  );
};
export default AuthNav;
