import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from '../constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  // اینجا وقتی ما داریم از passport-jwt اکستند میکنیم 
  // مپ شدن با گارد مربوط به صورت خودکار انجام میشود 
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  //  با اکستند کردن از passportStrategy و بعد معتبر بودن توکن 
  //  passportStrategy انتظار تابع validate رو داره 
  // در واقع جایی که ما از گارد استفاده میکنیم این تابع فرخوانی میشود (خودکار)
  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}
