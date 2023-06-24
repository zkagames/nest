import { Module } from '@nestjs/common';
import { RecipesService } from './recipies.service';
import { RecipesController } from './recipies.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RecipeSchema } from './entities/recipe.entity';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Recipe', schema: RecipeSchema}])],
  controllers: [RecipesController],
  providers: [RecipesService]
})
export class RecipesModule {}
