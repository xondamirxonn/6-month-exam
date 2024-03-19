import { useQuery } from "@tanstack/react-query";
import React from "react";
import { request } from "../../../../config/request";

export const useGetSearch = (search = "") => {
  return useQuery({
    queryKey: ["search", search],
    queryFn: () =>
      request
        .get("/all", {
          params: { title_like: search },
        })
        .then((res) => res.data),
  });
};
