import { IUser } from "./IUser";

interface IAuthContext {
  logInUser: IUser;
  setLogInUser: (logInUser: IUser) => void;
}

export default IAuthContext;
