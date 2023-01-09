import { useState } from "react"
import ProgressBar from "./ProgressBar"
import AppDropdown from "./AppDropdown"

export default function TasksItems(props) {
    const {task} = props
    const [showDropdown, setShowDropdown] = useState(false)

    return (
        <div className="bg-rk-neutral-40 rounded px-4 pt-4 pb-5">
                    
                    <span className="text-sm font-bold">
                        {task.name}
                    </span>
                    
                    <div className="border-b border-dashed mt-2 mb-3"></div>
                    <div className="flex flex-row justify-between">
                        <ProgressBar progress={task.progress_percentage}/>

                        <AppDropdown/>

                    </div>
                </div>
    )
}