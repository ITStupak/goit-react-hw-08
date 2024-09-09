import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";

// - Якщо раут приватний і юзер залогінений, рендеримо сам компонент (Component)
// - В іншому випадку  рендеримо <Navigate> to redirectTo з перенаправленням куди потрібно

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};
