import { useQuery } from "@tanstack/react-query";
import React from "react";
import { request } from "../../../../config/request";

export const UseGetCategory = () => {
  return useQuery({
    queryKey: ["category"],
    queryFn: () => request.get("/category").then((res) => res.data),
  });
};
