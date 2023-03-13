import { useState } from "react";
import axiosInstance from "../../networking/AxiosInstance";
import { AddVersionFormView } from "./NewVersionForm.view";
import Alert from "@mui/material/Alert";

export const AddVersionForm = ({ setFormFlag }: { setFormFlag: any }) => {
  const [data, setData] = useState({
    appName: "Demo",
    version: "0.0.3",
    platform: "ANDROID",
    forceUpgrade: true,
    flexibleUpgrade: false,
    updateMessage:
      "Hi! We're excited to let you know about our latest update. This update includes bug fixes and performance improvements to make your experience better.",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const closeForm = () => {
    setFormFlag(false);
  };

  const addVersionHandler = async () => {
    console.log("SUBMIT");
    try {
      const response = await axiosInstance.post("/app-version", data);
      console.log("Response", response.data);
      closeForm();
    } catch (e: any) {
      console.log("Error adding version ", e.response.data.errorMessage);
      setErrorMessage(e.response.data.errorMessage);
    }
  };

  return (
    <div>
      <AddVersionFormView
        closeForm={closeForm}
        addVersionHandler={addVersionHandler}
      />

      {errorMessage != "" && <Alert severity="error">{errorMessage}</Alert>}
    </div>
  );
};
