import { createContext, useState, useContext } from "react";
import IAuthContext from "../interfaces/IAuthContext";
import { defaultUser, IUser } from "../interfaces/IUser";

export const UserContext = createContext<IAuthContext>({
  logInUser: defaultUser,
  setLogInUser: () => {},
});

export const UserProvider = ({ children }: any) => {
  const [logInUser, setLogInUser] = useState<IUser>(defaultUser);

  return (
    <UserContext.Provider value={{ logInUser, setLogInUser }}>
      {children}
    </UserContext.Provider>
  );
};

export function useAuth() {
  return useContext(UserContext);
}
