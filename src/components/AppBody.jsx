import AppCreateTodosModal from "./AppCreateTodosModal"
import AppDeleteTaskModal from "./AppDeleteTaskModal"
import AppTaskModal from "./AppTaskModal"
import TodosItemsList from "./TodosItemsList"


export default function AppBody() {

    return (
        <div className="p-6">
            <TodosItemsList/>
            <AppDeleteTaskModal/>
            <AppCreateTodosModal/>
            <AppTaskModal/>
        </div>
    )
}