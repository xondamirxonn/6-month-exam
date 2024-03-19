import { useMutation } from "@tanstack/react-query";
import React from "react";
import { request } from "../../../../config/request";
import { loadState } from "../../../../config/storage";

export const usePostProduct = (datakey) => {
  const token = loadState("user");
  const admin = token?.user.id;
  return useMutation({
    mutationKey: ["categoty-data"],
    mutationFn: (data) =>
      request.post(`/${datakey}`, { ...data, admin }).then((res) => res.data),
  });
};
