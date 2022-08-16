import { Module } from '@nestjs/common';
import { CollaboraitorsService } from './collaboraitors.service';
import { CollaboraitorsController } from './collaboraitors.controller';

@Module({
  controllers: [CollaboraitorsController],
  providers: [CollaboraitorsService]
})
export class CollaboraitorsModule {}
