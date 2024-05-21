
import React, { createContext, PropsWithChildren, useEffect, useState } from "react";
import { lookinSession } from "./session";

export const UserContext = createContext({});

const UserContextProvider = ({ children }:PropsWithChildren) => {
  const [userAuth, setUserAuth] = useState({});

  useEffect(() => {
    const userInSession = lookinSession("user");

    userInSession
      ? setUserAuth(JSON.parse(userInSession))
      : setUserAuth({ access_token: null });
  }, []);
  return (
    <UserContext.Provider value={{ userAuth, setUserAuth }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;