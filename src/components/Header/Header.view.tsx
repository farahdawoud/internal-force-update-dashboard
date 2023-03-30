import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Cookies } from "react-cookie";
import { useLocation } from "react-router-dom";
const cookies = new Cookies();

const Header = () => {
  const location = useLocation();
  const token = cookies.get("token");
  console.log("TOKEN", token);

  const logout = () => {
    console.log("LOGOUT");
    cookies.remove("token");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#2E3B55" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Internal Upgrade Portal
          </Typography>
          {location.pathname !== "/" && (
            <Button style={{ marginInlineEnd: 30 }} href="/" color="inherit">
              Home
            </Button>
          )}
          {token && (
            <Button href="/auth" color="inherit" onClick={() => logout()}>
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
