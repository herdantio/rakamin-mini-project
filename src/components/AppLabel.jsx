export default function AppLabel (props) {
    const mapping = [
        "px-2 py-[2px] text-rk-green text-xs border-solid border-rk-green border rounded",
        "px-2 py-[2px] text-rk-yellow text-xs border-solid border-rk-yellow border rounded",
        "px-2 py-[2px] text-rk-red text-xs border-solid border-rk-red border rounded",
        "px-2 py-[2px] text-rk-green-dark text-xs border-solid border-rk-green-dark border rounded"
    ]
    return (
        <span className={mapping[props.index%4]}>
            {props.text}
        </span>
    )
}