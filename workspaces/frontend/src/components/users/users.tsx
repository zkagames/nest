import { UsersSelect } from "./users.style";
import { useUserStore } from "../../contexts/user-store";

export const Users = ()=>{
    const  {users, user, setUser }  = useUserStore((state) => state);
    return <>
            <img src={`images/${user}.png`} title={`User: ${user}`}/>
            Recipes for
            <UsersSelect onChange={e=>setUser(e.target.value)} defaultValue={user}>
                    {users.map((u)=>
                        <option key={u}>{u}</option>
                    )}
            </UsersSelect>
            
    </> 
}