import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Inventory } from '../../../typeorm/entities/Inventory';
import { Repository } from 'typeorm';
import {
  CreateInventoryItemParams,
  UpdateInventoryItemParams,
} from '../../../utils/types';

@Injectable()
export class InventoryService {
  constructor(
    @InjectRepository(Inventory)
    private inventoryRepository: Repository<Inventory>,
  ) {}

  fetchInventoryItems() {
    return this.inventoryRepository.find();
  }

  createInventoryItem(createInventoryDetails: CreateInventoryItemParams) {
    const newItem = this.inventoryRepository.create({
      ...createInventoryDetails,
    });
    return this.inventoryRepository.save(newItem);
  }

  updateInventoryItem(
    id: number,
    updateInventoryItemDetails: UpdateInventoryItemParams,
  ) {
    return this.inventoryRepository.update({ id }, {...updateInventoryItemDetails})
  }

  deleteInventoryItem(id: number) {
    return this.inventoryRepository.delete({ id });
  }
}
