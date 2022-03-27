// @ts-ignore
import jsonwebtoken from 'jsonwebtoken';

import { jwt } from 'globalConfig';

type SignJwt = (_payload: any, _secret?: string) => string;

export const signJwt: SignJwt = (payload, secret) => {
  const jwtSecret: string = secret || jwt.secret;

  const token: string = jwt.expirationInMinute
    ? jsonwebtoken.sign(payload, jwtSecret, {
        expiresIn: jwt.expirationInMinute * 60,
      })
    : jsonwebtoken.sign(payload, jwtSecret);

  return token;
};

type VerifyJwt = (_token: string, _secret?: string) => any;

export const verifyJwt: VerifyJwt = (token, secret) => {
  try {
    const jwtSecret: string = secret || jwt.secret;

    return jsonwebtoken.verify(token, jwtSecret);
  } catch (e: Error | any) {
    return null;
  }
};
