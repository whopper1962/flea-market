import { Injectable, NotFoundException } from '@nestjs/common';
import { ItemStatus } from './item-status.enum';
import { Item } from './item.model';
import { CreateItemDto } from './dto/create-item.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ItemsService {
  private items: Item[] = [];

  findAll (): Item[] {
    return this.items;
  }

  findById (id: string): Item {
    const foundItem = this.items.find((item) => {
      return item.id === id;
    });
    if (!foundItem) {
      throw new NotFoundException();
    }
    return foundItem;
  }

  updateStatus (id: string): Item {
    const foundItem = this.findById(id);
    foundItem.status = ItemStatus.SOLD_OUT;
    return foundItem;
  }

  // create (item: Item): Item {
  //   this.items.push(item);
  //   return item;
  // }

  create (createItemDto: CreateItemDto): Item {
    const item = {
      id: uuid(),
      ...createItemDto,
      status: ItemStatus.ON_SALE
    };
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




