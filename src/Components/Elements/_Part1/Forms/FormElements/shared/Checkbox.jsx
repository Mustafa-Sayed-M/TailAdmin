function Checkbox({ id = "", name = "", label = "", children }) {
    return (
        <div className="checkbox flex items-center gap-2">
            <label htmlFor={id}>
                <input
                    id={id}
                    name={name}
                    type="checkbox"
                    className="peer hidden"
                />
                <div className="custom-checkbox w-5 h-5 text-xs flex items-center justify-center rounded-sm cursor-pointer border border-text-color peer-checked:bg-[#eff4fb] peer-checked:border-primary *:text-primary *:transition *:scale-0 peer-checked:*:scale-100">
                    {children}
                </div>
            </label>
            <label htmlFor={id} className="cursor-pointer select-none">{label}</label>
        </div>
    )
}

export default Checkbox;