import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetsModule } from './pets/pet.module';
import { StripeModule } from './strip/stripe.module';

@Module({
  imports: [
    PetsModule,
    MongooseModule.forRoot(
      'mongodb+srv://petDB:iy1ksZxjiyoC0bFr@cluster0.ywwd26r.mongodb.net/nestjs?retryWrites=true&w=majority',
    ),
    StripeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
