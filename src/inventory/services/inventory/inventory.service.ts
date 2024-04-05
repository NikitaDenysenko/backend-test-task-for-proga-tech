import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Inventory } from '../../../typeorm/entities/Inventory';
import { Repository } from 'typeorm';
import { CreateInventoryItemParams } from '../../../utils/types';

@Injectable()
export class InventoryService {
  constructor(
    @InjectRepository(Inventory)
    private inventoryRepository: Repository<Inventory>,
  ) {}

  fetchInventoryItems() {}

  createInventoryItem(createInventoryDetails: CreateInventoryItemParams) {
    const newItem = this.inventoryRepository.create({
      ...createInventoryDetails,
    });
    return this.inventoryRepository.save(newItem);
  }
}
