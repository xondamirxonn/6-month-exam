import { useQuery } from "@tanstack/react-query";
import React from "react";
import { request } from "../../../../config/request";

export const useGetUserId = (id) => {
  return useQuery({
    queryKey: ["user-id", id],
    queryFn: () => request.get(`/users/${id}`).then((res) => res.data),
  });
};
