import userService from "@/services/user.service";
import { useQuery } from "@tanstack/react-query";

const useUsers = (id?: string) => {
  const response = useQuery(["users", id], {
    queryFn: id
      ? () => userService.getUsersById(id)
      : () => userService.getAllUsers(),
  });

  return response;
};

export default useUsers;
