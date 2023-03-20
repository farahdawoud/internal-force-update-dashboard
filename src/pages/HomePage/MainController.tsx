import { useState } from "react";
import { NewVersionFormView } from "../../components/NewVersionForm/NewVersionForm.view";
import { Versions } from "../../components/Versions/Versions.container";
import Apis from "../../networking/Apis";
import axiosInstance from "../../networking/AxiosInstance";
import "./MainController.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Dialog } from "@mui/material";

export const MainController = () => {
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
    console.log("Second", item);
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
    console.log("SUBMIT");
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
  const editVersion = async (id: any) => {
    console.log("EDIT");
    try {
      const response = await axiosInstance.put(
        `${Apis.editVersion}${id}`,
        data
      );
      console.log("Response", response.data);
      await closeForm();
      toast("Version updated successfully", {
        className: "toast-success",
        type: toast.TYPE.SUCCESS,
      });
    } catch (e: any) {
      console.log("Error adding version ", e.response.data.errorMessage);
      setErrorMessage(e.response.data.errorMessage);
    }
  };

  //When Pressed on Submit
  const onPressSubmit = () => {
    isEditPressed ? editVersion(editItemID) : addNewVersion();
  };

  return (
    <div className="wrapper">
      <div className="home-page-container">
        {openForm ? (
          <NewVersionFormView
            closeForm={closeForm}
            data={data}
            setData={setData}
            onPressSubmit={onPressSubmit}
            errorMessage={errorMessage}
          />
        ) : (
          <Versions
            setOpenForm={setOpenForm}
            onPressEdit={onPressEdit}
            setIsEditPressed={setIsEditPressed}
            setData={setData}
          />
        )}
        <ToastContainer hideProgressBar />
        {/* <Dialog open={true}>
          <DeleteConfirmationModal />
        </Dialog> */}
      </div>
    </div>
  );
};