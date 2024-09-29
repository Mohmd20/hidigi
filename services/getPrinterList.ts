import { axiosInastance } from "./axiosConfig";

export const getPrinterList = async () => {
  const res = await axiosInastance.post(
    `${process.env.NEXT_PUBLIC_APP_URL}/Branch/v${process.env.NEXT_PUBLIC_VERSION}/Printer/${process.env.NEXT_PUBLIC_BRANCH_NAME}/List`,
    {
      totalCount: 0,
      pageIndex: 0,
      itemsPerPage: 0,
      items: "",
      sortBy: "id",
      sortOrder: 0,
    }
  );
  return res.data;
};
