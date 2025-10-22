import { Link, useLocation } from "react-router-dom";

function Breadcrumb({ className = "" }) {

    const { pathname } = useLocation();
    if (pathname === "/") return;
    const pageTitle = pathname.match(/\w+/ig).join(' ');

    return (
        <div className={`breadcrumb flex items-center justify-between ${className}`}>
            {/* Page Title */}
            <h2 className="capitalize font-semibold text-lg sm:text-xl md:text-2xl">{pageTitle}</h2>
            <ul className="text-text-color font-semibold [&>li]:last-of-type:[&>a]:text-primary flex items-center gap-2">
                <li>
                    <Link to={'/'} className="text-[64748b]">Dashboard</Link>
                </li>
                <li>/</li>
                <li>
                    <Link to={pathname} className="text-[64748b] capitalize">{pageTitle}</Link>
                </li>
            </ul>
        </div>
    )
}

export default Breadcrumb;