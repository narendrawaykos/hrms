import React, { ReactNode, createContext, useContext, useState } from "react";

interface AuthContextProps {
  children: ReactNode;
}

interface AuthContextValue {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

const authContext = createContext<AuthContextValue | undefined>(undefined);

const MainContextProvider = (props: {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | null
    | undefined;
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <authContext.Provider value={{ isLoggedIn, login, logout }}>
      {props.children}
    </authContext.Provider>
  );
};

export default MainContextProvider;

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
