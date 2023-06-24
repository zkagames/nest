import { Page } from "../../style/style"
import { useEffect, useState } from "react";
import { tableConfig } from "./table-config";
import { Table } from "../table/table";
import {  Button } from "@mui/material";
import { Recipe } from "../recipe/recipe";
import { useUserStore } from "../../contexts/user-store";
import { useRecipesStore } from "../../contexts/recipe-store";
import { baseUrl } from "../../utils/consts";

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

    const [isAdding, setIsAdding] = useState(false);

    return <Page>
        
       <Button onClick={()=>setIsAdding(true)} variant="outlined">+ Add Recipe</Button>
       
       <br/><br/>
        
       {isAdding && <Recipe onCancel={()=>setIsAdding(false)}/>}

       {!isAdding && (!!recipes?.length ? 
        <Table tableConfig={tableConfig} data={recipes}/>
        : `No recipes for ${user}`)}
     
                  
    </Page>
}
