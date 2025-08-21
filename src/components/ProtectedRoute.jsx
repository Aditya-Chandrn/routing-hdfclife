import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("user"); // simple auth check
  return isLoggedIn ? children : <Navigate to="/login" />;
}
