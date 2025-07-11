import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Stack,
  Button,
  Avatar,
  Paper,
  CircularProgress,
  Link,
} from "@mui/material";
import { People, Work } from "@mui/icons-material";
import { api } from "../services/axios";
import type { AxiosResponse } from "axios";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  telegramPhoto: object;
  lastLogin: string;
  telegramUsername: string;
}

export const Visits = () => {
  // Предзагруженные данные
  const [visits, setVisits] = useState<User[]>([]);

  useEffect(() => {
    api
      .get<any, AxiosResponse<User[]>>("/users")
      .then((res) => {
        if (res.data) {
          setVisits(res.data);
          console.log(res.data);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <Paper elevation={0} sx={{ p: 2, bgcolor: "background.paper" }}>
      {visits.length ? (
        visits.map((user) => (
          <React.Fragment key={user.id}>
            <Card
              variant="outlined"
              sx={{
                mb: 3,
                borderRadius: 5,
                boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
                "&:hover": {
                  boxShadow: "0px 8px 16px rgba(0,0,0,0.2)",
                  transition: "all 0.3s ease-in-out",
                },
              }}
            >
              <CardContent>
                <Box
                  sx={{ display: "flex", alignItems: "center", mb: 1, gap: 2 }}
                >
                  <People color="action" fontSize="small" />
                  <Typography variant="h6" component="h2">
                    @{user.firstName}
                  </Typography>
                </Box>

                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ mb: 2, flexWrap: "wrap", rowGap: 2 }}
                >
                  <Avatar
                    src={bufferToUrl(user.telegramPhoto)}
                    sx={{ width: "70px", height: "70px" }}
                  >
                    {user.firstName[0]}
                  </Avatar>
                  {user.lastLogin && (
                    <Chip
                      icon={<Work fontSize="small" />}
                      sx={{
                        backgroundColor: "#F1F4F9",
                        color: "#5E6C77",
                        fontFamily: "hh sans",
                        fontSize: "14px",
                        border: "none",
                        borderRadius: 2,
                      }}
                      label={new Intl.DateTimeFormat("Ru-ru", {
                        dateStyle: "long",
                        timeStyle: "long",
                      }).format(new Date(user.lastLogin))}
                      size="medium"
                      variant="outlined"
                    />
                  )}
                  <Link
                    target="_blank"
                    href={`https://t.me/${user.telegramUsername}`}
                    sx={{ width: "100%" }}
                  >
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        mt: 1,
                        backgroundColor: "#0070FF",
                        borderRadius: 3,
                        height: "50px",
                        textTransform: "none",
                        fontFamily: "hh sans",
                        forntSize: "16px",
                      }}
                    >
                      Откликнуться
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
