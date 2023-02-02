import { Typography, Box } from "@mui/material";
import IDetailsP from "../../../../interfaces/IDetailsP";

interface IStatisticsUnit {
  detail: IDetailsP;
}

function StatisticsUnit({ detail }: IStatisticsUnit) {
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

export default StatisticsUnit;
