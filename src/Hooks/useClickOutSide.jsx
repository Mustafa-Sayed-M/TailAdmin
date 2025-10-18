import { useEffect, useState } from "react";

function useClickOutSide(ref) {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current.contains(event.target)) return;
            setOpen(false);
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [ref]);
    return { open, setOpen }
}

export default useClickOutSide;