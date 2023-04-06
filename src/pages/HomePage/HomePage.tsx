import { useNavigate, Navigate } from "react-router-dom";
import { Cookies } from "react-cookie";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./HomePage.css";
import colors from "../../ui/theme/colors";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="main-container-home">
      <div className="card-home">
        <Button
          style={{
            color: "white",
            backgroundColor: colors.lightBlue,
            paddingInline: 30,
            width: "100%",
            borderRadius: 30,
            paddingBlock: 10,
            marginBlockEnd: 30,
          }}
          sx={{ boxShadow: 10 }}
          endIcon={<ArrowForwardIcon />}
          onClick={() => navigate("versions")}
        >
          Versions
        </Button>
        <Button
          endIcon={<ArrowForwardIcon />}
          sx={{ boxShadow: 10 }}
          style={{
            color: "white",
            backgroundColor: colors.purple,
            borderRadius: 30,
            width: "100%",
            paddingBlock: 10,
          }}
          onClick={() => navigate("api-key")}
        >
          API Key
        </Button>
      </div>
    </div>
  );
};

export const HomePage = () => {
  const cookies = new Cookies();
  const token = cookies.get("token");

  return <div>{token ? <Home /> : <Navigate to="/auth" />}</div>;
};
