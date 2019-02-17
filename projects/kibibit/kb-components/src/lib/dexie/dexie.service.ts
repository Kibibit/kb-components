import { Injectable } from '@angular/core';
import Dexie from 'dexie';

@Injectable({
  providedIn: 'root'
})
export class DexieService extends Dexie {
  constructor() {
    super('KbComponentsDexie');
    this.version(1).stores({
      // auto-generate id field, index created field
      notifications: '++id,created',
    });
  }
}
