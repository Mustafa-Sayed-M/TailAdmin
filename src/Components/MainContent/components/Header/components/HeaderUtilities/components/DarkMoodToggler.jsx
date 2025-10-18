import { useEffect, useState } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

function DarkMoodToggler() {

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    const isDark = theme === 'dark';

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <button
            type="button"
            onClick={() => setTheme(prev => prev === "light" ? "dark" : "light")}
            className="dark-mood-toggler w-20 h-10 rounded-full bg-stroke p-1.5"
        >
            <div className={`${isDark ? "translate-x-10" : "translate-x-0"} w-7 h-7 rounded-full bg-white flex items-center justify-center transition shadow-md`}>
                {
                    isDark ? (
                        <IoMoonOutline size={20} className="text-[#969AA1]" />
                    ) : (
                        <IoSunnyOutline size={20} className="text-[#969AA1]" />
                    )
                }
            </div>
        </button>
    )
}

export default DarkMoodToggler;