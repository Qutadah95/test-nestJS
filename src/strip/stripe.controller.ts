import { Body, Controller, Post } from '@nestjs/common';

import { StripeService } from './stripe.service';

import { pet } from 'src/pets/pet.model';

@Controller('stripe')
export class StripeController {
  constructor(private stripeService: StripeService) {}

  @Post()
  checkout(@Body() body: { pet: pet }) {
    try {
      return this.stripeService.checkout(body.pet);
    } catch (error) {
      return error;
    }
  }
}
