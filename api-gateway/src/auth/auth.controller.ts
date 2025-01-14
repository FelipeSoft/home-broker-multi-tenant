import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Throttle } from '@nestjs/throttler';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Throttle({ default: { limit: 3, ttl: 60000 } })
  @Post("/login")
  public async signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.socialSecurityNumber, signInDto.password);
  }
}
