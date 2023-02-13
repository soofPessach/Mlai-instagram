import { Box, Toolbar, Link } from "@mui/material";
import IDetailsP from "../../../../interfaces/IDetailsP";
import StatisticsUnit from "../StatustucsUnit/StatisticsUnits";

interface IStatisticsList {
  details: IDetailsP[];
}

function StatisticsList({ details }: IStatisticsList) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        flexDirection: "row",
        alignContent: "center",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {details.map((detail) => (
        <StatisticsUnit key={detail.header} detail={detail} />
      ))}
    </Box>
  );
}

export default StatisticsList;
