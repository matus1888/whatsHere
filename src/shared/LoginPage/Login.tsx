import { TextField, Button, Typography, Link, Stack } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { useAuth } from "../../hooks";
import { useEffect, useState } from "react";
import { validationSchema } from "./schema";
import { api } from "../services/axios";
import { useNavigate } from "react-router";
import { GetCodeButton } from "./components";

const initialValues = {
  code: "",
};

export const Login = () => {
  const authViaTMA = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (values: typeof initialValues) => {
    await api.post("/auth/bot", { code: values.code });
    navigate("/home");
  };

  useEffect(() => {
    authViaTMA()
      .then((res) => {
        console.log("res = ", res);
        navigate("/home");
      })
      .catch((e) => {
        if (e instanceof Error) {
          console.log(e.message);
        }
      });
  }, [authViaTMA, navigate]);

  return (
    <Stack
      sx={{
        maxWidth: 400,
        margin: "0 auto",
        padding: 3,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Поиск работы
      </Typography>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting, values }) => (
          <Form>
            <Field name="code">
              {({ field }) => (
                <TextField
                  {...field}
                  label="Код авторизации"
                  placeholder="Введите код подтверждения"
                  fullWidth
                  margin="normal"
                  error={touched.code && Boolean(errors.code)}
                  helperText={touched.code && errors.code}
                />
              )}
            </Field>
            <GetCodeButton to="https://t.me/notificatiorBot?start=auth">
              Получить код
            </GetCodeButton>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
              disabled={errors.code}
            >
              Авторизоваться через Telegram
            </Button>
          </Form>
        )}
      </Formik>

      <Typography variant="body2" textAlign="center" sx={{ mt: 2 }}>
        или
      </Typography>

      <Link target="_blank" href="https://t.me/notificatiorBot/test">
        <Button variant="outlined" fullWidth sx={{ mt: 1 }}>
          Войти в Telegram Mini App
        </Button>
      </Link>

      <Typography
        variant="caption"
        display="block"
        textAlign="center"
        sx={{ mt: 2 }}
      >
        Продолжая, вы принимаете{" "}
        <Link href="#" underline="hover">
          политику конфиденциальности
        </Link>{" "}
        и{" "}
        <Link href="#" underline="hover">
          правила сервиса
        </Link>
      </Typography>

      <Typography
        variant="caption"
        display="block"
        textAlign="center"
        sx={{ mt: 4 }}
      >
        © 2025 ООО «Кто здесь?»
      </Typography>
    </Stack>
  );
};

// import { useEffect } from "react";
// import { authoriseMe } from "./tools";
// import { Button } from "../Button";
// import { useNavigate } from "react-router";
//
// export const Login = () => {
//   const data = window.Telegram?.WebApp?.initData;
//   const navigate = useNavigate();
//   useEffect(() => {
//     if (data) {
//       authoriseMe(data);
//     }
//   });
//   return data ? (
//     <div>hello login page</div>
//   ) : (
//     <Button onClick={() => navigate("/")} title="click" />
//   );
// };
