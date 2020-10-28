import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {}
// نکته ایی که اینجا هست وقتی ماداریم از AuthGuard('local') استفاده میکنیم 
// مپ شدن این گاردمون با استراتژی بصورت خودکار انجام میشود 
// چون یک استراتژی داریم که از passport-local اکستن شده 