"use client"

import ProductCard from "../w01/product/ProductCard";
import type { Product } from "@/app/src/types/types";

const data: Product[]=[
    {id:"1", title: "Headphones", price: 149.99, image:"/img/headphones.jpg", rating: 4.6, isNew:true},
    {id:"2" ,title:"Gaming Mouse", price: 500.47, image:"/img/mouse.jpg", rating:4.2},
    {id:"3", title:"4k monitor", price:1500, image:"/img/monitor.jpg"}, 
];

export default function Productlist(){
    function handleAdd(p:Product){
      alert(`დამატებულია კალათაში ${p.title} ${p.price} $`);
    }
    return(
        <div>
            {data.map((item, idx) => (
                <ProductCard
                key={item.id}
                item={item}
                onAdd={handleAdd}
                highlight ={idx === 0} // ამას მართლა ვერ მივხვდი რა მნიშვნელობა აქვს?
                />
            ))}
        </div>
    );
}