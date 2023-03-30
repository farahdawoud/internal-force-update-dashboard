import { useState } from "react";
import Apis from "../../networking/Apis";
import axiosInstance from "../../networking/AxiosInstance";
import { LoginPage } from "./LoginPage";
import { useNavigate } from "react-router-dom";
import { Cookies } from "react-cookie";

export const LoginPageController = () => {
  const cookies = new Cookies();

  const [userData, setUserData] = useState({
    password: "",
    username: "",
  });
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const login = async () => {
    setLoader(true);
    try {
      const response = await axiosInstance.post(Apis.login, userData);
      console.log("Response", response);
      const token = response.data.jwt;
      console.log("ress", token);
      cookies.set("token", token, { path: "/" });
      console.log("HERE cookies", cookies.get("token"));
      navigate("/home");
    } catch (e) {
      console.log("Error", e);
      alert("Unable to login. Please try after some time.");
    }
    setLoader(false);
  };

  return (
    <div>
      <LoginPage
        loader={loader}
        setUserData={setUserData}
        login={login}
        userData={userData}
      />
    </div>
  );
};
