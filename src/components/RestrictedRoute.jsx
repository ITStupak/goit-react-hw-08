import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";

// - Якщо раут restricted і юзер залогінений, рендеримо <Navigate> to redirectTo з перенаправленням куди потрібно
// - В іншому випадку  рендеримо сам компонент (Component)

export const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
