import { Injectable } from '@nestjs/common';
import { pet } from 'src/pets/pet.model';

import Stripe from 'stripe';

@Injectable()
export class StripeService {
  private stripe: Stripe;

  constructor() {
    this.stripe = new Stripe(
      'sk_test_51MdWgOIsEWMUH1jNS5arm4LeqaXTsxsB2IhwAJfnDCCxVcU88B9rhrUOaBzSPImTXbA68P29ndvhyj1gynrhuvSW005uaAf3KZ',
      {
        apiVersion: '2022-11-15',
      },
    );
  }

  checkout(pet: pet) {
    return this.stripe.paymentIntents.create({
      amount: pet.price * 100, // cents
      currency: 'usd', // set currency
      payment_method_types: ['card'],
    });
  }
}
