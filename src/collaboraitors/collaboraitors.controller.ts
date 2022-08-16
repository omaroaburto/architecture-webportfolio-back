import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CollaboraitorsService } from './collaboraitors.service';
import { CreateCollaboraitorDto } from './dto/create-collaboraitor.dto';
import { UpdateCollaboraitorDto } from './dto/update-collaboraitor.dto';

@Controller('collaboraitors')
export class CollaboraitorsController {
  constructor(private readonly collaboraitorsService: CollaboraitorsService) {}

  @Post()
  create(@Body() createCollaboraitorDto: CreateCollaboraitorDto) {
    return this.collaboraitorsService.create(createCollaboraitorDto);
  }

  @Get()
  findAll() {
    return this.collaboraitorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.collaboraitorsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCollaboraitorDto: UpdateCollaboraitorDto) {
    return this.collaboraitorsService.update(+id, updateCollaboraitorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.collaboraitorsService.remove(+id);
  }
}
