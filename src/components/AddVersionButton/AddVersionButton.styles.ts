import { Theme } from "@mui/material/styles";
import { createStyles, makeStyles } from "@mui/styles";

export default makeStyles((theme: Theme) =>
  createStyles({
    buttonContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingInline: 8,
      marginBottom: 40,
    },
  })
);
