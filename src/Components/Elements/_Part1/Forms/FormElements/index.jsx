import CheckboxAndRadio from "./components/CheckboxAndRadio";
import FileUpload from "./components/FileUpload";
import InputFields from "./components/InputFields";
import SelectInput from "./components/SelectInput";
import TextareaFields from "./components/TextareaFields";
import TimeAndDate from "./components/TimeAndDate";
import ToggleSwitchInput from "./components/ToggleSwitchInput";

function FormElements() {
    return (
        <div className="form-elements grid md:grid-cols-2 gap-3 sm:gap-5 md:gap-7 2xl:gap-10">
            {/* Input Fields */}
            <InputFields />
            {/* Textarea Fields */}
            <TextareaFields />
            {/* Toggle Switch */}
            <ToggleSwitchInput />
            {/* Checkbox And Radio */}
            <CheckboxAndRadio />
            {/* Time And Date */}
            <TimeAndDate />
            {/* Select Input */}
            <SelectInput />
            {/* File Upload */}
            <FileUpload />
        </div>
    )
}

export default FormElements;