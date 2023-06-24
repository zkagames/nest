import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { Recipe, RecipeDocument } from './entities/recipe.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class RecipesService {
  constructor(@InjectModel(Recipe.name) private recipeModel: Model<RecipeDocument>){

  }
  async create(createRecipeDto: CreateRecipeDto) {
    const recipe = new this.recipeModel(createRecipeDto);
    return recipe.save();
  }

  async findAll(user:string) {
    return await this.recipeModel.find({user:{$eq: user}}).exec();
  }

  async findOne(id: string) {
    return await this.recipeModel.findById(id).exec();
  }

  async update(id: string, updateRecipeDto: UpdateRecipeDto) {
    const recipe = await this.recipeModel.findByIdAndUpdate(id, updateRecipeDto, {new: true}).exec();
    if(!recipe){
      throw new NotFoundException();
    }
    return recipe;
  }

  async remove(id: string) {
    const recipe = await this.recipeModel.findByIdAndRemove(id).exec();
    if(!recipe){
      throw new NotFoundException();
    }
    return recipe;
  }
}
