import axios from "axios";
import Cookies from "js-cookie";
export const axiosInastance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
const authCookie = Cookies.get("auth");
if (authCookie) {
  axiosInastance.defaults.headers["Authorization"] = `Bearer ${JSON.parse(authCookie)}`;
}
