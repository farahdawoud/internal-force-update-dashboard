import { Theme } from "@mui/material/styles";
import { createStyles, makeStyles } from "@mui/styles";

export default makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      backgroundColor: "white",
    },
    buttonsContainer: {
      display: "flex",
      flexDirection: "row",
      paddingBlock: 100,
      justifyContent: "center",
    },
  })
);
