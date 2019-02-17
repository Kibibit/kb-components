import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { DexieService } from '../dexie/dexie.service';

export interface CreateNotification {
  title: string;
  item: any;
  state: string;
  type: string;
}

export interface Notification extends CreateNotification {
  id: number;
  created: number;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  table: Dexie.Table<Notification, number>;
  private _capacity = 5;

  get capacity(): number {
    return this._capacity;
  }

  set capacity(newCapacity: number) {
    this.table.count()
      .then((numberOfItems) => {
        const shouldShrink = numberOfItems > newCapacity;

        if (shouldShrink) {
          return this.table.toArray()
            .then((allItems) => allItems.slice(0, numberOfItems - newCapacity))
            .then((itemsToRemove) => itemsToRemove.map((item) => item.id))
            .then((idsToBeRemoved) => this.table.bulkDelete(idsToBeRemoved));
        }
      });
  }

  constructor(private dexieService: DexieService) {
    this.table = this.dexieService.table('notifications');
  }

  // get all notification entries
  getAll(): Promise<any> {
    // get all items, newest first
    return this.table.reverse().toArray();
  }

  // get a specific item by id
  getItem(id: number) {
    return this.table.get(id);
  }

  // add a new item. this collection is capped to 5 elements.
  // so, if the collection have 5 elements already, the oldest one will be
  // deleted as well.
  add(data: CreateNotification): Promise<any> {
    const newNotification: Partial<Notification> = Object.assign({}, data);
    newNotification.created = new Date().getTime();

    return this.table.count()
      .then((historySize) => historySize < this.capacity ? null : this.removeOldest())
      .then(() => this.table.add(<Notification>newNotification))
      .then(() => this.table.where('created').equals(newNotification.created).last());
  }

  // removes the oldest item (should have the smallest id)
  private removeOldest(): Promise<number> {
    return this.table.toCollection().first()
      .then((oldestItem: Notification) => this.table.where('id').equals(oldestItem.id).delete());
  }
}
