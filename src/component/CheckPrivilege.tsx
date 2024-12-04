import React from "react";
import { Navigate, useLocation, NavLink } from "react-router"; // Make sure the import is from 'react-router-dom'
import { Logger } from "../logger/Logger";

type Props = {
  children: React.ReactNode;
  allowedRoles: string[];
};

const CheckPrivilege = ({ children, allowedRoles }: Props) => {
  const data = {
    name: "Rajkumar",
    role: "BDE",
  };

  const isAllowed = allowedRoles.some((role: string) => role === data.role);

  const location = useLocation();

  if (isAllowed) return <div>{children}</div>;
  else {
    return <Navigate state={{ from: location }} to="/login" replace />;
  }
};

export default CheckPrivilege;
