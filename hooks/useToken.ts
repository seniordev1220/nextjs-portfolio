import { useState } from "react";

export const getToken = () => {
  if (typeof window !== "undefined") {
    const tokenString: any = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  }
};
export default function useToken() {
  const [token, setToken] = useState(getToken());

  const saveToken = (userToken: { token: string }) => {
    if (userToken?.token) {
      sessionStorage.setItem("token", JSON.stringify(userToken));
      setToken(userToken.token);
    }
  };

  return {
    setToken: saveToken,
    token,
  };
}
