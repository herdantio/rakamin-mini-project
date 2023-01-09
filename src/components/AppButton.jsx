export default function AppButton(props) {
    
    return (
        <button className="bg-rk-green py-1 px-4 rounded-lg">
            <span className="text-white text-xs">{props.text}</span>
        </button>
    )
}