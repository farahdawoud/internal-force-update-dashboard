import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#2E3B55" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Internal Upgrade Portal
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
