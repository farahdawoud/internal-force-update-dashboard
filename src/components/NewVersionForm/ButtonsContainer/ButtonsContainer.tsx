import { Button } from "@mui/material";
import useStyles from "./ButtonsContainer.styles";

export const ButtonsContainer = ({
  closeForm,
  submitButtonHandler,
  setFocusedInput,
}: {
  closeForm: any;
  submitButtonHandler: any;
  setFocusedInput: any;
}) => {
  const styles = useStyles();

  const submit = () => {
    setFocusedInput(false);
    submitButtonHandler();
  };

  return (
    <div className={styles.buttonsContainer}>
      <Button variant="text" onClick={closeForm}>
        Cancel
      </Button>
      <Button variant="outlined" onClick={submit}>
        Add Version
      </Button>
    </div>
  );
};
