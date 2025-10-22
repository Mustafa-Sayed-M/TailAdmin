function InputField({ label = "", className = "", ...props }) {
    return (
        <div className="input-filed">
            {
                label &&
                <label htmlFor={props.id} className="block w-fit mb-3">{label}</label>
            }
            <input
                {...props}
                className={`w-full rounded-md p-3 bg-white disabled:bg-gray border border-stroke ${className}`}
            />
        </div>
    )
}

export default InputField;