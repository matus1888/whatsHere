import { styled } from "@mui/material/styles";
import { Button as MuiButton } from "@mui/material";
import { type ButtonProps } from "@mui/material/Button";

// Определяем свои стили для разных вариантов
export const Button = styled(MuiButton)<ButtonProps>(
  ({ theme, variant, color = "primary" }) => ({
    fontWeight: 600,
    textTransform: "none",
    borderRadius: "8px",
    padding: "10px 12px",
    boxShadow: "none",
    height: "40px",

    // Стили для primary
    ...(variant === "contained" &&
      color === "primary" && {
        backgroundColor: theme.palette.grey[800],
        color: "white",
        borderRadius: 8,
        fontFamily: "hh sans",
        fontSize: "14px",
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
          fontFamily: "hh sans",
          color: theme.palette.common.white,
        },
        "&.Mui-disabled": {
          backgroundColor: theme.palette.grey[500],
          fontFamily: "hh sans",
          color: theme.palette.action.disabled,
          borderColor: theme.palette.action.disabled,
        },
      }),

    // Стили для secondary
    ...(variant === "contained" &&
      color === "secondary" && {
        backgroundColor: "#EDF6FF", // свой фон
        color: "#0070FF",
        border: 0,
        borderRadius: 10,
        "&:hover": {},
      }),
    ...(variant === "contained" &&
      color === "success" && {
        backgroundColor: "#0070FF", // свой фон
        color: "#FFFFFF",
        fontFamily: "hh sans",
        fontSize: "16px",
        padding: "12px 16px",
        borderRadius: 10,
        "&:hover": {
          boxShadow: "none",
        },
      }),

    // Стили для outlined варианта
    ...(variant === "outlined" && {
      borderWidth: "2px",
      "&:hover": {
        borderWidth: "2px",
      },
    }),
  }),
);
