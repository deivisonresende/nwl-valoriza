import { getCustomRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { UsersRepositories } from '../repositories/UsersRepositories';
import { sign } from 'jsonwebtoken';

interface IAuthenticateRequest {
  email: string;
  password: string;
}

export class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const user = await usersRepositories.findOne({
      email
    });
    
    if (!user) {
      throw new Error('Email or Password incorrect');
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Email or Password incorrect');
    }

    const token = sign(
      {
        email: user.email
      },
      '421e31c4119e5983f78161b4415e09e2',
      {
        subject: user.id,
        expiresIn: '1d'
      }
    );

    return token;
  }
}
