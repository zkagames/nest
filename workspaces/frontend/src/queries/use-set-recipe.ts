import {useMutation} from 'react-query';
import { Recipe } from '../types';
import { baseUrl } from '../utils/consts';
import { useRecipesStore } from '../contexts/recipe-store';

export const useSetRecipe = () => {
  const  {recipes, setRecipes}  = useRecipesStore((state) => state);
  
  return useMutation(
      (recipe:Recipe) => fetch(baseUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(recipe),
        }).then((res) => res.json()),{
      onSuccess: (recipe) => {
        setRecipes([...recipes, recipe]);
      },
  })
};
