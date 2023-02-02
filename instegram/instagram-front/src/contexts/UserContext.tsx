import { create } from "domain";
import { createConnection } from "net";
import { createContext, useState } from "react";
import IUser from "../interfaces/IUser";
import IUserContext from "../interfaces/IUserContext";

export const UserContext = createContext<IUserContext>({ user: null });

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<IUser | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
