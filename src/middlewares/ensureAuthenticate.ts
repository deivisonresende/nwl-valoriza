import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).json({ Error: 'Token missing' });
  }
  //Separa o Bearer do token
  const [, token] = authToken.split(' ');

  try {
    //valida se o token é válido
    const { sub } = verify(
      token,
      '421e31c4119e5983f78161b4415e09e2'
    ) as IPayload;

    //recupera informações do usuário
    request.user_id = sub;

    return next();
  } catch (error) {
    return response.status(401).json({ Error: 'Token missing' });
  }
}
