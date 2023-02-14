import { Box } from "@mui/material";
import IUSerUnitData from "../../../../../../interfaces/IUserUnitData";
import DataUnit from "../userUnitData/userUnitData";
import "./userFullData.css";
interface IUserFullData {
  details: IUSerUnitData[];
}

function UserData({ details }: IUserFullData) {
  return (
    <Box className="userDataBox">
      {details.map((detail) => (
        <DataUnit key={detail.header} detail={detail} />
      ))}
    </Box>
  );
}

export default UserData;
