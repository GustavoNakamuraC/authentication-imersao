import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDTO } from 'src/users/DTO/users.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}
  
    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto: UserDTO) {
      return this.authService.signIn(signInDto.name, signInDto.password);
    }
}