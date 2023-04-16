import * as mongoose from 'mongoose';

export const PetSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

export interface pet extends mongoose.Document {
  id: string;
  title: string;
  gender: string;
  name: string;
  image: string;
  description: string;
  price: number;
  age: number;
}
