import AppLabel from "./AppLabel"
import PlusIcon from '../assets/Vector.svg';
import useFetchItems from "../hooks/useFetchItems";
import TasksItemsList from "./TaskItemsList";
import { store } from "../store";
import { useContext } from "react";

export default function TodosItems(props) {
    const {item, position} = props
    const[tasks] = useFetchItems(item.id)
    const {dispatch} = useContext(store)
    const openCreateTask = () => {
        dispatch({type: 'setId', payload: {id: item.id, todoId: item.id}})
        dispatch({type: 'setTaskModalMode', payload: 'create'})
        dispatch({type: 'showTaskModal'})
    }
    return (
        <div className="p-4 space-y-2 bg-rk-green/[0.1] w-[326px] rounded h-full">
            
            <AppLabel text={item.title}/>
            
            <p className="text-xs font-bold">{item.description}</p>
            
            <TasksItemsList tasks={tasks} position={position}/>

            <button className="text-xs flex flex-row space-x-2" onClick={() => openCreateTask()}>
                <img src={PlusIcon} />
                <span>New Task</span>
                </button>
        </div>
    )
}