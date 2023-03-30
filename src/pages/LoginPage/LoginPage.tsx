import { Button, CircularProgress, TextField } from "@mui/material";
import "./LoginPage.css";

export const LoginPage = ({
  userData,
  setUserData,
  login,
  loader,
}: {
  userData: any;
  setUserData: Function;
  login: Function;
  loader: boolean;
}) => {
  return (
    <div className="main-container">
      <div className="card">
        <p className="login-text">Login</p>
        <div className="form-container">
          <TextField
            id="outlined-basic"
            placeholder="Username"
            value={userData.username}
            style={{ flex: 1 }}
            onChange={(e) =>
              setUserData({ ...userData, username: e.target.value })
            }
          />
          <TextField
            id="outlined-basic"
            placeholder="Password"
            style={{ flex: 1, marginTop: 20 }}
            type="password"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />

          {loader ? (
            <CircularProgress
              style={{ alignSelf: "center", marginTop: 30 }}
              size={30}
            />
          ) : (
            <Button
              variant="contained"
              onClick={() => login()}
              style={{ width: "70%", alignSelf: "center", marginTop: 30 }}
            >
              Login
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
