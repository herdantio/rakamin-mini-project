import AppCreateTodosModal from "./AppCreateTodosModal"
import AppDeleteTaskModal from "./AppDeleteTaskModal"
import TodosItemsList from "./TodosItemsList"


export default function AppBody() {

    return (
        <div className="p-6">
            <TodosItemsList/>
            <AppDeleteTaskModal/>
            <AppCreateTodosModal/>
        </div>
    )
}