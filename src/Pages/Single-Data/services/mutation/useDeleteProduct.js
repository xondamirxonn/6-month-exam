import { useMutation } from "@tanstack/react-query";
import React from "react";
import { request } from "../../../../config/request";

export const useDeleteProduct = (datakey, id) => {
  return useMutation({
    mutationFn: () =>
      request.delete(`/${datakey}/${id}`).then((res) => res.data),
  });
};
