import { api } from "./axios";

export async function fetchData() {
  const { data } = await api.get("/users");
  console.log(data);
  return data;
}
