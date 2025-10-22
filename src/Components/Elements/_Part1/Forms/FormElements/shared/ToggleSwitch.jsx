import React from "react";

function ToggleSwitch({
    toggler = {
        togglerW: 70,
        togglerH: 35,
        circleW: 30,
        circleH: 30
    },
    name = "",
    circleClassName = "",
    defaultColors = { color1: "#e5e7eb", color2: "#ffffff" },
    activeColors = { color1: "#e5e7eb", color2: "#3056d3" },
    ...props
}) {

    const {
        togglerW,
        togglerH,
        circleW,
        circleH
    } = toggler;

    const [active, setActive] = React.useState(false);

    return (
        <div className="toggle-switch w-fit">
            <label>
                <input
                    {...props}
                    name={name}
                    type="checkbox"
                    className="peer hidden"
                    onChange={e => setActive(e.target.checked)}
                />
                <div
                    style={{
                        width: `${togglerW}px`,
                        height: `${togglerH}px`,
                        backgroundColor: active ? activeColors.color1 : defaultColors.color1
                    }}
                    className={`switch-toggler rounded-full p-1 cursor-pointer transition duration-200`}
                >
                    <div
                        style={{
                            width: `${circleW}px`,
                            height: `${circleH}px`,
                            backgroundColor: active ? activeColors.color2 : defaultColors.color2
                        }}
                        className={`switch-toggler-circle ${active ? "translate-x-[32px] active" : ""} ${circleClassName} rounded-full relative top-1/2 -translate-y-1/2 transition duration-200 shadow-md`}
                    ></div>
                </div>
            </label>
        </div>
    )
}

export default ToggleSwitch;