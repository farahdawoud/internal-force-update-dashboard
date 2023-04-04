import { Alert, Button, TextField } from "@mui/material";
import UPGRADE_MESSAGES from "../../data/upgradeMessages";
import getRandomItem from "../../utils/RandomGenerator";
import CloseAndSubmitButtonsContainer from "./CloseAndSubmitButtonsContainer";
import useStyles from "./NewVersionForm.styles";
import TogglesContainer from "./TogglesContainer";

export const NewVersionFormView = ({
  onPressSubmit,
  closeForm,
  data,
  setData,
  errorMessage,
}: {
  onPressSubmit: Function;
  closeForm: Function;
  setData: Function;
  data: { [key: string]: any };
  errorMessage: string;
}) => {
  const styles = useStyles();

  const generateMessageHandler = () => {
    const item = getRandomItem(UPGRADE_MESSAGES);
    setData({ ...data, updateMessage: item.message });
  };

  return (
    <div className={styles.mainContainer}>
      <h3>Add Version:</h3>
      <form>
        <div className={styles.horizontalDiv}>
          <TextField
            id="outlined-basic"
            placeholder="App Name"
            value={data.appName}
            style={{ flex: 1, marginInlineEnd: 18 }}
            onChange={(e) => setData({ ...data, appName: e.target.value })}
          />
          <TextField
            id="outlined-basic"
            placeholder="App Version - Example: 1.0.0"
            value={data.version}
            style={{ flex: 1 }}
            onChange={(e) => setData({ ...data, version: e.target.value })}
          />
        </div>
        <div className={styles.horizontalDiv}>
          <TextField
            id="outlined-basic"
            placeholder="Platform"
            value={data.platform}
            style={{ flex: 1, marginInlineEnd: 18 }}
            onChange={(e) =>
              setData({ ...data, platform: e.target.value.toUpperCase() })
            }
          />
          <TextField
            id="outlined-basic"
            placeholder="Environment"
            value={data.environment}
            style={{ flex: 1 }}
            onChange={(e) =>
              setData({ ...data, environment: e.target.value.toUpperCase() })
            }
          />
        </div>

        <TextField
          id="outlined-basic"
          placeholder="Update Message"
          multiline={true}
          rows={3}
          value={data.updateMessage}
          style={{ flex: 1, width: "100%", marginInlineEnd: 10 }}
          onChange={(e) => setData({ ...data, updateMessage: e.target.value })}
        />
        <Button onClick={() => generateMessageHandler()}>
          Generate message
        </Button>
        <TogglesContainer data={data} setData={setData} />
      </form>
      {errorMessage !== "" && (
        <Alert style={{ marginTop: 10 }} severity="error">
          {errorMessage}
        </Alert>
      )}

      <CloseAndSubmitButtonsContainer
        closeForm={closeForm}
        onPressSubmit={onPressSubmit}
      />
    </div>
  );
};
