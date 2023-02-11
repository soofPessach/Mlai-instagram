interface IUser {
  userName: string;
  userImg?: string;
}

const defaultUser: IUser = {
  userName: "",
};

export { defaultUser };
export type { IUser };
