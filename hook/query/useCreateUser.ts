
import { createUser } from "@/services/userServices";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import {  useRouter } from "next/navigation";
type userData = {
  status: number
  message: string
  result: {
    firstName: string
    lastName: string
    token: string
    expireAt: string
    mobile: string
    fileName: string | null
    id: number
    branches: string[]
  }
  requestDate: string
  requestTime: string
};
export const useCreateUser = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: createUser,
    onSuccess: (data: userData) => {
      Cookies.set("auth", JSON.stringify(data.result.token), { expires: 1 });
      router.push("/branch")
    },
    onError: (error) => {
      console.log(error.message);
    },
  });
};
