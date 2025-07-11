import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  code: Yup.string()
    .required("Код подтверждения обязателен")
    .matches(/^\d{4}$/, "Введите корректный код подтверждения"),
});
