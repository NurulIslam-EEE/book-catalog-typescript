import { useAppSelector } from "../redux/hooks";
import { Navigate, useLocation } from "react-router-dom";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

function PrivateRoutes({ children }: IProps) {
  const { user, isLoading } = useAppSelector((state) => state.user);

  const { pathname } = useLocation();

  if (isLoading) {
    return <p>isLoading.....</p>;
  }

  if (!user.email && !isLoading) {
    return <Navigate to="login" state={{ path: pathname }} />;
  }
  return children;
}

export default PrivateRoutes;
