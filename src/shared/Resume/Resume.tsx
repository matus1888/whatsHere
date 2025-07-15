import { Box, Divider, Stack, useMediaQuery, useTheme } from "@mui/material";
import { Typography, Paper, Button, Chip } from "../ui";
import { api } from "../services/axios";
import { useEffect, useState } from "react";
import { pluralize } from "./tool";
import { ActualResume } from "./ActualResume";

async function getResumeStatistic() {
  const res = await Promise.allSettled([
    api.get<{ count: number }>("/users/count"),
    api.get<{ count: number }>("/visit/count"),
    api.get<{ count: number }>("/resume/count"),
    api.get<{ count: number }>("/visit/hhCount"),
    api.get<{ count: number }>("/visit/habrCount"),
    api.get<{ count: number }>("/visit/tlgCount"),
  ]);
  const data = res.map((item) => {
    return item.status === "fulfilled" ? item.value.data.count : 0;
  });

  return {
    usersCount: data[0],
    visitsCount: data[1],
    resumeCount: data[2],
    hhCount: data[3],
    habrCount: data[4],
    tlgCount: data[5],
  };
}

const loadResumeHandler = async () => {
  const isLoadRegistered = await api.get("/resume");
  if (isLoadRegistered) {
    const response = await fetch("/resume.pdf");
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "документ.pdf";
    link.click();
    URL.revokeObjectURL(url);
  }
};

export const Resume = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [counts, setCounts] = useState<{
    usersCount?: number;
    visitsCount?: number;
    resumeCount?: number;
    hhCount?: number;
    habrCount?: number;
    tlgCount?: number;
  }>({});

  useEffect(() => {
    getResumeStatistic()
      .then((res) => setCounts(res))
      .catch((e) => console.log(e));
  }, []);

  return (
    <Paper>
      <Stack padding="16px" gap={2}>
        <Typography variant="h5" sx={{ fontWeight: 500 }}>
          Статистика работы ресурса
        </Typography>
        <Paper
          sx={{ borderRadius: "12px", width: "max-content", padding: "12px" }}
        >
          <Box
            display="flex"
            justifyContent={"space-between"}
            gap={2}
            flexDirection={isMobile ? "column-reverse" : "row"}
            alignItems="center"
            fontSize={isMobile ? "14px" : "16px"}
          >
            <Box
              display="flex"
              alignItems="center"
              gap={1}
              flexDirection={isMobile ? "column-reverse" : "row"}
              justifyContent={isMobile ? "flex-start" : "space-between"}
            >
              <Typography fontWeight={600}>
                {" "}
                {counts.usersCount ?? "..."}
              </Typography>
              {pluralize(counts.usersCount || 0, [
                "пользователь",
                "пользователя",
                "пользователей",
              ])}
            </Box>
            <Box
              display="flex"
              alignItems="center"
              gap={1}
              justifyContent={isMobile ? "flex-start" : "space-between"}
              flexDirection={isMobile ? "column-reverse" : "row"}
            >
              <Divider orientation="vertical" />
              <Typography fontWeight={600}>
                {counts.visitsCount ?? "..."}
              </Typography>
              {pluralize(counts.visitsCount || 0, [
                "посещение",
                "посещения",
                "посещений",
              ])}
              <Divider orientation="vertical" />
            </Box>
            <Box
              display="flex"
              alignItems="center"
              gap={1}
              justifyContent={isMobile ? "flex-start" : "space-between"}
              flexDirection={isMobile ? "column-reverse" : "row"}
            >
              <Typography fontWeight={600}>
                {" "}
                {counts.resumeCount ?? "..."}
              </Typography>
              {pluralize(counts.resumeCount || 0, [
                "скачивание",
                "скачивания",
                "скачиваний",
              ])}
            </Box>
          </Box>
        </Paper>
        <Box ml={-1}>
          <Box display="inline-block" m={1}>
            <Chip label={`Из Telegram: ${counts.tlgCount ?? "..."}`} />
          </Box>
          <Box display="inline-block" m={1}>
            <Chip label={`С HeadHunters: ${counts.hhCount ?? "..."}`} />
          </Box>
          <Box display="inline-block" m={1}>
            <Chip label={`С Habr: ${counts.habrCount ?? "..."}`} />
          </Box>
        </Box>
        <Box>
          <Button
            size="large"
            sx={{ fontWeight: 500 }}
            variant="contained"
            color="secondary"
            onClick={loadResumeHandler}
          >
            Скачать
          </Button>
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 500 }}>
          Frontend Разработчик (React, TypeScript, GraphQL)
        </Typography>
        <ActualResume />
      </Stack>
    </Paper>
  );
};
