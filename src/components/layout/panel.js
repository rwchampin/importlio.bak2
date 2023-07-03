const Panel = ({ children, className }) => {

    return (
        <div className={`panel ${className} flex flex-col w-full h-full bg-zinc-300 p-5 rounded-lg`}>
            {children}
        </div>
    )
}

export default Panel