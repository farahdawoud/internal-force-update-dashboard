import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import useStyles from "./AddVersionButton.styles";

const AddButton = ({ addNewVersionHandler }) => {
  const styles = useStyles();

  const buttonStyle = {
    borderRadius: 20,
    backgroundColor: "lightblue",
    height: 40,
  };

  return (
    <div className={styles.buttonContainer}>
      <p>Manage Your Versions</p>
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

export default AddButton;
