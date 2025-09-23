// app\src\types\types.ts


export type Product= {
    id:string;
    title:string;
    price:number;
    image:string;
    oldPrice?:number;
    rating?:number;
    isNew?:boolean;
    soldOut?:boolean;
   
};