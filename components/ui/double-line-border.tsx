export default function DoubleLineBorder({className}:{className: string}) {
    return(
        <div className={`flex absolute inset-0 z-50 w-full h-fit border-y border-(--color-line) py-2 ${className}`}/>
    )
}