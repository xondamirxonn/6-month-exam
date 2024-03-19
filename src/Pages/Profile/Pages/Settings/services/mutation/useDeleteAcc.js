import { useMutation } from "@tanstack/react-query";
import React from "react";
import { request } from "../../../../../../config/request";

export const useDeleteAcc = (id) => {
  return useMutation({
    mutationFn: (data) =>
      request.delete(`/users/${id}`, data).then((res) => res.data),
  });
};
