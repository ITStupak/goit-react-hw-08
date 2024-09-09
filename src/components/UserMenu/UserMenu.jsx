import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <>
      <button onClick={handleLogout} className={css.button}>
        Logout
      </button>
    </>
  );
};

export default UserMenu;
