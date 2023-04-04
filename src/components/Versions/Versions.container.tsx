import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import Apis from "../../networking/Apis";
import axiosInstance from "../../networking/AxiosInstance";
import AddVersionButton from "../AddVersionButton/AddVersionButton";
import { versionItem, VersionsView } from "./Versions.view";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Versions = ({
  onPressEdit,
  setData,
  setIsEditPressed,
  setOpenForm,
}: {
  onPressEdit: Function;
  setData: Function;
  setIsEditPressed: Function;
  setOpenForm: Function;
}) => {
  const [versionsData, setVersionsData] = useState<Array<any>>([]);
  const [filteredData, setFilteredData] = useState<Array<any>>([]);

  const [loader, setLoader] = useState(false);

  const filterEnvironment = (value: string) => {
    if (value === "All") {
      setFilteredData(versionsData);
    } else {
      let filteredData = versionsData.filter((obj: versionItem) => {
        return obj.environment === value;
      });
      setFilteredData(filteredData);
    }
  };

  const getVersions = async () => {
    try {
      const response = await axiosInstance.get(Apis.getAllVersions);
      console.log("Response", response.data);
      setVersionsData(response.data);
      setFilteredData(response.data);
    } catch (e) {
      console.log("Error getting versions", e);
    }
  };

  //delete API call
  const deleteVersion = async (id: number) => {
    try {
      await axiosInstance.delete(`${Apis.deleteVersion}${id}`);
      getVersions();
      toast("Version deleted successfully", {
        className: "toast-success",
        type: toast.TYPE.SUCCESS,
      });
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

  const getVersionsWithLoader = async () => {
    setLoader(true);
    await getVersions();
    setLoader(false);
  };

  useEffect(() => {
    getVersionsWithLoader();
  }, []);

  return (
    <div className="versions-container">
      <AddVersionButton
        addNewVersionHandler={() => {
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
        <>
          <VersionsView
            onPressEdit={onPressEdit}
            versions={filteredData}
            onPressDelete={deleteVersion}
            filterEnvironment={filterEnvironment}
          />
        </>
      ) : (
        <h3 style={{ textAlign: "center" }}>No versions added yet.</h3>
      )}
    </div>
  );
};
