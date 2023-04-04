import { useState } from "react";
import { NewVersionFormView } from "../../components/NewVersionForm/NewVersionForm";
import { Versions } from "../../components/Versions/Versions.container";
import Apis from "../../networking/Apis";
import axiosInstance from "../../networking/AxiosInstance";
import "./VersionsManagementPage.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const VersionsManagementPage = () => {
  const [openForm, setOpenForm] = useState(false);
  const [isEditPressed, setIsEditPressed] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [editItemID, setEditItemID] = useState<any>(null);
  const [data, setData] = useState({
    appName: "",
    version: "",
    platform: "",
    forceUpgrade: false,
    flexibleUpgrade: false,
    environment: "",
    updateMessage: "",
  });

  //When Edit button is pressed
  const onPressEdit = (item: any) => {
    setIsEditPressed(true);
    setData(item);
    setEditItemID(item.id);
    setOpenForm(true);
  };

  //close form
  const closeForm = async () => {
    //reset everything
    setOpenForm(false);
    setIsEditPressed(false);
    setEditItemID("");
    setErrorMessage("");
  };

  //Add API call
  const addNewVersion = async () => {
    try {
      const response = await axiosInstance.post(Apis.addVersion, data);
      console.log("Response", response.data);
      await closeForm();
      toast("Version created successfully", {
        className: "toast-success",
        type: toast.TYPE.SUCCESS,
      });
    } catch (e: any) {
      console.log("Error adding version ", e.response.data.errorMessage);
      setErrorMessage(e.response.data.errorMessage);
    }
  };

  //Edit Api call
  const editVersion = async (id: number) => {
    try {
      await axiosInstance.put(`${Apis.editVersion}${id}`, data);
      await closeForm();
      toast("Version updated successfully", {
        className: "toast-success",
        type: toast.TYPE.SUCCESS,
      });
    } catch (e: any) {
      console.log("Error editing version ", e.response.data.errorMessage);
      setErrorMessage(e.response.data.errorMessage);
    }
  };

  //When Pressed on Submit
  const onPressSubmit = () => {
    isEditPressed ? editVersion(editItemID) : addNewVersion();
  };

  return (
    <div className="main">
      {openForm ? (
        <NewVersionFormView
          closeForm={closeForm}
          data={data}
          setData={setData}
          onPressSubmit={onPressSubmit}
          errorMessage={errorMessage}
        />
      ) : (
        <>
          <Versions
            setOpenForm={setOpenForm}
            onPressEdit={onPressEdit}
            setIsEditPressed={setIsEditPressed}
            setData={setData}
          />
        </>
      )}
      <ToastContainer hideProgressBar />
    </div>
  );
};
