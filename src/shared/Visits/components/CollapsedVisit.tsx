import React from "react";
import { Box, Divider, useMediaQuery, useTheme } from "@mui/material";
import {
  Public as PublicIcon,
  Fingerprint as FingerprintIcon,
  Today as TodayIcon,
  Link as LinkIcon,
} from "@mui/icons-material";
import type { Visit } from "../Visits";
import { Chip, Typography } from "../../ui";

interface CollapsedVisitProps {
  visit: Visit;
}

export const CollapsedVisit: React.FC<CollapsedVisitProps> = ({ visit }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Divider sx={{ my: 1 }} />
      <Box gap={1} padding={1}>
        <Box display="flex" gap={1} mb={1}>
          <TodayIcon />
          <Typography>
            {new Intl.DateTimeFormat("Ru-ru", {
              dateStyle: isMobile ? "short" : "long",
              timeStyle: isMobile ? "short" : "long",
            }).format(new Date(visit.visitedAt))}
          </Typography>
        </Box>

        <Box display="inline-flex" m={0.5} gap={2} alignItems="center">
          <Chip
            icon={<FingerprintIcon />}
            label={`Session ID: ${visit.sessionId}`}
            size="small"
          />
        </Box>
        <Box display="inline-flex" m={0.5} gap={2} alignItems="center">
          <Chip
            icon={<PublicIcon />}
            label={`IP Address: ${visit.ipAddress}`}
            size="small"
          />
        </Box>
        <Box display="inline-flex" m={0.5} gap={2} alignItems="center">
          {visit.source !== "other" && (
            <Chip
              icon={<LinkIcon />}
              label={`link from: ${visit.source}`}
              size="small"
            />
          )}
        </Box>
      </Box>
    </>
  );
};
