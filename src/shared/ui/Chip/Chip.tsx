import { styled } from "@mui/material/styles";
import { Chip as MuiChip } from "@mui/material";
import { type ChipProps } from "@mui/material/Chip";

export const Chip = styled(MuiChip)<ChipProps>(() => ({
  backgroundColor: "#F1F4F9",
  color: "#5E6C77",
  fontFamily: "hh sans",
  fontSize: "14px",
  border: "none",
  borderRadius: "6px",
}));
