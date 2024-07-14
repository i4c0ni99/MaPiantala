import { Moon, Sunny } from "../../assets/Icon/Iconi";
import { User } from "../../types/User.class";
import { LoginModal } from "../login/login.component";
import { logOut } from "../../services/cookies.service";

export interface INavBar {
    user?: User;
}
export const Navbar: React.FC<INavBar> = function ({ user }: INavBar) {
    if (user?.role == "ADMIN")
        return (
            <>
                <div className="navbar bg-base-300 rounded-3xl  ">
                    <div className="navbar-start">
                        <div className="drawer ">
                            <input
                                id="my-drawer"
                                type="checkbox"
                                className="drawer-toggle"
                            />
                            <div className="drawer-content">
                                {/* Page content here */}
                                <label
                                    htmlFor="my-drawer"
                                    className="btn btn-circle btn-ghost drawer-button"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        className="inline-block w-5 h-5 stroke-current"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        ></path>
                                    </svg>
                                </label>
                            </div>
                            <div className="drawer-side">
                                <label
                                    htmlFor="my-drawer"
                                    aria-label="close sidebar"
                                    className="drawer-overlay"
                                ></label>
                                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                                    {/* Sidebar content here */}
                                    <li>
                                        <a href="/terrain">Terreni</a>
                                    </li>
                                    <li>
                                        <a href="/event">Eventi</a>
                                    </li>
                                    <li>
                                        <a href="/plant">Piante</a>
                                    </li>
                                    <li>
                                        <a href="/admin-terrains">
                                            Terreni da verificare
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/admin-events">
                                            Eventi da verificare
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-center">
                        <a className="btn btn-ghost text-xl " href="/home">
                            MaPiantala
                        </a>
                    </div>
                    <div className="navbar-end">
                        <div className="dropdown dropdown-end">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost btn-circle avatar"
                            >
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src={
                                            user.profilePicture
                                                ? user.profilePicture
                                                : "https://cdn-icons-png.flaticon.com/512/3237/3237472.png"
                                        }
                                    />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-52"
                            >
                                <li>
                                    <a
                                        href="/profile"
                                        className="justify-between"
                                    >
                                        Profile
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/settings"
                                        className="justify-between"
                                    >
                                        Settings
                                    </a>
                                </li>
                                {user ? (
                                    <li onClick={logOut}>
                                        <a>Logout</a>
                                    </li>
                                ) : (
                                    <LoginModal />
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        );
    else
        return (
            <>
                <div className="navbar bg-base-300 rounded-3xl  ">
                    <div className="navbar-start">
                        <div className="drawer ">
                            <input
                                id="my-drawer"
                                type="checkbox"
                                className="drawer-toggle"
                            />
                            <div className="drawer-content">
                                {/* Page content here */}
                                <label
                                    htmlFor="my-drawer"
                                    className="btn btn-circle btn-ghost drawer-button"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        className="inline-block w-5 h-5 stroke-current"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        ></path>
                                    </svg>
                                </label>
                            </div>
                            <div className="drawer-side">
                                <label
                                    htmlFor="my-drawer"
                                    aria-label="close sidebar"
                                    className="drawer-overlay"
                                ></label>
                                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                                    {/* Sidebar content here */}
                                    <li>
                                        <a href="/terrain">Terreni</a>
                                    </li>
                                    <li>
                                        <a href="/event">Eventi</a>
                                    </li>
                                    <li>
                                        <a href="/plants">Piante</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-center">
                        <a className="btn btn-ghost text-xl " href="/home">
                            MaPiantala
                        </a>
                    </div>
                    <div className="navbar-end">
                        <div className="dropdown dropdown-end">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost btn-circle avatar"
                            >
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src={
                                            user?.profilePicture
                                                ? user.profilePicture
                                                : "https://cdn-icons-png.flaticon.com/512/3237/3237472.png"
                                        }
                                    />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-52"
                            >
                                <li>
                                    <a
                                        href="/profile"
                                        className="justify-between"
                                    >
                                        Profile
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/settings"
                                        className="justify-between"
                                    >
                                        Settings
                                    </a>
                                </li>
                                {user ? (
                                    <li onClick={logOut}>
                                        <a>Logout</a>
                                    </li>
                                ) : (
                                    <LoginModal />
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        );
};
