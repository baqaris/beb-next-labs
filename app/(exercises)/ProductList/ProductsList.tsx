// app\(exercises)\ProductList\ProductsList.tsx

"use client"

import type { Product } from "@/app/src/types/types";
import ProductCard from "../w01/product/ProductCard";

const data: Product[] = [
    { id: "1", title: "headphone", image:"/img/headphone.jpg", price: 1500, oldPrice:1600, rating: 4.6, isNew:true},
    {id: "2" , title: "Gaming mouse Pro", price:350, image:"/img/mouse.jpg"},
    {id:"3", title:"4K monitor", price: 1800, image: "/img/Monitor.jpg"}

]

export default function ProductList(){
function handleAdd(p:Product){
alert(`დაემატა ${p.title} - ${p.price} $`);
}
return(
    <div>
        {data.map((item, idx) => (
            <ProductCard
            key={item.id}
            item={item}
            onAdd={handleAdd}
            highlight={item.isNew === true}

            />
        ))}
    </div>
)

}