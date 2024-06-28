import { Injectable } from '@angular/core';
import { Major } from '../models/major.model';

@Injectable({
  providedIn: 'root'
})
export class MajorService {
  private major: Major;

  constructor() {
    this.major = new Major(
      'Abdalá Bucaram',
      'Dalito',
      62,
      'Guayaquil',
    );
  }

  getMajor(): Major {
    return this.major;
  }

  dominating(): string {
    return this.major.dominate();
  }
}