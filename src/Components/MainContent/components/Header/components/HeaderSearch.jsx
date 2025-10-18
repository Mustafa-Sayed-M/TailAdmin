import { IoSearchSharp } from "react-icons/io5";

function HeaderSearch() {
    return (
        <form className="header-search w-full" onSubmit={e => e.preventDefault()}>
            <div className="input-group relative">
                <label htmlFor="headerSearch" className="absolute z-10 left-5 top-1/2 -translate-1/2">
                    <IoSearchSharp size={22} className="text-[#637381]" />
                    <span className="sr-only">Search Icon</span>
                </label>
                <input
                    id="headerSearch"
                    name="search"
                    type="text"
                    autoComplete="off"
                    placeholder="Type to search..."
                    className="w-full p-3 ps-10 placeholder:font-medium placeholder:transition-opacity focus:placeholder:opacity-0"
                />
            </div>
        </form>
    )
}

export default HeaderSearch;