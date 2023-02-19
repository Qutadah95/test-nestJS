/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PetsController } from './pet.controller';
import { PetsService } from './pet.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PetSchema } from './pet.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Pet', schema: PetSchema }])],
  controllers: [PetsController],
  providers: [PetsService],
})
export class PetsModule {}
