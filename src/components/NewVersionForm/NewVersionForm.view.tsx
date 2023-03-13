import { Button } from "@mui/material";
import React from "react";
import useStyles from "./NewVersionForm.styles";

export const AddVersionFormView = ({
  addVersionHandler,
  closeForm,
}: {
  addVersionHandler: any;
  closeForm: any;
}) => {
  const styles = useStyles();

  return (
    <div className={styles.mainContainer}>
      Form here
      <div className={styles.buttonsContainer}>
        <Button variant="text" onClick={closeForm}>
          Cancel
        </Button>
        <Button variant="outlined" onClick={addVersionHandler}>
          Add Version
        </Button>
      </div>
    </div>
  );
};
