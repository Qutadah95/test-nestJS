/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { PetsController } from "./pet.controller";
import { PetsService } from "./pet.service";

@Module({
  controllers: [PetsController],
  providers: [PetsService],
})
export class PetsModule {}
