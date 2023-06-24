import { create } from 'zustand'
import { Recipe } from '../types'
import { baseUrl } from '../utils/consts'


export const useRecipesStore = create<{
    recipes:Array<Recipe>, 
    setRecipes:(recipes:Array<Recipe>)=>void}>((set) => (
{
    recipes: [],
    setRecipes: (recipes:Array<Recipe>) => set(() => ({recipes}))
}))