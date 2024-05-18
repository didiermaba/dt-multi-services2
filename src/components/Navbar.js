import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import WashIcon from "@mui/icons-material/Wash";
import Log from "../assets/img/logo-DT.png";
import { NavLink } from "react-router-dom";



const drawerWidth = 240;
const navItems = [
  { text: "Accueil", link: "/" },
  { text: "A propos", link: "/apropos" },
  { text: "Contact", link: "/contact" }
];


export default function Navbar() {
  const { window } = "props";
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, backgroundColor:"skyblue", color:"#fff" }}>
      D&T MULTI-SERVICES
      </Typography>
      <Divider />
      <List>
      {navItems.map((item, index) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
            <NavLink to={item.link} >
              <ListItemText primary={item.text} />
              </NavLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" position="sticky">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            startIcon={<WashIcon />}
          >
            <NavLink to="/">
              <img src={Log} alt="logo" width="90px" />
            </NavLink>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
           
          {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.link}
                style={{ textDecoration: 'none', color: 'inherit' }}
                activeClassName="active"
              >
                <Button sx={{ color: "#fff" }}>
                  {item.text}
                </Button>
              </NavLink>
            ))}
         
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
