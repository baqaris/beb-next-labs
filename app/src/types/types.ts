// app\src\types\types.ts


export type Product ={
    id:string;
    description?: string;
    image?: string;
    price: number;
    oldPrice?: number;
    soldOut?: boolean;
    rating?: number;
    isNew?: boolean;
    title:string;
    
}


export type Counts = Partial<Record<Product["id"], number>>;