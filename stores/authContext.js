import { createContext, useEffect, useState } from "react";
import React from "react";
import netlifyIdentity from "netlify-identity-widget";

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false,
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authReady, setAuthReady] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    netlifyIdentity.on("login", (user) => {
      setUser(user);
      netlifyIdentity.close();
      setLoggedIn(true);
    });

    netlifyIdentity.on("init", (user) => {
      setUser(user);
      setAuthReady(true);
    });
    // if (!user === "null") {
    //   setLoggedIn(true);
    // }

    //init netlify identity connection
    netlifyIdentity.init();

    return () => {
      netlifyIdentity.off("login");
    };
  }, []);
  const login = () => {
    netlifyIdentity.open();
  };

  const context = {
    user,
    login,
    authReady,
    loggedIn,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
