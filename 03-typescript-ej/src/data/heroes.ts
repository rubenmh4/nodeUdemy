export interface Hero {
    id:number;
    name:string;
    owner:string
}

export const heroes:Hero [] = [
    {
       id:1,
       name:'Spiderman',
       owner:'marvel'
    },
    {
       id:2,
       name:'Batman',
       owner:'marvel'

    },
    {
       id:3,
       name:'Hulk',
       owner:'marvel'

    }
]