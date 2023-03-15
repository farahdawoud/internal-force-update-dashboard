import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import Apis from "../../networking/Apis";
import axiosInstance from "../../networking/AxiosInstance";
import AddVersionButton from "../AddVersionButton/AddVersionButton.view";
import { VersionsView } from "./Versions.view";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Versions = ({
  onPressEdit,
  setData,
  setIsEditPressed,
  setOpenForm,
}: {
  onPressEdit: any;
  setData: any;
  setIsEditPressed: any;
  setOpenForm: any;
}) => {
  const [versionsData, setVersionsData] = useState([]);
  const [loader, setLoader] = useState(false);

  const getVersions = async () => {
    setLoader(true);
    try {
      const response = await axiosInstance.get(Apis.getAllVersions);
      console.log("Response", response.data);
      setVersionsData(response.data);
    } catch (e) {
      console.log("Error", e);
    }
    setLoader(false);
  };

  //delete API call
  const deleteVersion = async (id: number) => {
    console.log("DELETE", id);

    try {
      const response = await axiosInstance.delete(`${Apis.deleteVersion}${id}`);
      console.log("Response", response.data);
      setLoader(true);
      getVersions();
      toast("Version is deleted successfully", {
        className: "toast-success",
        type: toast.TYPE.SUCCESS,
      });
      setLoader(false);
    } catch (e: any) {
      console.log("Error adding version ", e.response.data.errorMessage);
      toast(e.response.data.errorMessage, {
        className: "toast-red-bk",
        type: toast.TYPE.ERROR,
      });
    }
  };

  const openFormForNewVersion = () => {
    setIsEditPressed(false);
    setOpenForm(true);
    setData({
      appName: "",
      version: "",
      platform: "",
      forceUpgrade: false,
      flexibleUpgrade: false,
      environment: "",
      updateMessage: "",
    });
  };

  useEffect(() => {
    getVersions();
  }, []);

  return (
    <div className="versions-view">
      <AddVersionButton
        addNewVersionHandler={() => {
          console.log("ADD NEW VERSION");
          openFormForNewVersion();
        }}
      />
      {loader ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 400,
          }}
        >
          <CircularProgress />
        </div>
      ) : versionsData.length > 0 ? (
        <VersionsView
          onPressEdit={onPressEdit}
          versions={versionsData}
          onPressDelete={deleteVersion}
        />
      ) : (
        <h3 style={{ textAlign: "center" }}>No versions added yet.</h3>
      )}
    </div>
  );
};
