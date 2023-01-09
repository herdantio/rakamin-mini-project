import AppLabel from "./AppLabel"

export default function TodosItems(props) {
    const {item} = props
    return (
        <div className="p-4 space-y-2 bg-rk-green/[0.1]">
            <AppLabel text={item.title}/>
            <p className="text-xs font-bold">{item.description}</p>
        </div>
    )
}