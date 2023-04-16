/* eslint-disable prettier/prettier */
import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { PetsService } from './pet.service';

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Post()
  async addpet(
    @Body('title') petTitle: string,
    @Body('image') petImage: string,
    @Body('description') petDesc: string,
    @Body('price') petPrice: number,
    @Body('gender') petGender: string,
    @Body('name') petName: string,
    @Body('age') petAge: number,
  ) {
    const generatedId = await this.petsService.insertpet(
      petTitle,
      petImage,
      petDesc,
      petPrice,
      petGender,
      petName,
      petAge,
    );

    return { id: generatedId };
  }

  @Get()
  async getAllpets() {
    const pets = await this.petsService.getPets();
    return pets;
  }

  @Get(':id')
  getpet(@Param('id') petId: string) {
    return this.petsService.getSinglePet(petId);
  }

  @Patch(':id')
  async updatepet(
    @Param('id') petId: string,
    @Body('title') petTitle: string,
    @Body('image') petImage: string,
    @Body('description') petDesc: string,
    @Body('price') petPrice: number,
    @Body('gender') petGender: string,
    @Body('name') petName: string,
    @Body('age') petAge: number,
  ) {
    await this.petsService.updatepet(
      petId,
      petTitle,
      petImage,
      petDesc,
      petPrice,
      petGender,
      petName,
      petAge,
    );
    return null;
  }

  @Delete(':id')
  async removepet(@Param('id') petId: string) {
    await this.petsService.deletepet(petId);
    return null;
  }
}
