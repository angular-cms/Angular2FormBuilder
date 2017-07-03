import { AppService } from './app.service';
import { GlobalErrorHandler } from './error-handler';
import { LoggerService } from './logger.service';
import { AppConfig } from './app.config';

export * from './app.service';
export * from './error-handler';
export * from './logger.service';
export * from './app.config';

export const APP_SERVICES = [
    { provide: AppService, useClass: AppService },
    { provide: LoggerService, useClass: LoggerService },
    { provide: AppConfig, useClass: AppConfig }
];

