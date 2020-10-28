import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  // نکته ایی که این جا خیلی مهمه اینکه ما داریم از  Strategy داخل passport-local اکستند میکنیم 
  constructor(private readonly authService: AuthService) {
    super();
  }

  // زمانی که از passportStrategy اکستند میکنیم  
  // انتظار تابع validate رو داره 
  // و این تابع بصورت خودکار توسط گارد فراخوانی میشه 
  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
