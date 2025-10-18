import { useRef } from "react";
import useClickOutSide from "@hooks/useClickOutSide";
import { IoMdNotificationsOutline } from "react-icons/io";

const notifications = [
    {
        description: "Edit your information in a swipe Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
        date: "12 May, 2025"
    },
    {
        description: "It is a long established fact that a reader will be distracted by the readable.",
        date: "24 Feb, 2025"
    },
    {
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered",
        date: "04 Jan, 2025"
    },
    {
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered",
        date: "04 Jan, 2025"
    }
];

function Notifications() {

    const ref = useRef(null);
    const { open, setOpen } = useClickOutSide(ref);

    return (
        <div className="notifications relative" ref={ref}>
            <button
                type="button"
                onClick={() => setOpen(prev => !prev)}
                className="notifications-btn w-10 h-10 flex items-center justify-center rounded-full bg-gray border border-stroke text-text-color"
            >
                <IoMdNotificationsOutline size={25} />
            </button>
            {/* Notifications Box */}
            <div className={`${open ? "" : "pointer-events-none opacity-0 translate-y-2"} notifications-box min-w-[320px] sm:min-w-[375px] rounded-md bg-white border border-stroke shadow-lg/5 absolute z-50 right-0 top-full mt-3 transition`}>
                {/* Header */}
                <div className="notifications-box-header p-5 border-b border-b-stroke">
                    <h3 className="text-dark-text-color-secondary font-semibold text-lg">Notifications</h3>
                </div>
                {/* Body */}
                <div className="notifications-box-body max-h-[400px] overflow-y-auto">
                    {
                        notifications.map((notification, index) => (<div className="notification-item text-text-color p-5 not-last-of-type:border-b not-last-of-type:border-b-stroke" key={index}>
                            <p className="font-medium mb-3 first-line:font-semibold first-line:text-[#212b36]">{notification.description}</p>
                            <span>{notification.date}</span>
                        </div>))
                    }
                </div>
            </div>
        </div>
    )
}

export default Notifications;