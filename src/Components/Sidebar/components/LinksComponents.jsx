import { NavLink } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { useCallback, useState } from "react";

function LinksComponents({ title = "", links = [] }) {

    const [opens, setOpens] = useState(["dashboard", "task", "forms", "pages", "ui-elements", "authentication"]);

    const getNormalLabel = useCallback((label) => {
        return String(label).replaceAll(" ", "-").toLowerCase();
    }, []);
    const handleOpen = useCallback((label) => {
        if (opens.includes(getNormalLabel(label))) {
            setOpens(prev => prev.filter(l => l !== getNormalLabel(label)))
        } else {
            setOpens(prev => [...prev, getNormalLabel(label)])
        }
    }, [getNormalLabel, opens]);

    return (
        <div className="links-components">
            {/* Label */}
            <h3 className="uppercase text-dark-text-color-secondary font-medium mb-3">{title}</h3>
            {/* Link List */}
            <ul className="links-list space-y-2">
                {
                    links.map((link, index) => (<li key={index} className="text-lg font-medium">
                        {
                            link.links && link.links.length > 0 ? (
                                <>
                                    <button
                                        type="button"
                                        onClick={() => handleOpen(link.label)}
                                        className={`flex items-center gap-3 w-full py-2 px-4 rounded-md transition ${opens.includes(getNormalLabel(link.label)) ? "bg-[#333a48]" : ""}`}
                                    >
                                        <div className="link-icon">{link.icon}</div>
                                        <span>{link.label}</span>
                                        <FaAngleDown className={`ms-auto transition ${opens.includes(getNormalLabel(link.label)) ? "rotate-180" : ""}`} />
                                    </button>
                                    <ul className={`nested-links-list ps-7 space-y-2 overflow-hidden transition-all duration-300 ${opens.includes(getNormalLabel(link.label)) ? "max-h-[1000px] py-3" : "max-h-0"}`}>
                                        {
                                            link.links.map((nestedLink, index) => (<li key={index} className="text-lg">
                                                <NavLink
                                                    to={nestedLink.to}
                                                    className={({ isActive }) => `flex items-center gap-3 py-2 px-4 rounded-md transition ${isActive ? "text-white" : "text-dark-text-color-secondary sm:hover:text-white"}`}
                                                >
                                                    <span>{nestedLink.label}</span>
                                                    {
                                                        (nestedLink.badge || nestedLink.isPro) &&
                                                        <div className="badge-pro bg-primary py-1 px-2 rounded-md ms-auto text-white text-sm">
                                                            {
                                                                link.badge ? (link.badge) : ("Pro")
                                                            }
                                                        </div>
                                                    }
                                                </NavLink>
                                            </li>))
                                        }
                                    </ul>
                                </>
                            ) : (
                                <NavLink
                                    to={link.to}
                                    className={({ isActive }) => `flex items-center gap-3 py-2 px-4 rounded-md transition ${isActive ? "" : ""}`}
                                >
                                    <div className="link-icon">{link.icon}</div>
                                    <span>{link.label}</span>
                                    {
                                        (link.badge || link.isPro) &&
                                        <div className="badge-pro bg-primary py-1 px-2 rounded-md ms-auto text-white text-sm">
                                            {
                                                link.badge ? (link.badge) : ("Pro")
                                            }
                                        </div>
                                    }
                                </NavLink>
                            )
                        }
                    </li>))
                }
            </ul>
        </div>
    )
}

export default LinksComponents;