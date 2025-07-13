import React from "react";
import { Box, Paper } from "@mui/material";
import {
  Public as PublicIcon,
  Fingerprint as FingerprintIcon,
  Today as TodayIcon,
  Link as LinkIcon,
} from "@mui/icons-material";
import type { Visit } from "../Visits";
import { Chip } from "../../ui";

interface CollapsedVisitProps {
  visit: Visit;
}

export const CollapsedVisit: React.FC<CollapsedVisitProps> = ({ visit }) => {
  return (
    <Paper
      sx={{
        margin: 1,
        boxShadow: "4px 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <Box gap={1} padding={1}>
        <Box m={0.5} alignItems="center">
          <Chip
            icon={<TodayIcon />}
            size="small"
            label={`${new Intl.DateTimeFormat("Ru-ru", {
              dateStyle: "long",
              timeStyle: "long",
            }).format(new Date(visit.visitedAt))}`}
          />
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
    </Paper>
  );
};
