import { Recipe, Stage } from "../../types";
import { TableRow } from "../table/table-types";
import { DeleteRecipe } from "./delete-recipie";
import { StageContainer } from "./recipes.style";
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export const tableConfig = {
    columns: [
        {
            id: 'name', displayName: 'Name',
        },
        {
            id: 'stages', displayName: "Stages",
            render: (row : TableRow) => {   
                return <>{(row.stages as Array<Stage>).map((stage,i)=>{
                    const {action,item } = stage;
                    return <StageContainer action={action} key={i} title={action}>
                        {action === 'heat' && <LocalFireDepartmentIcon fontSize={"small"}/>}
                        {action === 'freeze' && <AcUnitIcon fontSize={"small"}/>}
                        {item}
                        {i<row.stages.length-1 && ' > '}
                    </StageContainer>
                })}
               </>
              }
        },
        {
           id: 'actions', displayName: '',
           width: 0.1,
           render: (row : TableRow) => <DeleteRecipe recipe={row as Recipe}/>
        }
    ]
}