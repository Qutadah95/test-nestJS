/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { pet } from './pet.model';

@Injectable()
export class PetsService {
  private Pets: pet[] = [];

  insertpet(title: string, image: string, desc: string, price: number) {
    const petId = Math.random().toString();
    const newpet = new pet(petId, title, image, desc, price);
    this.Pets.push(newpet);
    return { petId, title, image, desc, price };
  }

  getPets() {
    return [...this.Pets];
  }

  getSinglePet(pet_Id: string) {
    const pet = this.findpet(pet_Id)[0];
    return { ...pet };
  }

  updatepet(
    pet_Id: string,
    title: string,
    image: string,
    desc: string,
    price: number,
  ) {
    const [pet, index] = this.findpet(pet_Id);
    const updatedPet = { ...pet };
    if (title) {
      updatedPet.title = title;
    }
    if (image) {
      updatedPet.image = image;
    }
    if (desc) {
      updatedPet.description = desc;
    }
    if (price) {
      updatedPet.price = price;
    }
    this.Pets[index] = updatedPet;
  }

  deletepet(petId: string) {
    const index = this.findpet(petId)[1];
    this.Pets.splice(index, 1);
  }

  private findpet(id: string): [pet, number] {
    const petIndex = this.Pets.findIndex((pet) => pet.id === id);
    const pet = this.Pets[petIndex];
    if (!pet) {
      throw new NotFoundException('Could not find pet.');
    }
    return [pet, petIndex];
  }
}
