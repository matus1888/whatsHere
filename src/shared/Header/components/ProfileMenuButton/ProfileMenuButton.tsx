import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ProfileIcon } from "../../../ui/Icons";
import { Box } from "@mui/material";
import { logout } from "./api";
import { useNavigate } from "react-router";

export function ProfileMenuButton() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    const res = await logout();
    if (res.success) {
      handleClose();
      navigate("/home");
    }
  };

  const handleLogin = () => {
    handleClose();
    navigate("/auth");
  };

  return (
    <div>
      <Box
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <ProfileIcon />
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
          },
        }}
      >
        <MenuItem onClick={handleLogin}>Войти через Telegram</MenuItem>
        <MenuItem onClick={handleLogout}>Выйти из аккаунта</MenuItem>
      </Menu>
    </div>
  );
}
