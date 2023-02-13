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
  addpet(
    @Body('title') petTitle: string,
    @Body('description') petDesc: string,
    @Body('price') petPrice: number,
  ) {
    const generatedId = this.petsService.insertpet(petTitle, petDesc, petPrice);
    return { id: generatedId };
  }

  @Get()
  getAllpets() {
    return this.petsService.getPets();
  }

  @Get(':id')
  getpet(@Param('id') petId: string) {
    return this.petsService.getSinglePet(petId);
  }

  @Patch(':id')
  updatepet(
    @Param('id') petId: string,
    @Body('title') petTitle: string,
    @Body('description') petDesc: string,
    @Body('price') petPrice: number,
  ) {
    this.petsService.updatepet(petId, petTitle, petDesc, petPrice);
    return null;
  }

  @Delete(':id')
  removepet(@Param('id') petId: string) {
    this.petsService.deletepet(petId);
    return null;
  }
}
