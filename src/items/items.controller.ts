
import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, UseInterceptors } from '@nestjs/common';
import { Item } from './item.model';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { RequestInterceptor } from '../interceptor/request.interceptor';

@Controller('items')
@UseInterceptors(RequestInterceptor)
export class ItemsController {
  constructor (private readonly itemsService: ItemsService) {}

  @Get()
  findall (): Item[] {
    return this.itemsService.findAll();
  }

  @Get(':item_id')
  findById (@Param('item_id', ParseUUIDPipe) itemId: string): Item {
    return this.itemsService.findById(itemId);
  }

  @Post()
  create (@Body() createItemDto :CreateItemDto): Item {
    return this.itemsService.create(createItemDto);
  }

  // @Post()
  // create (
  //   @Body('id') id: string,
  //   @Body('name') name: string,
  //   @Body('price') price: number,
  //   @Body('description') description: string
  // ): Item {
  //   const item = {
  //     id,
  //     name,
  //     price,
  //     description,
  //     status: ItemStatus.ON_SALE
  //   };
  //   return this.itemsService.create(item);
  // }

  @Patch(':item_id')
  updateStatus (@Param('item_id', ParseUUIDPipe) itemId: string): Item {
    return this.itemsService.updateStatus(itemId);
  }

  // @Delete(':item_id')
  // delete (@Param('item_id') itemId: string): Item[] {
  //   return this.itemsService.delete(itemId);
  // }

  @Delete(':item_id')
  delete (@Param('item_id', ParseUUIDPipe) itemId: string): void {
    return this.itemsService.delete(itemId);
  }
}

