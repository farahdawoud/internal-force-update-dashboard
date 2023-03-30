import { IconButton, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import Apis from "../../networking/Apis";
import axiosInstance from "../../networking/AxiosInstance";
import "./ApiKey.css";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export const ApiKey = () => {
  const [apiKey, setApiKey] = useState<string>(
    ""
    // "MzMzZDA1ZWEtNGQ3Zi00NjNlLTliNDUtZThmYTJjYjdmMmE1"
  );
  const [copy, setCopy] = useState<boolean>(false);

  const copyHandler = () => {
    navigator.clipboard.writeText(apiKey);
    setCopy(true);
  };

  const getApiKey = async () => {
    try {
      const response = await axiosInstance.post(Apis.apiKey);
      setApiKey(response.data); //todo
    } catch (e) {
      console.log("Error", e);
    }
  };
  useEffect(() => {
    getApiKey(); //todo
  }, []);

  return (
    <div className="mainContainer">
      <h2 className="title">API Key</h2>
      <p className="text">
        API key is required for integration with the mobile app. <br /> Each
        project should have a different API key.
      </p>
      <div className="key-container">
        <p className="api-key">{apiKey}</p>
        <IconButton onClick={copyHandler} color="primary">
          <ContentCopyIcon />
        </IconButton>
      </div>
      <Snackbar
        message="Copied to clipboard!"
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={1500}
        onClose={() => setCopy(false)}
        open={copy}
      />
    </div>
  );
};
