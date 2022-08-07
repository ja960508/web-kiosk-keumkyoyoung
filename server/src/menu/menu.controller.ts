import { Controller, Get } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuItemService } from './menuItem.service';

@Controller('menu')
export class MenuController {
  constructor(
    private readonly menuService: MenuService,
    private readonly menuItemService: MenuItemService,
  ) {}

  @Get()
  async findAll() {
    return this.menuService.findAll();
  }
}
