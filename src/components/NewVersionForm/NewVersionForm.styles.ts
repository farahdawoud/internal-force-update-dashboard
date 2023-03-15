import { Theme } from "@mui/material/styles";
import { createStyles, makeStyles } from "@mui/styles";
import colors from "../../ui/theme/colors";

export default makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      backgroundColor: colors.white,
      borderRadius: 10,
      padding: 18,
    },
    buttonsContainer: {
      display: "flex",
      flexDirection: "row",
      paddingTop: 30,
      justifyContent: "space-between",
      alignSelf: "center",
      marginInline: 300,
    },
    horizontalDiv: {
      display: "flex",
      marginBottom: 18,
    },
    generateMsgButton: {
      backgroundColor: "transparent",
    },
    togglesContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingInline: 8,
    },
  })
);
