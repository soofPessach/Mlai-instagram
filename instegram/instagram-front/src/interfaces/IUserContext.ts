import IUser from "./IUser";

interface IUserContext {
  user: IUser | null;
  setUser?: (logInUser: IUser) => void;
}

export default IUserContext;
