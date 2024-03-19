import { useMutation } from "@tanstack/react-query";
import React from "react";
import { request } from "../../../../../../config/request";

export const useEditProfile = (id) => {
  return useMutation({
    mutationFn: (data) =>
      request.put(`/users/${id}`, data).then((res) => res.data),
  });
};
