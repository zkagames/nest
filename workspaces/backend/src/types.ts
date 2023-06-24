
export type Stage = {item:string, action: Action}

export type Recipe = {
  user: string;
  name: string;
  stages: Array<Stage>;

}
export type Action ='add' | 'heat' | 'freeze'

