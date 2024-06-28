import { Injectable } from '@angular/core';
import { Major } from '../models/major.model';

@Injectable({
  providedIn: 'root'
})
export class Major2Service {
  private major2: Major;

  constructor() {
    this.major2 = new Major(
      'Paul Carrasco',
      'Paulito',
      71,
      'Cuenca',
    );
  }

  getMajor2(): Major {
    return this.major2;
  }

  dominating(): string {
    return this.major2.dominate();
  }
}