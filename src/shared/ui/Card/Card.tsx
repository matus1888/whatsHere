import { styled } from "@mui/material/styles";
import { Card as MuiCard } from "@mui/material";
import { type CardProps } from "@mui/material/Card";

export const Card = styled(MuiCard)<CardProps>(
  ({ variant = "outlined" }) => ({
    ...(variant === "outlined" && {
      borderRadius: 5,
      border: '1px solid #F1F4F9',
      boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
      "&:hover": {
        boxShadow: "2px 6px 12px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease-in-out",
      },
    }),
  }),
);
