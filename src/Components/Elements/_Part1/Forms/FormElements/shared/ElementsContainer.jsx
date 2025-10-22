function ElementsContainer({ title = "", childrenClassName = "", children }) {
    return (
        <div className='elements-container bg-white border border-stroke rounded-md overflow-hidden shadow-lg/5'>
            <div className="header p-4 border-b border-b-stroke">
                <h4 className="title font-medium text-lg">{title}</h4>
            </div>
            <div className={`body p-4 ${childrenClassName}`}>
                {children}
            </div>
        </div>
    )
}

export default ElementsContainer;