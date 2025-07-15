import { Box, Stack, Tooltip, Link } from "@mui/material";
import { useSource } from "../../hooks";
import { Paper, Typography } from "../ui";
import { Logo } from "../ui/Icons";
import { useNavigate } from "react-router";
import { techIcons } from "./constants";
export const Home = () => {
  useSource();
  const navigate = useNavigate();
  //@ts-ignore
  window.goTo = navigate;

  return (
    <>
      <Paper sx={{ backgroundColor: "rgba(239,246,255)", padding: 0 }}>
        <Stack padding="16px" gap={2}>
          <Box display="flex" gap={1}>
            <Logo />
            <Typography variant="h4">Who's here?</Typography>
          </Box>
          <Paper>
            <Typography variant="body1" padding={1}>
              Ресурс является моим личным pet-проектом и предназначен для сбора
              статистики в процессе поиска основного места работы
            </Typography>
          </Paper>
        </Stack>
        <Box sx={{ backgroundColor: "white", borderRadius: "0 0 16px 16px" }}>
          <Typography variant="body2" padding="20px">
            Приложение работает по принципу классического Web app с клиент
            серверной архитектурой. Продолжая взаимодействие с ресурсом вы даете
            согласие на то что ознакомились с &nbsp;
            <Tooltip
              title={
                <Typography variant="body2">
                  Для авторизации используются учетные данные Telegram
                  пользователя, взаимодействующего с ресурсом, в разделе
                  'Посещения' эти данные доступным всем зарегистрированным
                  пользователям. Статистика хранится в базе данных, находящися
                  на стороне владельца ресурса и используется только для личных
                  целей
                </Typography>
              }
            >
              <Link sx={{ ":hover": { color: "red" }, cursor: "pointer" }}>
                принципом работы
              </Link>
            </Tooltip>{" "}
            и даете согласие на сбор &nbsp;{" "}
            <Tooltip
              title={
                <Typography variant="body2">
                  К статистическим сведениям относятся: учетные данные
                  пользователя TLG такие как идентификаторы и имя пользователя,
                  сведения о количестве просмотров, времени регистрации, времени
                  просмотра, авторизации и посещения ресурса. Так же косвенными
                  способами анализируется ресурс, на котором пользователь
                  получил ссылку на этот сайт
                </Typography>
              }
            >
              <Link sx={{ ":hover": { color: "red" }, cursor: "pointer" }}>
                статистических сведений
              </Link>
            </Tooltip>{" "}
            о ваших посещениях ресурса на основе данных авторизации. На случай
            если вы не хотите &nbsp;{" "}
            <Link
              sx={{ ":hover": { color: "red" }, cursor: "pointer" }}
              onClick={() => navigate("/auth")}
            >
              проходить регистрацию
            </Link>{" "}
            имеется кнопка "TLG send" в нижней правой части экрана и аналогичная
            кнопка в заголовочной части, по нажатию на которые откроется чат со
            мной в messeger-е telegram
          </Typography>
        </Box>
      </Paper>
      <Box
        overflow="auto"
        mt={2}
        sx={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Box width={`${900 + 10 * 5}px`}>
          {techIcons.map((item) => (
            <TechnologyCard
              key={item.name}
              icon={<img src={item.svgUrl} style={{ height: "30px" }} />}
              description={item.name}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

function getRndColor() {
  const colors = [
    "#FF8A77",
    "#FFDDBB66",
    "#E0F6E566",
    "#DDCBF566",
    "#D1E4FE66",
  ];
  const color = colors[Math.floor(Math.random() * colors.length)];
  return color;
}

interface TechnologyCardProps {
  icon: React.ReactNode;
  description: React.ReactNode;
}

function TechnologyCard({ icon, description }: TechnologyCardProps) {
  return (
    <Paper
      sx={{
        padding: 0,
        borderRadius: "8px",
        display: "inline-block",
        width: "300px",
        margin: "8px",
      }}
    >
      <Box display="flex" justifyContent="flex-start" minHeight="120px">
        <Box
          display="flex"
          flexDirection="column"
          sx={{
            width: "16px",
            marginRight: "20px",
            borderRadius: "8px 0 0 8px",
            backgroundColor: getRndColor(),
          }}
        />
        <Stack paddingY="8px" justifyContent="space-around" gap={1}>
          {icon}
          {description}
        </Stack>
      </Box>
    </Paper>
  );
}
