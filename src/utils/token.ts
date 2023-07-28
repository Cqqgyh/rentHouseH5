// 获取token
import { useUserStore } from "@/store/modules/user";
const userStore = useUserStore();
export const getToken = () => {
  return userStore.token;
  // return "eyJhbGciOiJIUzM4NCIsInppcCI6IkdaSVAifQ.H4sIAAAAAAAA_6tWKi5NUrJScnTx9fSLDw12DVLSUUqtKFCyMjQ3MjQyNDAxsdBRKi1OLfJMUbIygjDzEnNTgXoMzc0NDI2NzEwNjZRqAftkOQRJAAAA.5dyKVxAZOmjvQhorvC4NXz88whOi0Shle1EcL3bn1EwIkmXnGujen7FP-S1JXngx";
};
// 设置token
export const setToken = (token: string) => {
  userStore.setToken(token);
};
// 移除token
export const removeToken = () => {
  userStore.$reset();
};
