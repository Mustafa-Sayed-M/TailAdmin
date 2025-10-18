import { Link } from "react-router-dom";
import { FaChartSimple } from "react-icons/fa6";

function AppLogo() {
    return (
        <Link
            to={'/'}
            className="flex items-center justify-center gap-3 mb-3 sm:mb-5 md:mb-7"
        >
            <div className="logo-icon p-2 rounded-md bg-primary">
                <FaChartSimple size={20} />
            </div>
            <span className="font-semibold text-xl sm:text-2xl md:text-3xl">TailAdmin</span>
        </Link>
    )
}

export default AppLogo;