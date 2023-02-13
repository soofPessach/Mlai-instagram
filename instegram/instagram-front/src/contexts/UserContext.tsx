import { createContext, useState, useContext } from "react";
import { defaultUser, IUser } from "../interfaces/IUser";
import IUserContext from "../interfaces/IUserContext";

export const UserContext = createContext<IUserContext>({
  user: defaultUser,
  setUser: () => { },
});

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<IUser>({ userName: "" });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export function useAuth() {
  console.log('auth')
  return useContext(UserContext);
}
