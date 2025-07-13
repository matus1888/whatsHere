import React, { useEffect, useState } from "react";
import {
  Box,
  CardContent,
  Stack,
  Avatar,
  Paper,
  CircularProgress,
  Link,
  IconButton,
  Collapse,
} from "@mui/material";
import { ExpandLess, ExpandMore, People, Work } from "@mui/icons-material";
import { api } from "../services/axios";
import { CollapsedVisit } from "./components";
import { Button, Card, Typography, Chip } from "../ui";
import { Checkeed } from "../ui/Icons";

export interface Session {
  id: string;
  createdAt: string; //Date
  sessionId: number;
  source: string;
  visit: Visit[];
}

export interface Visit {
  id: number;
  ipAddress: string;
  sessionId: string;
  source: string | null;
  visitedAt: string; //Date
}
export interface User {
  id: number;
  firstName: string;
  lastName: string;
  telegramPhoto: object;
  lastLogin: string; //Date
  telegramUsername: string;
  visits: Visit[];
}

export const Visits = () => {
  // Предзагруженные данные
  const [users, setUsers] = useState<User[]>([]);
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const toggleExpand = (key: number) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  useEffect(() => {
    api
      .get<User[]>("/users")
      .then((res) => {
        if (res.data) {
          setUsers(res.data);
          console.log(res.data);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <Paper elevation={0} sx={{ p: 2, bgcolor: "background.paper" }}>
      <Stack gap="20px">
        {users.length ? (
          users.map((user) => (
            <React.Fragment key={user.id}>
              <Card>
                <CardContent>
                  <Stack
                    direction="column"
                    sx={{ mb: 2, flexWrap: "wrap", rowGap: 2 }}
                  >
                    <Box
                      display="grid"
                      gridTemplateAreas="'a b' 'a c'"
                      gap={3}
                      gridTemplateColumns="max-content auto"
                    >
                      <Avatar
                        src={bufferToUrl(user.telegramPhoto)}
                        sx={{
                          width: "120px",
                          height: "120px",
                          borderRadius: "10px",
                          gridArea: "a",
                        }}
                        variant="rounded"
                      >
                        {user.firstName[0]}
                      </Avatar>
                      <Box display="flex" gap={1} alignItems="center">
                        <People color="action" fontSize="large" />
                        <Typography variant="h6" component="h2">
                          @{user.telegramUsername}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography variant="h6" component="h2">
                          {user.firstName}
                        </Typography>
                        <Typography variant="h6" component="h2">
                          {user.firstName}
                        </Typography>
                      </Box>
                    </Box>
                    <Box pt={1} display="flex" gap={2}>
                      {user.visits.length != null && (
                        <Box>
                          <Chip
                            label={`Всего посещений: ${user.visits.length}`}
                          />
                        </Box>
                      )}
                      {user.visits.some(({ ipAddress }) => !!ipAddress) && (
                        <Chip
                          icon={
                            <Box style={{ color: "#0070FF" }}>
                              <Checkeed />
                            </Box>
                          }
                          label={`IP адрес: ${user.visits.find(({ ipAddress }) => !!ipAddress)?.ipAddress}`}
                        />
                      )}
                    </Box>
                    {user.lastLogin && (
                      <Box>
                        <Chip
                          icon={<Work fontSize="small" />}
                          label={
                            "Последняя авторизация: " +
                            new Intl.DateTimeFormat("Ru-ru", {
                              dateStyle: "long",
                              timeStyle: "long",
                            }).format(new Date(user.lastLogin))
                          }
                          size="medium"
                          variant="outlined"
                        />
                      </Box>
                    )}
                    {!!user.visits?.length && (
                      <Box display="flex" gap={1} alignItems="center">
                        <IconButton
                          size="small"
                          onClick={() => toggleExpand(user.id)}
                        >
                          {expanded[user.id] ? <ExpandLess /> : <ExpandMore />}
                        </IconButton>
                        <Typography variant="body2" component="h2">
                          Подробная история посещений
                        </Typography>
                      </Box>
                    )}
                    <Stack gap={2}>
                      <Collapse
                        in={expanded[user.id]}
                        timeout="auto"
                        unmountOnExit
                      >
                        {user.visits?.map((visit) => (
                          <CollapsedVisit key={visit.id} visit={visit} />
                        ))}
                      </Collapse>
                    </Stack>

                    <Link
                      target="_blank"
                      href={`https://t.me/${user.telegramUsername}`}
                      sx={{ width: "100%" }}
                    >
                      <Button variant="contained" color="success">
                        Связаться
                      </Button>
                    </Link>
                  </Stack>
                </CardContent>
              </Card>
            </React.Fragment>
          ))
        ) : (
          <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            gap="16px"
          >
            <Typography variant="h5" mt="25vh">
              Идёт загрузка
            </Typography>
            <CircularProgress />
          </Box>
        )}
      </Stack>
    </Paper>
  );
};

function bufferToUrl(buffer: object) {
  if (buffer) {
    const blob = new Blob([new Uint8Array(Object.values(buffer))], {
      type: "image/jpeg",
    });
    const imageUrl = URL.createObjectURL(blob);
    return imageUrl;
  }
}
