import { Theme } from "@mui/material/styles";
import { createStyles, makeStyles } from "@mui/styles";
import colors from "../../ui/theme/colors";

export default makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      backgroundColor: colors.white,
      borderRadius: 10,
      padding: 18,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "40%",
    },
    horizontalDiv: {
      display: "flex",
      marginBottom: 18,
    },
  })
);
