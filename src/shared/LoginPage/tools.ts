import { api } from "../services/axios";

export async function authoriseMe() {
  const { data } = await api.post("/auth/telegram");
  console.log(data);
}
