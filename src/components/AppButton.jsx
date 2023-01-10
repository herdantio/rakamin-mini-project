export default function AppButton({children, ...buttonProps}) {
    
    return (
        <button className="bg-rk-green py-1 px-4 rounded-lg font-bold" {...buttonProps}>
            <span className="text-white text-xs">{children}</span>
        </button>
    )
}