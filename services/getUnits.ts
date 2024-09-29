import { axiosInastance } from "./axiosConfig";

export const getUnits = async () => {
  const response = await axiosInastance.post(
    `${process.env.NEXT_PUBLIC_APP_URL}/Store/v${process.env.NEXT_PUBLIC_VERSION}/Units/${process.env.NEXT_PUBLIC_BRANCH_NAME}/List`,
    {
      totalCount: 0,
      pageIndex: 0,
      itemsPerPage: 0,
      items: "",
      sortBy: "id",
      sortOrder: 0,
    }
  );
  return response.data;
};
