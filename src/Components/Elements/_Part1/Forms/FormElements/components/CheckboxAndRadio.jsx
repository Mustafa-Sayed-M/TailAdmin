import Checkbox from "../shared/Checkbox";
import ElementsContainer from "../shared/ElementsContainer";
import { FaCheck, FaX } from "react-icons/fa6";

function CheckboxAndRadio() {
    return (
        <div className="checkbox-and-radio">
            <ElementsContainer
                title="Checkbox and radio"
                childrenClassName="space-y-4"
            >
                <Checkbox
                    id="checkbox1"
                    label="Checkbox Text"
                    name="checkbox1"
                >
                    <FaCheck />
                </Checkbox>
                <Checkbox
                    id="checkbox2"
                    label="Checkbox Text"
                    name="checkbox2"
                >
                    <FaX />
                </Checkbox>
            </ElementsContainer>
        </div>
    )
}

export default CheckboxAndRadio;