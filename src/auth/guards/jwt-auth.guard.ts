import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
//اینجا ما گارد مون رو تعریف میکنیم 
// ولی گارد باید با استراتژیمون مپ بشه 
// برای اینکار فقط کافی ما سرویسی داشته باشیم که از Strategy موجود در  'passport-jwt' اکتسند شده باشه 
// با این کار بصورت خودکار این دوتا باهم مپ میشن!