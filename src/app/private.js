import React from "react";
import { Route } from "react-router-dom";
import Auth from "../components/screens/admin/auth";

export default function private_routes(props) {
  const {
    component: Component,
    path,
    isAdmin,
    loading,
    isAuthenticated,
    ...rest
  } = props;
  let output = (
    <Route
      {...rest}
      render={(item) =>
        isAuthenticated ? (
          <Auth {...props} />
        ) : (
          <Component {...props} {...item} />
        )
      }
    />
  );

  return output;
}
