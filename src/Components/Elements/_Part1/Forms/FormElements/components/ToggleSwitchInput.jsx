import ElementsContainer from "../shared/ElementsContainer";
import ToggleSwitch from "../shared/ToggleSwitch";

function ToggleSwitchInput() {
    return (
        <div className="toggle-switch-input [&.active]:translate-x-">
            <ElementsContainer
                title="Toggle switch input"
                childrenClassName="space-y-6"
            >
                <ToggleSwitch name="toggler1" />
                <ToggleSwitch
                    name="toggler2"
                    defaultColors={{
                        color1: "#212b36",
                        color2: "#ffffff"
                    }}
                    activeColors={{
                        color1: "#3056d3",
                        color2: "#ffffff"
                    }}
                />
            </ElementsContainer>
        </div>
    )
}

export default ToggleSwitchInput;