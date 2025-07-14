import { styled } from "@mui/material/styles";
import { Paper as MuiPaper } from "@mui/material";
import { type PaperProps } from "@mui/material/Paper";

export const Paper = styled(MuiPaper)<PaperProps>(() => ({
  margin: 1,
  boxShadow: "none",
  border: "2px solid #F1F4F9",
  borderRadius: "20px",
  padding: "8px",
}));
