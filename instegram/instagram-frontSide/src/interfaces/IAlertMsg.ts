import { AlertColor } from "@mui/material";

interface IAlertMsg {
  type: AlertColor;
  message: string;
}

const emptyAlertMsg: IAlertMsg = {
  message: "",
  type: "info",
};

export { emptyAlertMsg };
export type { IAlertMsg };
