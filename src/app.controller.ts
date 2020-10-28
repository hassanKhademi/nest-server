import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  // استفاده از این گارد به این معناست که (طبق سناریویی که در استراتژی پیاده پیاده سازی شده )
  // که ما اول وجود کاربر رو چک میکنیم در تابع validate در صورتی که کاربری وجود داشت
  // کاربر در غیر این صورت به کاربر خطا برگردانده میشود 
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    // passport بعد از لاگین شدن بصورت خودکار 
    // اطلاعات کاربر از req.user قابل دسترسی هستش
    return  this.authService.login(req.user);
  }

  // اینجا در واقع jwt باید معتبر بود tokden رو بررسی کند 
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
