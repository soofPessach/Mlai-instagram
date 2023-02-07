import IUser from "./IUser";

interface IUserContext {
  user: IUser;
  setUser: (logInUser: IUser) => void;
}

export default IUserContext;
