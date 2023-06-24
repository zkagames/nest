import {useMutation} from 'react-query';
import { Recipe } from '../types';
import { baseUrl } from '../utils/consts';
import { useRecipesStore } from '../contexts/recipe-store';

export const useDeleteRecipe = (user:string, name:string) => {
    const  {recipes, setRecipes}  = useRecipesStore((state) => state);
 
    return useMutation(
        (recipe:Recipe) =>fetch(`${baseUrl}/${recipe.id}`, {
            method: "DELETE",
          }).then(res => res.json()),{
        onSuccess: (recipe) => {
            setRecipes(recipes.filter(rec=>rec.id !==recipe.id));
        },
    })
};
