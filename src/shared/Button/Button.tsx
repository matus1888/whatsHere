import { styled } from "@mui/material/styles";
import { Button as MuiButton } from "@mui/material";
import { type ButtonProps } from "@mui/material/Button";

export const Button = styled(MuiButton)<ButtonProps>(({ theme, ...props }) => {
  return {
    backgroundColor: theme.palette.grey[800],
    color: "white",
    borderRadius: 8,
    fontFamily: "hh sans",
    boxShadow: "none",
    border: `none`,
    padding: "10px 16px",
    textTransform: "none",
    "&:hover": {
      backgroundColor: theme.palette.grey[700],
      color: theme.palette.common.white,
      fontFamily: "hh sans",
      boxShadow: "none",
    },
    "&:active": {
      backgroundColor: theme.palette.primary.main,
      fontFamily: "hh sans",
      color: theme.palette.common.white,
    },
    "&.Mui-disabled": {
      backgroundColor: theme.palette.action.disabledBackground,
      fontFamily: "hh sans",
      color: theme.palette.action.disabled,
      borderColor: theme.palette.action.disabled,
    },
  };
  return {
  };
});
