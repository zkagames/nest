import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { RecipesService } from './recipies.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Post()
  create(@Body() createRecipeDto: CreateRecipeDto) {
    return this.recipesService.create(createRecipeDto);
  }

  @Get(':user')
  findAll(@Param('user') user: string) {
    return this.recipesService.findAll(user);
  }

  @Get(':user/:id')
  findOne(@Param('id') id: string) {
    return this.recipesService.findOne(id);
  }


  @Put(':id')
  update(@Param('id') id: string, @Body() updateRecipeDto: UpdateRecipeDto) {
    return this.recipesService.update(id, updateRecipeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recipesService.remove(id);
  }
}
