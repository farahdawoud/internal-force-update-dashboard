import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import useStyles from "./AddVersionButton.styles";

const AddVersionButton = ({
  addNewVersionHandler,
}: {
  addNewVersionHandler: Function;
}) => {
  const styles = useStyles();

  const buttonStyle = {
    borderRadius: 20,
    backgroundColor: "#507DBC",
    height: 40,
    padding: 20,
  };

  return (
    <div className={styles.buttonContainer}>
      <h4>Manage Your Versions</h4>
      <Button
        onClick={() => addNewVersionHandler()}
        variant="contained"
        style={buttonStyle}
        size="small"
        endIcon={<AddIcon />}
      >
        Add Version
      </Button>
    </div>
  );
};

export default AddVersionButton;
