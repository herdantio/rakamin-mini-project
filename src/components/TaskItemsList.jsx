import TasksItems from "./TaskItems"

export default function TasksItemsList(props) {
    const {tasks} = props
    return (
        <div className="space-y-3">
            {
                tasks.length > 0 ?
                tasks.map(item => <TasksItems task={item} />)
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