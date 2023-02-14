import { Typography, Box } from "@mui/material";
import IUSerUnitData from "../../../../../../interfaces/IUserUnitData";

interface IDataUnit {
  detail: IUSerUnitData;
}

function DataUnit({ detail }: IDataUnit) {
  return (
    <Box>
      <Typography align="center" variant="h6">
        <b>{detail.quantity}</b>
      </Typography>
      <Typography align="center" variant="body1">
        {detail.header}
      </Typography>
    </Box>
  );
}

export default DataUnit;
