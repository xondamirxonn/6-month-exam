import { useQuery } from "@tanstack/react-query";
import React from "react";
import { request } from "../../../../config/request";

export const useGetSingle = ( id) => {
  return useQuery({
    queryKey: ["single-data",  id],
    queryFn: () => request.get(`/all/${id}`).then((res) => res.data),
  });
};
