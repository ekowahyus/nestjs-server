import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { SharedModule } from 'src/shared/shared.module';
import { AuthService } from './auth.service';
import { JWTStrategy } from './jwt.strategy';

@Module({
  imports: [SharedModule],
  controllers: [AuthController],
  providers: [AuthService, JWTStrategy]
})
export class AuthModule {}
