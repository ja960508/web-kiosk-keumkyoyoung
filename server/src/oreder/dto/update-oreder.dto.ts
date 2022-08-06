import { PartialType } from '@nestjs/mapped-types';
import { CreateOrederDto } from './create-oreder.dto';

export class UpdateOrederDto extends PartialType(CreateOrederDto) {}
