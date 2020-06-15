import { Module } from '@nestjs/common';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeadModule } from './lead/lead.module';
import { AuthModule } from './auth/auth.module';
import { HttpExceptionFilter } from './httpException.filter';
import { ValidationPipe } from './validation.pipe';

@Module({
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
  imports: [
    AuthModule,
    LeadModule,
    TypeOrmModule.forRoot({
      ...JSON.parse(process.env.TYPE_ORM_CONFIG),
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
})

export class AppModule { }
