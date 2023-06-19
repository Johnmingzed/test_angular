/**
 * Ceci est un service Angular destiné à pouvoir partager des fonctions
 * en les rendant utilisables au part plusieurs composants.
 * Pour le moment ce service fait état de Model et de Controller
 */

import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})

export class HousingService {

  constructor() { }

  protected url = 'http://localhost:3000/locations';

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}

