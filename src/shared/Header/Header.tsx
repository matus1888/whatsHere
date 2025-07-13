import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  useTheme,
  useMediaQuery,
  styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ListItemNav, NavigationItems } from "./components";
import { useNavigate } from "react-router";
import { Button } from "../ui";

interface HeaderProps {
  logo: React.ReactNode;
  sections: React.ReactNode[];
  messagerBtn: React.ReactNode;
  profileButton: React.ReactNode;
  buttonTitle: string;
}

const HeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
}));

const LeftBlock = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    width: "100%",
    justifyContent: "space-between",
  },
}));

const LogoWrapper = styled(Box)(({ theme }) => ({
  fontSize: "1.5rem",
  fontWeight: "bold",
  fontFamily: "hh sans",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.2rem",
  },
}));

const SectionsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(3),
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const RightBlock = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const MobileMenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block",
    margin: "0",
  },
}));

export const Header: React.FC<HeaderProps> = ({
  logo,
  sections,
  messagerBtn,
  profileButton,
  buttonTitle,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={{
        width: 250,
      }}
      role="presentation"
      onClick={handleDrawerToggle}
      onKeyDown={handleDrawerToggle}
    >
      <List>
        {sections.map((text, index) => (
          <ListItemNav item={text} index={index} key={String(text)} />
        ))}
        <ListItem>
          <Button fullWidth>{buttonTitle}</Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar
      position="relative"
      style={{ color: "rgba(185, 185, 185)" }}
      sx={{
        backgroundColor: "black",
        justifyContent: "center",
        padding: 0,
      }}
      elevation={0}
    >
      <Toolbar>
        <HeaderContainer>
          <LeftBlock>
            <LogoWrapper onClick={() => navigate("/home")}>{logo}</LogoWrapper>
            <SectionsWrapper>
              {sections.map((item, index) => (
                <NavigationItems item={item} index={index} key={String(item)} />
              ))}
            </SectionsWrapper>
            <Box display="flex" alignItems="center" gap="16px">
              {isMobile && <div>{messagerBtn}</div>}
              <MobileMenuButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </MobileMenuButton>
              {isMobile && <div>{profileButton}</div>}
            </Box>
          </LeftBlock>

          {!isMobile && (
            <RightBlock>
              <div>{messagerBtn}</div>
              <Button variant="contained" color="primary">{buttonTitle}</Button>
              <div>{profileButton}</div>
            </RightBlock>
          )}
        </HeaderContainer>
      </Toolbar>

      <Drawer
        anchor="bottom"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        PaperProps={{
          sx: {
            alignItems: "center",
            position: "fixed",
            left: "20%",
            maxWidth: "65%",
            backgroundColor: "#f5f5f5",
            borderRadius: "16px 16px 0 0",
            boxShadow: "4px 0 10px rgba(0,0,0,0.1)",
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};
