import AppLabel from "./AppLabel"
import PlusIcon from '../assets/Vector.svg';

export default function TodosItems(props) {
    const {item} = props
    return (
        <div className="p-4 space-y-2 bg-rk-green/[0.1] w-[326px] rounded">
            <AppLabel text={item.title}/>
            <p className="text-xs font-bold">{item.description}</p>
            <button className="text-xs flex flex-row space-x-2">
                <img src={PlusIcon} />
                <span>New Task</span>
                </button>
        </div>
    )
}