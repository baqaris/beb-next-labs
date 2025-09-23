// app\src\types\GptCardType.ts

export type TaskCardType ={
    id:string;
    title:string;
    description?:string;
    image:string;
    price:number;
    oldPrice:number;
    rating?:number;
    isNew?:boolean;
    soldOut?:boolean;

}