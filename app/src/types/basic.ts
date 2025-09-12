export type Product = {
    id: string;
    title: string;
    price: number;
    inStock: boolean;
    category: "book" | "laptop" | "phone";
    description?: string;
};



export const products: Product[] =[
    {id: "p1", title:"Clean Code", price:49, inStock:true, category:"book"},
    {id:"p2", title:"UltraBook X", price:1899, inStock:true,category:"laptop"},
    {id:"p3", title:"Smart Z", price:779, inStock:true, category:"phone",description:"128-GB"},

];


