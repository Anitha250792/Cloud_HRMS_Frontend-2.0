import { Navigate } from "react-router-dom";

function ProtectedRoute({
  children,
  allowedRole,
}) {

  const token =
    localStorage.getItem(
      "accessToken"
    );

  const role =
    localStorage.getItem(
      "userRole"
    );

  if (!token) {

    return (
      <Navigate to="/" />
    );

  }

  if (
    allowedRole &&
    role !== allowedRole
  ) {

    return (
      <Navigate to="/" />
    );

  }

  return children;
}

export default ProtectedRoute;