import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';

import { ActionsConteiner } from './recipes.style';
import { useDeleteRecipe } from '../../queries/use-delete-recipe';
import { Recipe } from '../../types';

export const RecipeActions = ({recipe, editRecipe}:{recipe: Recipe, editRecipe:(recipe: Recipe)=>void})=>{
    const {mutate: deleteRecipe} = useDeleteRecipe(recipe.user, recipe.name);
   
    return <ActionsConteiner>
            <EditIcon onClick={()=>editRecipe(recipe)}/>
            <DeleteOutlineIcon onClick={()=>deleteRecipe(recipe)}/>
        </ActionsConteiner>
}