import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText as MuiListItemText,
  Grid,
  Avatar,
  Link,
} from "@mui/material";
import { Chip as BaseChip, Typography } from "../../ui";
import styled from "@emotion/styled";

const ListItemText = styled(MuiListItemText)(() => ({
  fontFamily: "hh sans",
}));
const Chip = styled(BaseChip)(() => ({
  marginTop: "6px",
}));

export const ActualResume = () => {
  return (
    <>
      <Box>
        <Grid container spacing={2} alignItems="center">
          <Grid sx={{ xs: 12, md: 4, textAlign: { md: "right" } }}>
            <Avatar
              src="/whatsHere/file_0.jpg"
              sx={{
                width: 120,
                height: 120,
                margin: "auto",
                fontSize: "3rem",
                bgcolor: "primary.main",
              }}
            >
              AM
            </Avatar>
          </Grid>
        </Grid>

        <Grid container sx={{ spacing: 2, mt: 1 }}>
          <Grid sx={{ xs: 12, md: 6 }}>
            <Typography>
              <strong>Контакты:</strong> +7 (965) 4748370 • telegram: @matus1888
            </Typography>
            <Typography>
              <strong>Email:</strong>{" "}
              <Link href="mailto:matus1888@gmail.com">matus1888@gmail.com</Link>
            </Typography>
          </Grid>
          <Grid sx={{ xs: 12, md: 6 }}>
            <Typography>
              <strong>Локация:</strong> Москва
            </Typography>
            <Typography>
              <strong>Гражданство:</strong> Россия, есть разрешение на работу
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ my: 1 }} />

      {/* Work Experience */}
      <Box>
        <Typography variant="h6" component="h2" gutterBottom>
          Опыт работы
        </Typography>

        {/* Freelance */}
        <Box>
          <Typography variant="body2" component="h3">
            <strong>Frontend-разработчик (фриланс)</strong>
          </Typography>
          <Typography color="text.secondary" gutterBottom>
            Февраль 2025 — настоящее время (5 месяцев)
          </Typography>
          <List dense>
            <ListItem sx={{ pl: 0 }}>
              <ListItemText
                primary="Создание DnD-интерфейса для работы с данными (React Flow, Prismjs)"
                secondary="Реализован функциональный интерфейс для визуального редактирования потоков данных"
              />
            </ListItem>
            <ListItem sx={{ pl: 0 }}>
              <ListItemText
                primary="Подключение Python-скриптов через API"
                secondary="Оптимизация SSR и авторизации в Telegram-игре (Phaser + React)"
              />
            </ListItem>
          </List>
          <Box sx={{ mt: 1 }}>
            <Chip label="Next.js" size="small" sx={{ mr: 1 }} />
            <Chip label="React" size="small" sx={{ mr: 1 }} />
            <Chip label="Zustand" size="small" sx={{ mr: 1 }} />
            <Chip label="Phaser" size="small" sx={{ mr: 1 }} />
            <Chip label="Telegram Mini Apps" size="small" />
          </Box>
        </Box>

        {/* Честный ЗНАК */}
        <Box mt={1}>
          <Typography variant="body2" component="h3">
            <strong>
              JS/TS Разработчик (frontend, backend) - Система национальной
              маркировки товаров "Честный ЗНАК"
            </strong>
          </Typography>
          <Typography color="text.secondary" gutterBottom>
            Февраль 2022 — Февраль 2025 (3 года 1 месяц)
          </Typography>

          <Typography variant="subtitle1" sx={{ mt: 2 }}>
            ЕЛК 2.0 - Единый личный кабинет
          </Typography>
          <List dense>
            <ListItem sx={{ pl: 0 }}>
              <ListItemText
                primary="Создание десятка списочных форм, порядка 50 форм для чтения, более 20 форм для редактирования"
                secondary="REST API, GraphQL, MUI"
              />
            </ListItem>
            <ListItem sx={{ pl: 0 }}>
              <ListItemText
                primary="Разработка авто-генерируемых mock-шаблонов для REST API"
                secondary="Mockoon, Faker.js, date-fns, Handlebars"
              />
            </ListItem>
            <ListItem sx={{ pl: 0 }}>
              <ListItemText primary="Модульная разработка (микрофронтенды) с минимизацией сторонних библиотек" />
            </ListItem>
          </List>
          <Box sx={{ mt: 1 }}>
            <Chip label="React.js" size="small" sx={{ mr: 1 }} />
            <Chip label="React-router" size="small" sx={{ mr: 1 }} />
            <Chip label="GraphQL" size="small" sx={{ mr: 1 }} />
            <Chip label="MaterialUI" size="small" sx={{ mr: 1 }} />
            <Chip label="Formik" size="small" sx={{ mr: 1 }} />
            <Chip label="Yup" size="small" />
          </Box>

          <Typography variant="subtitle1" sx={{ mt: 2 }}>
            Создание нового UI Kit
          </Typography>
          <List dense>
            <ListItem sx={{ pl: 0 }}>
              <ListItemText
                primary="Редизайн существующей системы с пересборкой старых форм и компонентов"
                secondary="React, MUI, Storybook, Figma"
              />
            </ListItem>
            <ListItem sx={{ pl: 0 }}>
              <ListItemText primary="Работа в монорепозитории с проектами на различных стеках (Redux, JS, TS, MobX, Effector)" />
            </ListItem>
          </List>
          <Box sx={{ mt: 1 }}>
            <Chip label="Storybook" size="small" sx={{ mr: 1 }} />
            <Chip label="Redux Toolkit" size="small" sx={{ mr: 1 }} />
            <Chip label="Figma" size="small" />
          </Box>

          <Typography variant="subtitle1" sx={{ mt: 2 }}>
            GraphQL BFF (Backend for frontend)
          </Typography>
          <List dense>
            <ListItem sx={{ pl: 0 }}>
              <ListItemText
                primary="Разработка backend части на базе GraphQL для оптимизации запросов"
                secondary="Nest.js, Apollo, Dataloaders"
              />
            </ListItem>
            <ListItem sx={{ pl: 0 }}>
              <ListItemText primary="Полное покрытие тестами бизнес-логики (Jest)" />
            </ListItem>
          </List>
        </Box>

        {/* FacePass */}
        <Box>
          <Typography variant="body2" component="h3">
            <strong>Frontend-разработчик (React, TypeScript) - FacePass</strong>
          </Typography>
          <Typography color="text.secondary" gutterBottom>
            Сентябрь 2020 — Февраль 2022 (1 год 6 месяцев)
          </Typography>

          <Typography variant="subtitle1" sx={{ mt: 2 }}>
            Система контроля и управления доступом (СКУД)
          </Typography>
          <List dense>
            <ListItem sx={{ pl: 0 }}>
              <ListItemText
                primary="Web-интерфейс с управлением топологией, историей проходов, пропусками пользователей"
                secondary="React, Redux, Socket.IO"
              />
            </ListItem>
            <ListItem sx={{ pl: 0 }}>
              <ListItemText primary="Контроль доступа по биометрическим данным" />
            </ListItem>
          </List>

          <Typography variant="subtitle1" sx={{ mt: 2 }}>
            Киоск самостоятельной регистрации пользователя
          </Typography>
          <List dense>
            <ListItem sx={{ pl: 0 }}>
              <ListItemText
                primary="SPA приложение с сенсорным интерфейсом для регистрации пользователей"
                secondary="React, TypeScript, Node.js"
              />
            </ListItem>
          </List>
        </Box>
      </Box>

      <Divider sx={{ my: 1 }} />

      {/* Skills */}
      <Box>
        <Typography variant="h6" component="h2" gutterBottom>
          Навыки
        </Typography>
        <Grid container spacing={1}>
          <Grid sx={{ xs: 6, sm: 4, md: 3 }}>
            <Chip label="JavaScript" color="primary" sx={{ width: "100%" }} />
          </Grid>
          <Grid sx={{ xs: 6, sm: 4, md: 3 }}>
            <Chip label="TypeScript" color="primary" sx={{ width: "100%" }} />
          </Grid>
          <Grid sx={{ xs: 6, sm: 4, md: 3 }}>
            <Chip label="React" color="primary" sx={{ width: "100%" }} />
          </Grid>
          <Grid sx={{ xs: 6, sm: 4, md: 3 }}>
            <Chip label="GraphQL" color="primary" sx={{ width: "100%" }} />
          </Grid>
          <Grid sx={{ xs: 6, sm: 4, md: 3 }}>
            <Chip label="Next.js" color="primary" sx={{ width: "100%" }} />
          </Grid>
          <Grid sx={{ xs: 6, sm: 4, md: 3 }}>
            <Chip label="Redux" color="primary" sx={{ width: "100%" }} />
          </Grid>
          <Grid sx={{ xs: 6, sm: 4, md: 3 }}>
            <Chip label="Material-UI" color="primary" sx={{ width: "100%" }} />
          </Grid>
          <Grid sx={{ xs: 6, sm: 4, md: 3 }}>
            <Chip label="Git" color="primary" sx={{ width: "100%" }} />
          </Grid>
          <Grid sx={{ xs: 6, sm: 4, md: 3 }}>
            <Chip label="Nest.js" color="primary" sx={{ width: "100%" }} />
          </Grid>
          <Grid sx={{ xs: 6, sm: 4, md: 3 }}>
            <Chip label="Jest" color="primary" sx={{ width: "100%" }} />
          </Grid>
          <Grid sx={{ xs: 6, sm: 4, md: 3 }}>
            <Chip label="SSR" color="primary" sx={{ width: "100%" }} />
          </Grid>
          <Grid sx={{ xs: 6, sm: 4, md: 3 }}>
            <Chip label="REST API" color="primary" sx={{ width: "100%" }} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
