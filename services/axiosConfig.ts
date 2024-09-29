import axios from "axios";
import Cookies from "js-cookie";
export const axiosInastance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
    
  },
});
if (Cookies.get("m")) {
  axiosInastance.defaults.headers["Authorization"] = `Bearer ${JSON.parse(Cookies.get("m")!
  )}`;
}
