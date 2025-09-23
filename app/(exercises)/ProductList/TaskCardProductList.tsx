//app\(exercises)\ProductList\TaskCardProductList.tsx

import type { TaskCardType } from "@/app/src/types/taskCardType";
import TaskProductCard from "../w01/GptCard/TaskProductCard";

const data: TaskCardType[]=[
    {id:"1", title:"Man shoes", image:"/shoose.png", price:120,oldPrice:150, rating:4.5,isNew:true, description:"Comfortable shoes for everyday use"},
];

export default function TaskCardProductList(){
    function handleAdd(p:TaskCardType){
        alert(`added ${p.title}  ${p.price}$`)
    };

    return(<div>
        {data.map((item, idx)=>(
            <TaskProductCard
            key={item.id}
            item={item}
            highlight={item.isNew === true}
            onAdd={handleAdd}
            />
        ))}
    </div>)

}