import DarkMoodToggler from "./components/DarkMoodToggler";
import Messages from "./components/Messages";
import Notifications from "./components/Notifications";
import User from "./components/User";

function HeaderUtilities() {
    return (
        <div className="header-utilities flex items-center gap-5 shrink-0">
            {/* Dark Mood Toggler */}
            <DarkMoodToggler />
            {/* Notifications */}
            <Notifications />
            {/* Messages */}
            <Messages />
            {/* User */}
            <User />
        </div>
    )
}

export default HeaderUtilities;