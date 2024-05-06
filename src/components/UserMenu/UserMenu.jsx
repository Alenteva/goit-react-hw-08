import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import { GoSignOut } from "react-icons/go";
import css from "../UserMenu/UserMenu.module.css";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css["UserMenu"]}>
      <p className={css["UserWelcome"]}>Welcome, {user.name}</p>
      <button
        className={css["ButtonLogOut"]}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout <GoSignOut />
      </button>
    </div>
  );
};
export default UserMenu;
