export default function TasksItems(props) {
    const {tasks} = props

    return (
        <div className="text-sm py-2 px-4 bg-rk-neutral-40 rounded">
                    <span className="text-rk-neutral-70">
                        {tasks.name}
                    </span>
                </div>
    )
}