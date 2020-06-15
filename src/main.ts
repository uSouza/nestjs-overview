import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.listen(process.env.LISTEN_PORT || 3000, () => {
    console.log('\x1b[34m%s\x1b[0m', `SERVERINIT: 👍  API ready at http://${process.env.VIRTUAL_HOST}:${process.env.LISTEN_PORT} 👍`);
    if (module.hot) {
      module.hot.accept();
      module.hot.dispose(() => app.close());
    }
  });
}

bootstrap();
