import { styled } from "@mui/material/styles";
import { Typography as MuiTypography } from "@mui/material";
import { type TypographyProps } from "@mui/material/Typography";

export const Typography = styled(MuiTypography)<TypographyProps>(() => ({
  fontFamily: "hh sans",
}));
