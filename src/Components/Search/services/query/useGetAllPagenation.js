import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useGetPagenation = (page = 1) => {
  return useQuery({
    queryKey: ["all-products", page],
    queryFn: () =>
      request
        .get("/all", { params: { _page: page, _limit: 8 } })
        .then((res) => {
          const pages = Number(res.headers.get("X-Total-Count")) / 8 ;
          return {
            data: res.data,
            pages: Math.ceil(pages),
          };
        }),
  });
};
