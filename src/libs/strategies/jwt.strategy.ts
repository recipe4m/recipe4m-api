import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable, Logger } from '@nestjs/common';

import { PassportStrategy } from '@nestjs/passport';
import {
  AccessTokenPayload,
  UserByAccessTokenDto,
} from './user-by-access-token.dto';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  logger = new Logger('JwtStrategy');

  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(accessTokenPayload: AccessTokenPayload) {
    return new UserByAccessTokenDto(accessTokenPayload);
  }
}
