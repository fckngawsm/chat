import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException('Токен не предоставлен');
    }
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: process.env.SECRET,
      });
      console.log(payload, 'payload');
      request.user = payload;
    } catch (err) {
      throw new UnauthorizedException('Неверный или истекший токен');
    }
    return true;
  }
}
