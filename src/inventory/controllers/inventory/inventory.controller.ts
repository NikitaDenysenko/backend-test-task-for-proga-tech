import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateInventoryItemDto } from '../../dtos/CreateInventoryItem.dto';
import { InventoryService } from '../../services/inventory/inventory.service';
import { UpdateInventoryItemDto } from '../../dtos/UpdateInventoryItem.dto';

@Controller('inventory')
export class InventoryController {
  constructor(private inventoryService: InventoryService) {}

  @Get()
  async getInventoryItems() {
    return await this.inventoryService.fetchInventoryItems();
  }

  @Post()
  createInventoryItem(@Body() createInventoryItemDto: CreateInventoryItemDto) {
    return this.inventoryService.createInventoryItem(createInventoryItemDto);
  }

  @Patch(':id')
  async updateInventoryItemById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateInventoryItemDto: UpdateInventoryItemDto,
  ) {
    await this.inventoryService.updateInventoryItem(id, updateInventoryItemDto);
  }
}
