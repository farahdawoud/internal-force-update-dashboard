import { ReactNode } from "react";
import { Cookies } from "react-cookie";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const cookies = new Cookies();
  const token = cookies.get("token");

  return <div>{token ? children : <Navigate to="/auth" />}</div>;
};
