import { createStyles, makeStyles } from "@mui/styles";

export default makeStyles(() =>
  createStyles({
    togglesContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingInline: 8,
    },
  })
);
