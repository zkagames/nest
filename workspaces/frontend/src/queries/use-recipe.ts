import {useQuery} from 'react-query';
import {QUERY_KEYS} from './query-keys';
import { baseUrl } from '../utils/consts';

const EMPTY_RECIPE =  {name: '',stages: []};

export const useRecipe = (user:string, id:string) => {
   return useQuery(QUERY_KEYS.recipe(id) , ()=>fetch(baseUrl+'/'+user+'/'+id).then((res) => res.json() ?? EMPTY_RECIPE));
};
