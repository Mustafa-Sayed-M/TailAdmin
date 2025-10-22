function TextareaField({ label = "", className = "", ...props }) {
    return (
        <div className="textarea-filed">
            {
                label &&
                <label htmlFor={props.id} className="block w-fit mb-3">{label}</label>
            }
            <textarea
                {...props}
                className={`w-full rounded-md p-3 bg-white disabled:bg-gray border border-stroke min-h-[180px] ${className}`}
            ></textarea>
        </div>
    )
}

export default TextareaField;