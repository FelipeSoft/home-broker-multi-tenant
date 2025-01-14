import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    public async signIn(socialSecurityNumber: string, password: string) {
        return "This actions sign in the user";
    }
}
