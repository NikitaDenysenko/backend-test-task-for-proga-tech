import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateInventoryItemDto } from '../../dtos/CreateInventoryItem.dto';
import { InventoryService } from '../../services/inventory/inventory.service';

@Controller('inventory')
export class InventoryController {
  constructor(private inventoryService: InventoryService) {}

  @Get()
  getInventoryItems() {}

  @Post()
  createInventoryItem(@Body() createInventoryItemDto: CreateInventoryItemDto) {
    this.inventoryService.createInventoryItem(createInventoryItemDto);
  }
}
