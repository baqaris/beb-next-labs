"use client";

import type { Product } from "@/app/src/types/types";
import NewProductCard from "../w01/ProductCard25-09-2025/ProductCard25-09-2025";

const data: Product [] = [
    {id:"1", title:"Jolt 4 - all White Runnner", image: "/SportShose.png", price:79.99, oldPrice: 99.99, description:"Lightweight mesh, cusioned midsole, everydau runs.",isNew:true,  rating:8.8, soldOut:false}
];


export default function ProductCardlist2025_09_25(){
function handleAdd(p:Product){
    alert(`added ${p.title} - $ ${p.price}`)
}

    return(
        <div>
            {data.map((item, idx) =>(
                <NewProductCard
                key={item.id}
                item={item}
                onAdd={handleAdd}
                highlight = {item.isNew === true}
                />
            ))}
        </div>
    );
}