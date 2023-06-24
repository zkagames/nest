import { Page } from "../../style/style"
import { useEffect, useState } from "react";
import { tableConfig } from "./table-config";
import { Table } from "../table/table";
import {  Button } from "@mui/material";
import { Recipe } from "../recipe/recipe";
import { useUserStore } from "../../contexts/user-store";
import { useRecipesStore } from "../../contexts/recipe-store";
import { baseUrl } from "../../utils/consts";
import { Recipe as RecipeType} from '../../types';

export const Recipes =()=>{
    const  user  = useUserStore((state) => state.user);
    const  {recipes, setRecipes}  = useRecipesStore((state) => state);
    
    useEffect(()=>{
        const  getRecipes = async ()=>{
            const response = await fetch(baseUrl+'/'+user);
            setRecipes(await response.json());
            }
        getRecipes();
    },[user])

    const [recipe, setRecipe] = useState<RecipeType | undefined>(undefined);

    return <Page>
        
       <Button onClick={()=>setRecipe({user, name: '',stages: []})} variant="outlined">+ Add Recipe</Button>
       
       <br/><br/>
        
       {!!recipe && <Recipe recipe={recipe} onCancel={()=>setRecipe(undefined)}/>}

       {!recipe && (!!recipes?.length ? 
        <Table tableConfig={tableConfig((row)=>setRecipe(row as RecipeType))} data={recipes}/>
        : `No recipes for ${user}`)}
     
                  
    </Page>
}
