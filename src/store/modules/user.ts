import { defineStore } from "pinia";
import type {
  loginQueryInterface,
  UserInfoInterface,
  UserStateInterface
} from "@/api/user/types";
import { getUserInfo, login } from "@/api/user";
import { getToken, removeToken, setToken } from "@/utils/token";

export const useUserStore = defineStore({
  id: "app-user",
  state: (): UserStateInterface => ({
    token: getToken(),
    userInfo: null
  }),
  actions: {
    // setToken
    setToken(token: string) {
      this.token = token;
    },
    // login
    async LoginAction(params: loginQueryInterface) {
      const { data } = await login(params);
      this.setToken(data);
      setToken(data);
      await this.GetInfoAction();
    },
    // setUserInfo
    setUserInfo(userInfo: UserInfoInterface) {
      this.userInfo = userInfo;
    },
    async GetInfoAction() {
      const { data } = await getUserInfo();
      // 存储用户信息
      this.setUserInfo(data);
    },
    async Logout() {
      // await logout()
      this.resetUserStore();
      removeToken();
    },
    resetUserStore() {
      this.token = null;
      this.userInfo = null;
    }
  }
});
