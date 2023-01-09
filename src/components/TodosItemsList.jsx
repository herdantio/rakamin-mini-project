import useFetchData from "../hooks/useFetchData";
import TodosItems from "./TodosItems";

export default function TodosItemsList() {
    const [data] = useFetchData()
    
    return (
        <div className="flex flex-row space-x-4 w-max">
            {data.map((item, index) => <TodosItems position={index==0?'start':index==data.length-1?'end':'middle'}
             key={item.id} item={item}/>)}
        </div>
    )
}