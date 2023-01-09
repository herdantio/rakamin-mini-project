import ProgressBar from "./ProgressBar"

export default function TasksItems(props) {
    const {task} = props

    return (
        <div className="bg-rk-neutral-40 rounded px-4 pt-4 pb-5">
                    
                    <span className="text-sm font-bold">
                        {task.name}
                    </span>
                    
                    <div className="border-b border-dashed mt-2 mb-3"></div>
                    <div>
                        <ProgressBar progress={task.progress_percentage}/>
                    </div>
                </div>
    )
}