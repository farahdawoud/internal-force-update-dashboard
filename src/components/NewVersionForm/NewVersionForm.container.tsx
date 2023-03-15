import { useState } from "react";
import axiosInstance from "../../networking/AxiosInstance";
import { NewVersionFormView } from "./NewVersionForm.view";
import getRandomItem from "../../utils/RandomGenerator";
import UPGRADE_MESSAGES from "../../data/upgradeMessages";
import Apis from "../../networking/Apis";

export const NewVersionForm = ({
  closeForm,
  data,
  setData,
  editFlag,
}: {
  closeForm: any;
  data: any;
  setData: any;
  editFlag: boolean;
}) => {
  const [errorMessage, setErrorMessage] = useState("");
  console.log("Data", data);

  const generateMessageHandler = () => {
    const item = getRandomItem(UPGRADE_MESSAGES);
    console.log("MSG", item.message);
    setData({ ...data, updateMessage: item.message });
  };

  const addNewVersion = async () => {
    console.log("SUBMIT");
    try {
      const response = await axiosInstance.post(Apis.addVersion, data);
      console.log("Response", response.data);
      closeForm();
    } catch (e: any) {
      console.log("Error adding version ", e.response.data.errorMessage);
      setErrorMessage(e.response.data.errorMessage);
    }
  };

  const submitButtonHandler = (item: any) => {
    editFlag ? editApiCall(item) : addNewVersion();
  };

  const editApiCall = async (item: any) => {
    console.log("EDIT");
    try {
      const response = await axiosInstance.put(`${Apis.editVersion}${item.id}`);
      console.log("Response", response.data);
      closeForm();
    } catch (e: any) {
      console.log("Error adding version ", e.response.data.errorMessage);
      setErrorMessage(e.response.data.errorMessage);
    }
  };

  return (
    <div>
      <NewVersionFormView
        closeForm={closeForm}
        submitButtonHandler={submitButtonHandler}
        data={data}
        generateMessageHandler={generateMessageHandler}
        setData={setData}
        errorMessage={errorMessage}
      />
    </div>
  );
};
