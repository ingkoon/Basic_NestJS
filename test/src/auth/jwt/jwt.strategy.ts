import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      //헤더의 토큰으로부터 추출
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      //만료기간 지정
      ignoreExpiration: false,
      secretOrKey: 'secret',
    });
  }

  //   async validate(payload: any) {

  //   }
}
