import {useMutation} from 'react-query';
import { Recipe } from '../types';
import { baseUrl } from '../utils/consts';
import { useRecipesStore } from '../contexts/recipe-store';

export const useSetRecipe = (isEdited:boolean) => {
  const  {recipes, setRecipes}  = useRecipesStore((state) => state);
  
  return useMutation(
      (recipe:Recipe) => fetch(isEdited ? baseUrl+'/'+recipe.id : baseUrl, {
          method: isEdited ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(recipe),
        }).then((res) => res.json()),{
      onSuccess: (recipe) => {
        
        if(isEdited){
          setRecipes(recipes.map(rec=>{
            if(rec.id===recipe.id){
              return recipe;
            }
            return rec;
          }));
        }else{
          setRecipes([...recipes, recipe]);
        }
      },
  })
};
