import { Alert, Button, TextField } from "@mui/material";
import { useState } from "react";
import { ButtonsContainer } from "./ButtonsContainer/ButtonsContainer";
import useStyles from "./NewVersionForm.styles";
import { TogglesContainer } from "./TogglesContainer/TogglesContainer";

export const NewVersionFormView = ({
  submitButtonHandler,
  closeForm,
  data,
  setData,
  generateMessageHandler,
  errorMessage,
}: {
  submitButtonHandler: any;
  closeForm: any;
  setData: any;
  data: any;
  generateMessageHandler: any;
  errorMessage: string;
}) => {
  const styles = useStyles();

  const [focusedInput, setFocusedInput] = useState(false);

  console.log("focused", focusedInput);

  return (
    <div className={styles.mainContainer}>
      <h3>Add Version:</h3>
      <form>
        <div className={styles.horizontalDiv}>
          <TextField
            id="outlined-basic"
            placeholder="App Name"
            value={data.appName}
            onFocus={() => setFocusedInput(true)}
            style={{ flex: 1, marginInlineEnd: 18 }}
            onChange={(e) => setData({ ...data, appName: e.target.value })}
          />
          <TextField
            id="outlined-basic"
            placeholder="App Version - Example: 1.0.0"
            value={data.version}
            onFocus={() => setFocusedInput(true)}
            style={{ flex: 1 }}
            onChange={(e) => setData({ ...data, version: e.target.value })}
          />
        </div>
        <div className={styles.horizontalDiv}>
          <TextField
            id="outlined-basic"
            placeholder="Platform"
            value={data.platform}
            onFocus={() => setFocusedInput(true)}
            style={{ flex: 1, marginInlineEnd: 18 }}
            onChange={(e) =>
              setData({ ...data, platform: e.target.value.toUpperCase() })
            }
          />
          <TextField
            id="outlined-basic"
            placeholder="Environment"
            value={data.environment}
            onFocus={() => setFocusedInput(true)}
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
          onFocus={() => setFocusedInput(true)}
          rows={3}
          value={data.updateMessage}
          style={{ flex: 1, width: "100%", marginInlineEnd: 10 }}
          onChange={(e) => setData({ ...data, updateMessage: e.target.value })}
        />
        <Button
          className={styles.generateMsgButton}
          onClick={() => generateMessageHandler()}
        >
          Generate message
        </Button>
        <TogglesContainer data={data} setData={setData} />
      </form>
      {errorMessage != "" && !focusedInput && (
        <Alert style={{ marginTop: 10 }} severity="error">
          {errorMessage}
        </Alert>
      )}

      <ButtonsContainer
        closeForm={closeForm}
        submitButtonHandler={submitButtonHandler}
        setFocusedInput={setFocusedInput}
      />
    </div>
  );
};
