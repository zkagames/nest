import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { TableRow } from '../table/table-types';
import { DeleteConteiner } from './recipes.style';
import { useDeleteRecipe } from '../../queries/use-delete-recipe';
import { Recipe } from '../../types';

export const DeleteRecipe = ({recipe}:{recipe: Recipe})=>{
    const {mutate: deleteRecipe} = useDeleteRecipe(recipe.user, recipe.name);
    
    return <DeleteConteiner><DeleteOutlineIcon onClick={()=>deleteRecipe(recipe)}/></DeleteConteiner>
}