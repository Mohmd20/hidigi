import axios from "axios";
import Cookies from "js-cookie";
export const axiosInastance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
if (Cookies.get("auth")) {
  axiosInastance.defaults.headers["Authorization"] = `Bearer ${JSON.parse(Cookies.get("auth")!
  )}`;
}
