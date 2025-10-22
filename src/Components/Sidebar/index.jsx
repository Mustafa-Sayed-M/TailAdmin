import AppLogo from "./components/AppLogo";
import LinksComponents from "./components/LinksComponents";
import { RxDashboard } from "react-icons/rx";
import { CgCalendarDates } from "react-icons/cg";
import { FiUser } from "react-icons/fi";
import { BsListTask } from "react-icons/bs";
import { MdFormatAlignRight, MdMailOutline } from "react-icons/md";
import { TbFileInvoice, TbTableShortcut } from "react-icons/tb";
import { RiPagesLine } from "react-icons/ri";
import { IoDownloadOutline } from "react-icons/io5";
import { FaChartPie } from "react-icons/fa6";
import { LuLayoutDashboard } from "react-icons/lu";
import { PiSignInFill } from "react-icons/pi";

const links = [
    // # Dashboard
    {
        title: "Menu",
        links: [
            {
                icon: <RxDashboard />,
                label: "Dashboard",
                links: [
                    {
                        isPro: true,
                        to: "/e-commerce",
                        label: "eCommerce"
                    },
                    {
                        isPro: false,
                        to: "/analytics",
                        label: "Analytics"
                    },
                    {
                        isPro: true,
                        to: "/marketing",
                        label: "Marketing"
                    },
                    {
                        isPro: true,
                        to: "/crm",
                        label: "CRM"
                    }
                ]
            },
            {
                icon: <CgCalendarDates />,
                to: "/calender",
                label: "Calender"
            },
            {
                icon: <FiUser />,
                to: "/profile",
                label: "Profile"
            },
            {
                icon: <BsListTask />,
                label: "Task",
                links: [
                    {
                        isPro: true,
                        to: "/task-list",
                        label: "List"
                    },
                    {
                        isPro: true,
                        to: "/task-kanban",
                        label: "Kanban"
                    }
                ]
            },
            {
                icon: <MdFormatAlignRight />,
                label: "Forms",
                links: [
                    {
                        isPro: false,
                        to: "/form-elements",
                        label: "Form Elements"
                    },
                    {
                        isPro: false,
                        to: "/form-layout",
                        label: "Form Layout"
                    },
                    {
                        isPro: true,
                        to: "/form-validation",
                        label: "Form Validation"
                    }
                ]
            },
            {
                icon: <TbTableShortcut />,
                to: "/tables",
                label: "Tables"
            },
            {
                icon: <RiPagesLine />,
                label: "Pages",
                links: [
                    {
                        isPro: false,
                        to: "/settings",
                        label: "Settings"
                    },
                    {
                        isPro: true,
                        to: "/file-manager",
                        label: "File Manager"
                    },
                    {
                        isPro: true,
                        to: "/data-tables",
                        label: "Data Tables"
                    },
                    {
                        isPro: true,
                        to: "/pricing-tables",
                        label: "Pricing Tables"
                    },
                    {
                        isPro: true,
                        to: "/error-page",
                        label: "Error Page"
                    },
                    {
                        isPro: true,
                        to: "/mail-success",
                        label: "Mail Success"
                    }
                ]
            }
        ]
    },
    // # Support
    {
        title: "Support",
        links: [
            {
                icon: <MdMailOutline />,
                to: "/messages",
                badge: "5",
                isPro: false,
                label: "Messages",
            },
            {
                icon: <IoDownloadOutline />,
                to: "/inbox",
                isPro: true,
                label: "Inbox"
            },
            {
                icon: <TbFileInvoice />,
                to: "/invoice",
                isPro: true,
                label: "Invoice"
            }
        ]
    },
    // # Others
    {
        title: "Others",
        links: [
            {
                icon: <FaChartPie />,
                to: "/chart",
                isPro: false,
                label: "Chart",
            },
            {
                icon: <LuLayoutDashboard />,
                label: "UI ELements",
                links: [
                    {
                        isPro: false,
                        to: "/alerts",
                        label: "Alerts"
                    },
                    {
                        isPro: false,
                        to: "/buttons",
                        label: "Buttons"
                    },
                    {
                        isPro: true,
                        to: "/buttons-group",
                        label: "Buttons Group"
                    },
                    {
                        isPro: true,
                        to: "/badge",
                        label: "Badge"
                    },
                    {
                        isPro: true,
                        to: "/breadcrumb",
                        label: "Breadcrumb"
                    },
                    {
                        isPro: true,
                        to: "/cards",
                        label: "Cards"
                    },
                    {
                        isPro: true,
                        to: "/dropdowns",
                        label: "Dropdowns"
                    },
                    {
                        isPro: true,
                        to: "/modals",
                        label: "Models"
                    },
                    {
                        isPro: true,
                        to: "/tabs",
                        label: "Tabs"
                    },
                    {
                        isPro: true,
                        to: "/tooltips",
                        label: "Tooltips"
                    },
                    {
                        isPro: true,
                        to: "/popovers",
                        label: "Popovers"
                    },
                    {
                        isPro: true,
                        to: "/accordion",
                        label: "Accordion"
                    },
                    {
                        isPro: true,
                        to: "/notifications",
                        label: "Notifications"
                    },
                    {
                        isPro: true,
                        to: "/pagination",
                        label: "Pagination"
                    },
                    {
                        isPro: true,
                        to: "/progress",
                        label: "pagination"
                    },
                    {
                        isPro: true,
                        to: "/carousel",
                        label: "Carousel"
                    },
                    {
                        isPro: true,
                        to: "/images",
                        label: "Images"
                    },
                    {
                        isPro: true,
                        to: "/videos",
                        label: "Videos"
                    }
                ]
            },
            {
                icon: <PiSignInFill />,
                label: "Authentication",
                links: [
                    {
                        isPro: false,
                        to: "/signin",
                        label: "Signin"
                    },
                    {
                        isPro: false,
                        to: "/signup",
                        label: "Signup"
                    },
                    {
                        isPro: true,
                        to: "/reset-password",
                        label: "Reset Password"
                    }
                ]
            }
        ]
    }
];

function Sidebar() {
    return (
        <aside className="sidebar bg-dark text-white min-w-[340px] max-h-full overflow-y-auto p-3 sm:p-5 md:p-7">
            {/* App Logo */}
            <AppLogo />
            {/* Links Wrapper */}
            <div className="links-wrapper space-y-4">
                {
                    links.map(({ title, links }, index) => (<LinksComponents
                        title={title}
                        key={index}
                        links={links}
                    />))
                }
            </div>
        </aside>
    )
}

export default Sidebar;