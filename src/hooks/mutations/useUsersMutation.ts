import User from "@/models/user.model";
import userService from "@/services/user.service";
import { useMutation } from "@tanstack/react-query";
import React from "react";

const useUsersMutation = () => {
  const mutation = useMutation({
    mutationFn: (user: User) => userService.createUser(user),
  });

  return mutation;
};

export default useUsersMutation;
