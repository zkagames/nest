import { useCallback, useEffect, useState } from "react";
import { useRecipe } from "../../queries/use-recipe";
import { useSetRecipe } from "../../queries/use-set-recipe";
import { Alert, AlertColor, Button } from "@mui/material";
import { FormContainer, FormRow } from "../form/form.style";
import { Stage } from "../../types";
import { useUserStore } from "../../contexts/user-store";
import { Recipe as RecipeType} from '../../types';

export const Recipe =({recipe, onCancel}:{recipe: RecipeType, onCancel:()=>void})=>{
    const  user  = useUserStore((state) => state.user);

    const [name, setName] = useState(recipe.name);
    const [stages, setStages] = useState<Array<Stage>>([]);

    const {mutate: setRecipe} = useSetRecipe(!!recipe.id);
    const [updateStatus, setUpdateStatus] = useState<{status: AlertColor, text: string}>({
        status:'success',
        text: ''
    });
   
    useEffect(()=>{
        setName(recipe?.name??'');
        setStages(recipe?.stages??[]);
    },[recipe]);

    useEffect(()=>{
        setUpdateStatus({ 
            status:'success',
            text:''});
    },[user]);

    const setCard = useCallback(()=>{
        setUpdateStatus({ 
            status:'success',
            text:`Recipe updated`});
          
        const addRecipe = {
            ...recipe,
            user,
            name,
            stages
        }

        setRecipe(addRecipe);
        onCancel();
    },[name, stages]);

    const setStagesObj = (str:string)=>{
        setStages(str.split(',').map(stage=>{return {item:stage, action: 'add'}}))
    }


    return <FormContainer>
       
            <FormRow>
                Name: 
                <input value={name} onChange = {e=>setName(e.target.value)}/>
            </FormRow>
                
            <FormRow>
                Stages: 
                <input data-testid="stages" value={stages.map(stage=>stage.item).join(',')} onChange = {e=>setStagesObj(e.target.value)}/>
            </FormRow>
            
            <br/>
            <Button onClick={onCancel} disabled={!name || !stages.length} color="secondary">Cancel</Button>
            <Button onClick={setCard} disabled={!name || !stages.length} variant="outlined">Cook</Button>
            <br/> <br/>

       {updateStatus.text && <Alert severity={updateStatus.status}>{updateStatus.text}</Alert>}

    </FormContainer>
}