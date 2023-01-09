import TodosItems from "./TodosItems";

export default function TasksItemsList(props) {
    const {tasks} = props
    return (
        <div className="">
            {
                tasks.length > 0 ?
                tasks.map(item => item.id)
                :
                <div className="text-sm py-2 px-4 bg-rk-neutral-40 rounded">
                    <span className="text-rk-neutral-70">
                    No Task
                    </span>
                </div>
            }
        </div>
    )
}