import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories';

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

export class CreateUsersService {
  async execute({ name, email, admin }: IUserRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);
    if (!email) {
      throw new Error('the e-mail cannot be null');
    }
    const userAlreadyExists = await usersRepositories.findOne({ email });

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const user = await usersRepositories.create({
      name,
      email,
      admin
    });

    await usersRepositories.save(user);
    return user;
  }
}
