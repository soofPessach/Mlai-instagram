import IUser from "./IUser"


interface IPost{
    postOwner: IUser,
    imgSrc: string,
    likes: number,
    location? : string,
    description? : string

}

export default IPost
