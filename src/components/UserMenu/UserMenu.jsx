import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className={css.buttonDiv}>
      <button onClick={handleLogout} className={css.button}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
