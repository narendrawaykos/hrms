import { Button, Drawer, useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useAuth } from "../../state/MainContext";
import { mainListItems, secondaryListItems } from "./listItems";

const navItems = [
  {
    lable: "About",
    path: "/about",
  },
  {
    lable: "Contact",
    path: "/contact",
  },
];

export default function Header(prop: { drawerWidth: number; children?: any }) {
  const { isLoggedIn } = useAuth();

  const theme = useTheme();

  if (isLoggedIn) {
    console.log("in header");
  }

  return (
    <Box sx={{ display: "flex", position: "relative" }}>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            HRMS
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Link to={item.path} key={item.path}>
                <Button key={item.lable} sx={{ color: "#fff" }}>
                  {item.lable}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      {isLoggedIn && <Drawer
        anchor="left"
        variant="permanent"
        sx={{
          width: prop.drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: prop.drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Divider />
        <List component="nav">
          {mainListItems}
          <Divider sx={{ my: 1 }} />
          {secondaryListItems}
        </List>
        <Toolbar />
      </Drawer>}
      <Box
        component="main"
        flexGrow={1}
        height={"100vh"}
        sx={{
          backgroundColor: "#fee",
          flexGrow: 1,
          p: 1,
          overflow: "scroll",
        }}
      >
        <Toolbar />
        {prop.children}
      </Box>
    </Box>
  );
}
