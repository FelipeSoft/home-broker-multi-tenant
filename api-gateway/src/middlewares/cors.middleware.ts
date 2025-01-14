import { NestMiddleware } from "@nestjs/common";

export class CorsMiddleware implements NestMiddleware {
    public async use(req: any, res: any, next: (error?: Error | any) => void) {
        console.log("using middleware...");
        next();
    }
}