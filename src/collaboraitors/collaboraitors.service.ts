import { Injectable } from '@nestjs/common';
import { CreateCollaboraitorDto } from './dto/create-collaboraitor.dto';
import { UpdateCollaboraitorDto } from './dto/update-collaboraitor.dto';

@Injectable()
export class CollaboraitorsService {
  create(createCollaboraitorDto: CreateCollaboraitorDto) {
    return 'This action adds a new collaboraitor';
  }

  findAll() {
    return `This action returns all collaboraitors`;
  }

  findOne(id: number) {
    return `This action returns a #${id} collaboraitor`;
  }

  update(id: number, updateCollaboraitorDto: UpdateCollaboraitorDto) {
    return `This action updates a #${id} collaboraitor`;
  }

  remove(id: number) {
    return `This action removes a #${id} collaboraitor`;
  }
}
