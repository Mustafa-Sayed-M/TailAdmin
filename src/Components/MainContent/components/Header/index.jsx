import HeaderSearch from "./components/HeaderSearch";
import HeaderUtilities from "./components/HeaderUtilities";

function Header() {
    return (
        <header className="p-3 sm:p-5 md:px-7 bg-white border-b border-b-stroke flex items-center justify-between gap-x-5 md:gap-x-10">
            {/* Header Search */}
            <HeaderSearch />
            {/* Header Utilities */}
            <HeaderUtilities />
        </header>
    )
}

export default Header;