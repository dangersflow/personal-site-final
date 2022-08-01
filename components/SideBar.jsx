import react from "react";
import Col from "./Col";
import styled from "@emotion/styled";
import SideBarItem from "./SideBarItem";
import SideBarDivider from "./SideBarDivider";
import SideBarHome from "./SideBarHome";
import SideBarAbout from "./SideBarAbout";
import SideBarProjects from "./SideBarProjects";
import SideBarContact from "./SideBarContact";
import { useMediaQuery } from "react-responsive";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import {
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  ContactPage,
  HomeOutlined,
  Info,
  ListAltOutlined,
} from "@mui/icons-material";

const { motion } = require("framer-motion");

const StyledSideBar = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  width: 30rem;
  border-right: 2px solid #000000;
  position: fixed;

  @media (max-width: 767px) {
    display: none;
  }
  @media (min-width: 768px) {
    display: none;
  }
  @media (min-width: 1024px) {
    display: flex;
    width: 20rem;
  }
  @media (min-width: 1280px) {
    width: 20rem;
  }
  @media (min-width: 1600px) {
    width: 30rem;
  }
  @media (min-width: 1920px) {
  }
  @media (min-width: 2560px) {
  }
`;

export default function SideBar() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1023px)" });
  const [open, setOpen] = react.useState(false);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return isTabletOrMobile ? (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Francisco Gonzalez
          </Typography>
        </Toolbar>
        <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
          <List>
            <ListItemButton href="/">
              <ListItemIcon>
                <HomeOutlined />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItemButton>
            <Divider />
            <ListItemButton href="/about">
              <ListItemIcon>
                <Info />
              </ListItemIcon>
              <ListItemText>About</ListItemText>
            </ListItemButton>
            <Divider />
            <ListItemButton href="/projects">
              <ListItemIcon>
                <ListAltOutlined />
              </ListItemIcon>
              <ListItemText>Projects</ListItemText>
            </ListItemButton>
            <Divider />
            <ListItemButton href="/contact">
              <ListItemIcon>
                <ContactPage />
              </ListItemIcon>
              <ListItemText>Contact</ListItemText>
            </ListItemButton>
          </List>
        </Drawer>
      </AppBar>
    </ThemeProvider>
  ) : (
    <StyledSideBar>
      <SideBarHome />
      <SideBarDivider />
      <SideBarAbout />
      <SideBarDivider />
      <SideBarProjects />
      <SideBarDivider />
      <SideBarContact />
    </StyledSideBar>
  );
}
