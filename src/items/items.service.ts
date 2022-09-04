import { Injectable } from '@nestjs/common';
import { ItemStatus } from './item-status.enum';
import { Item } from './item.model';

@Injectable()
export class ItemsService {
  private items: Item[] = [];

  findAll (): Item[] {
    return this.items;
  }

  findById (id: string): Item {
    return this.items.find((item) => {
      return item.id === id;
    });
  }

  updateStatus (id: string): Item {
    const foundItem = this.findById(id);
    foundItem.status = ItemStatus.SOLD_OUT;
    return foundItem;
  }

  create (item: Item): Item {
    this.items.push(item);
    return item;
  }

  // delete (id: string): Item[] {
  //   const foundItem  = this.findById(id);
  //   const itemIndex = this.items.indexOf(foundItem);
  //   this.items.splice(itemIndex, 1);
  //   return this.items;
  // }

  delete (id: string): void {
    this.items = this.items.filter((item) => {
      return item.id !== id;
    });
  }
}




