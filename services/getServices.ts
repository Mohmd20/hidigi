import { axiosInastance } from "./axiosConfig";


export const getServices = async () => {
  const res = await axiosInastance.post(
    `/Branch/v${process.env.NEXT_PUBLIC_VERSION}/ServiceType/${process.env.NEXT_PUBLIC_BRANCH_NAME}/List`
  ,{
     totalCount : 0,
     pageIndex : 0,
     itemsPerPage : 0,
     items :  "" ,
     sortBy :  "id" ,
     sortOrder : 0
  });
  return res.data;
};
