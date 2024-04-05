import { Module } from '@nestjs/common';
import { InventoryController } from './controllers/inventory/inventory.controller';
import { InventoryService } from './services/inventory/inventory.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inventory } from '../typeorm/entities/Inventory';

@Module({
  imports: [TypeOrmModule.forFeature([Inventory])],
  controllers: [InventoryController],
  providers: [InventoryService],
})
export class InventoryModule {}
