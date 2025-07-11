import { isTMA, retrieveLaunchParams } from "@telegram-apps/sdk-react";
import { api } from "../shared";

export const useAuth = () => {
  const authViaTMA = async () => {
    if (!isTMA()) {
      throw new Error("no TMA");
    }

    const initData = retrieveLaunchParams();
    const response = await api.post("/auth/telegram", initData.tgWebAppData);

    return response.data;
  };

  return authViaTMA;
};
