import { Button } from "@mui/material";
import useStyles from "./CloseAndSubmitButtonsContainer.styles";

export const CloseAndSubmitButtonsContainer = ({
  closeForm,
  onPressSubmit,
}: {
  closeForm: any;
  onPressSubmit: any;
}) => {
  const styles = useStyles();

  const submit = () => {
    onPressSubmit();
  };

  return (
    <div className={styles.buttonsContainer}>
      <Button variant="text" onClick={closeForm}>
        Cancel
      </Button>
      <Button variant="outlined" onClick={submit}>
        Submit
      </Button>
    </div>
  );
};
