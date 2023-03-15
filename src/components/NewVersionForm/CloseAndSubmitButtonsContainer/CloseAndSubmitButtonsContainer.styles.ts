import { createStyles, makeStyles } from "@mui/styles";

export default makeStyles(() =>
  createStyles({
    buttonsContainer: {
      display: "flex",
      flexDirection: "row",
      paddingTop: 30,
      justifyContent: "space-between",
      alignSelf: "center",
      marginInline: 310,
    },
  })
);
