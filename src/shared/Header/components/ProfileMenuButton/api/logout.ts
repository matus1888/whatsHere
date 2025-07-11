import type { AxiosResponse } from "axios";
import { api } from "../../../../services/axios";

export async function logout(): Promise<{ success: true }> {
  const res = await api.post<any, AxiosResponse<{ success: true }>>(
    "/auth/logout",
  );
  return res.data;
}
