import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import Apis from "../../networking/Apis";
import axiosInstance from "../../networking/AxiosInstance";
import { VersionsView } from "./Versions.view";

export const Versions = () => {
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

  useEffect(() => {
    getVersions();
  }, []);

  return (
    <div>
      {loader ? <CircularProgress /> : <VersionsView versions={versionsData} />}
    </div>
  );
};
