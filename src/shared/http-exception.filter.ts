import { Catch, ExceptionFilter, HttpException, ArgumentsHost, HttpStatus } from '@nestjs/common';

@Catch()
export class HTTPExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const respose = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception.getStatus ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

        const errorResponse = {
            code: status,
            times: new Date().toLocaleDateString(),
            path: request.url,
            method: request.method,
            message: status !== HttpStatus.INTERNAL_SERVER_ERROR 
                ? (exception.message || null)
                : 'Iternal Server Error',
        };

        return respose.status(status).json(errorResponse);
    }
}