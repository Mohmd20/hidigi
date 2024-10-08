import { axiosInastance } from "./axiosConfig";
type CreateUser = {
  userName: string;
  password: string;
};
export const createUser = async ({ userName, password }: CreateUser) => {
  const res = await axiosInastance.post(
    "/api/Authentication/Signin",
    { userName, password },
  );
  return res.data;
};
