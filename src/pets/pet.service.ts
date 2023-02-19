/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { pet } from './pet.model';
import { InjectModel } from '@nestjs/mongoose';
import { PetsModule } from './pet.module';
import { Model } from 'mongoose';
@Injectable()
export class PetsService {
  private Pets: pet[] = [];
  constructor(@InjectModel('Pet') private readonly PetsModule: Model<pet>) {}
  async insertpet(title: string, image: string, desc: string, price: number) {
    const petId = Math.random().toString();
    const newpet = new this.PetsModule({
      title: title,
      image: image,
      description: desc,
      price: price,
    });
    const result = await newpet.save();
    console.log(result);
    return result.id as string;
    // return { petId, title, image, desc, price };
  }

  async getPets() {
    const pets = await this.PetsModule.find().exec();
    console.log(pets);

    return pets.map((pet) => ({
      id: pet.id,
      title: pet.title,
      image: pet.image,
      description: pet.description,
      price: pet.price,
    }));
  }

  async getSinglePet(pet_Id: string) {
    const pet = await this.findpet(pet_Id);
    return {
      id: pet.id,
      title: pet.title,
      image: pet.image,
      description: pet.description,
      price: pet.price,
    };
  }

  async updatepet(
    pet_Id: string,
    title: string,
    image: string,
    desc: string,
    price: number,
  ) {
    const updatedPet = await this.findpet(pet_Id);
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
    updatedPet.save();
  }

  async deletepet(petId: string) {
    await this.PetsModule.deleteOne({ _id: petId }).exec();
  }

  private async findpet(id: string): Promise<pet> {
    const pet = await this.PetsModule.findById(id);
    if (!pet) {
      throw new NotFoundException('Could not find pet.');
    }
    return pet;
  }
}
