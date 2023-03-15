import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import Apis from "../../networking/Apis";
import axiosInstance from "../../networking/AxiosInstance";
import { VersionsView } from "./Versions.view";

export const Versions = ({ editHandler }: { editHandler: any }) => {
  const [versionsData, setVersionsData] = useState([]);
  const [loader, setLoader] = useState(false);

  const deleteHandler = async (id: number) => {
    console.log("DELETE", id);
    try {
      const response = await axiosInstance.delete(`${Apis.deleteVersion}${id}`);
      console.log("Response", response.data);
      await getVersions();
    } catch (e: any) {
      console.log("Error adding version ", e.response.data.errorMessage);
    }
  };

  const getVersions = async () => {
    setLoader(true);
    try {
      const response = await axiosInstance.get(Apis.getAllVersions);
      console.log("Response", response.data);
      response.data.length > 0 && setVersionsData(response.data);
    } catch (e) {
      console.log("Error", e);
    }
    setLoader(false);
  };

  useEffect(() => {
    getVersions();
  }, []);

  return (
    <div>
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
      ) : (
        <VersionsView
          editHandler={editHandler}
          versions={versionsData}
          deleteHandler={deleteHandler}
        />
      )}
    </div>
  );
};
