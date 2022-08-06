import { Injectable } from '@nestjs/common';
import { CreateOrederDto } from './dto/create-oreder.dto';
import { UpdateOrederDto } from './dto/update-oreder.dto';

@Injectable()
export class OrederService {
  create(createOrederDto: CreateOrederDto) {
    return 'This action adds a new oreder';
  }

  findAll() {
    return `This action returns all oreder`;
  }

  findOne(id: number) {
    return `This action returns a #${id} oreder`;
  }

  update(id: number, updateOrederDto: UpdateOrederDto) {
    return `This action updates a #${id} oreder`;
  }

  remove(id: number) {
    return `This action removes a #${id} oreder`;
  }
}
