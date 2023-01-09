export default function ProgressBar({progress}) {
    
    let progressClass = `h-4 rounded-full ${progress >= 100 ? 'bg-rk-green-dark' : 'bg-rk-green'}`
    return (
        <div className="flex flex-row space-x-3 align-middle">
            <div className="w-[175px] h-4 mb-4 bg-rk-neutral-60 rounded-full ">
                <div className={progressClass}
                style={{width: `${progress > 100? 100 : progress < 0 ? 0 : progress }%`}}></div>
            </div>
            
                {
                    progress >= 100 ?
                    <div className="bg-rk-green-dark rounded-full h-4 w-4 px-1">
                        <p className="text-xs text-white">&#x2713;</p>
                    </div>
                    :
                    <span className="text-xs font-normal text-rk-neutral-70">{progress}%</span>
                }
            
        </div>
    )
}