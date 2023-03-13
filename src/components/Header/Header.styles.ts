import { Theme } from "@mui/material/styles";
import { createStyles, makeStyles } from "@mui/styles";

export default makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      backgroundColor: theme.palette.common.black,
      position: "sticky",
      top: 0,
    },
    toolbar: {
      justifyContent: "space-between",
    },
    logo: {
      padding: theme.spacing(4),
    },
    dateAndMenuContainer: {
      display: "flex",
      alignItems: "center",
    },
    calendarPicker: {
      marginRight: theme.spacing(2),
      minWidth: theme.spacing(30),
    },
  })
);
