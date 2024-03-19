import { useQuery } from "@tanstack/react-query";
import React from "react";
import { request } from "../../../../config/request";

export const useGetDataKeyCategory = (datakey) => {
  return useQuery({
    queryKey: ["datakey-category", datakey],
    queryFn: () => request.get(`${datakey}`).then((res) => res.data),
  });
};
