import ElementsContainer from "../shared/ElementsContainer";
import InputField from "../shared/InputField";

const inputFields = [
    {
        id: "defaultInput",
        label: "Default input",
        placeholder: "Default input text",
    },
    {
        id: "activeInput",
        label: "Active input",
        placeholder: "Active input text",
        className: "!border-primary"
    },
    {
        id: "disabledInput",
        label: "Disabled input",
        disabled: true,
        placeholder: "Disabled input text",
    }
];

function InputFields() {
    return (
        <div className="input-fields">
            <ElementsContainer
                title="Input Fields"
                childrenClassName="space-y-4"
            >
                {
                    inputFields.map(({ label, className, ...field }, index) => (<InputField
                        key={index}
                        label={label}
                        className={className}
                        {...field}
                    />))
                }
            </ElementsContainer>
        </div>
    )
}

export default InputFields;