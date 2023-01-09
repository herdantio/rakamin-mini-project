import useFetchData from "../hooks/useFetchData";
import TodosItems from "./TodosItems";

export default function TodosItemsList() {
    const [data] = useFetchData()
    
    return (
        <div className="flex flex-row space-x-4 w-max">
            {data.map(item => <TodosItems key={item.id} item={item}/>)}
        </div>
    )
}