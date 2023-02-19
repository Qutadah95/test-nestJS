import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetsModule } from './pets/pet.module';

@Module({
  imports: [
    PetsModule,
    MongooseModule.forRoot(
      'mongodb+srv://petDB:iy1ksZxjiyoC0bFr@cluster0.ywwd26r.mongodb.net/nestjs?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
