import User from "@/models/user.model";
let instance: UserService;

class UserService {
  constructor() {
    if (!instance) {
      instance = this;
    }
  }

  public async createUser(user: User) {}

  public async getAllUsers() {}

  public async getUsersById(id: string) {}
}

const userService = Object.freeze(new UserService());

export default userService;
