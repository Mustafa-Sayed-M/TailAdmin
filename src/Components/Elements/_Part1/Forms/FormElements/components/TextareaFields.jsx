import ElementsContainer from "../shared/ElementsContainer";
import TextareaField from "../shared/TextareaField";

const textareaFields = [
    {
        id: "defaultTextarea",
        label: "Default input",
        placeholder: "Default input text",
    },
    {
        id: "activeTextarea",
        label: "Active input",
        placeholder: "Active input text",
        className: "!border-primary"
    },
    {
        id: "disabledTextarea",
        label: "Disabled input",
        disabled: true,
        placeholder: "Disabled input text",
    }
];

function TextareaFields() {
    return (
        <div className="textarea-fields">
            <ElementsContainer
                title="Textarea Fields"
                childrenClassName="space-y-4"
            >
                {
                    textareaFields.map(({ label, className, ...field }, index) => (<TextareaField
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

export default TextareaFields;