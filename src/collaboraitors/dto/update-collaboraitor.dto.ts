import { PartialType } from '@nestjs/mapped-types';
import { CreateCollaboraitorDto } from './create-collaboraitor.dto';

export class UpdateCollaboraitorDto extends PartialType(CreateCollaboraitorDto) {}
