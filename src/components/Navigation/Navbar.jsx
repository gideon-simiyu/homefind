import { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import client from "../../backend/client";
import { UserContext } from "../../context/user";


const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const path = location.pathname.split("/")[1];
    const { user, setUser } = useContext(UserContext);

    const logout = () => {
        setUser({
            authenticated: false,
            user: null
        });
        client.authStore.clear();
        navigate("/login");
    }


    return (
        <nav className="navbar rounded-box flex w-full items-center justify-between gap-2 shadow">
            <div className="navbar-start max-sm:w-1/4">
                <a className="link text-base-content/90 link-neutral text-xl font-semibold no-underline flex gap-3" href="#">
                    <img className="h-8 w-8" src="/logo.png" alt="" />
                    <span>HomeFind</span>
                </a>
            </div>
            <div className="navbar-center max-sm:hidden">
                <ul className="menu menu-horizontal p-0 font-medium">
                    <li><Link to="/" className={path === "" ? "text-primary" : ""}>Home</Link></li>
                    <li><Link to="/properties" className={path === "properties" ? "text-primary" : ""}>Properties</Link></li>
                    <li><Link to="/bookings" className={path === "bookings" ? "text-primary" : ""}>Bookings</Link></li>
                    <li><Link to="/notifications" className={path === "notifications" ? "text-primary" : ""}>Notifications</Link></li>
                </ul>
            </div>
            <div className="navbar-end items-center gap-4">
                <div className="dropdown relative inline-flex sm:hidden rtl:[--placement:bottom-end]">
                    <button id="dropdown-default" type="button" className="dropdown-toggle btn btn-text btn-secondary btn-square" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                        <span className="icon-[tabler--menu-2] dropdown-open:hidden size-5"></span>
                        <span className="icon-[tabler--x] dropdown-open:block hidden size-5"></span>
                    </button>
                    <ul className="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-default">
                        <li><Link className={`${path === "" && "text-primary"} " dropdown-item`} to="/">Home</Link></li>
                        <li><Link className={`${path === "properties" && "text-primary"} " dropdown-item`} to="/properties">Properties</Link></li>
                        <li><Link className={`${path === "bookings" && "text-primary"} " dropdown-item`} to="/bookings">Bookings</Link></li>
                        <li><Link className={`${path === "notifications" && "text-primary"} " dropdown-item`} to="/notifications">Notifications</Link></li>
                    </ul>
                </div>
                <div className="dropdown relative inline-flex [--auto-close:inside] [--offset:8] [--placement:bottom-end]">
                    <button id="dropdown-scrollable" type="button" className="dropdown-toggle flex items-center" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                        <div className="avatar">
                            <div className="size-9.5 rounded-full">
                                <img src={user?.user?.avatar || user?.user?.avatar_url || "/images/user.webp"} referrerPolicy="no-referrer" alt="avatar 1" />
                            </div>
                        </div>
                    </button>

                    {user?.authenticated ? (
                        <ul className="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-avatar">
                            <li className="dropdown-header gap-2">
                                <div className="avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.user?.avatar || user?.user?.avatar_url || "/images/user.webp"} referrerPolicy="no-referrer" alt="avatar" />
                                    </div>
                                </div>
                                <div>
                                    <h6 className="text-base-content/90 text-base font-semibold">{user?.user?.name}</h6>
                                    <small className="text-base-content/50">{user?.user?.role}</small>
                                </div>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/profile">
                                    <span className="icon-[tabler--user]"></span>
                                    My Profile
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/notifications">
                                    <span className="icon-[tabler--bell]"></span>
                                    Notifications
                                </Link>
                            </li>
                            <li className="dropdown-footer gap-2">
                                <a className="btn btn-error btn-soft btn-block" href="#" onClick={logout}>
                                    <span className="icon-[tabler--logout]"></span>
                                    Sign out
                                </a>
                            </li>
                        </ul>
                    ) : (
                        <ul className="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-avatar">
                            <li className="dropdown-header gap-2">
                                <div className="avatar">
                                    <div className="w-10 rounded-full">
                                        <img src="/images/user.webp" alt="avatar" />
                                    </div>
                                </div>
                                <div>
                                    <h6 className="text-base-content/90 text-base font-semibold">John Doe</h6>
                                    <small className="text-base-content/50">Anonymous</small>
                                </div>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/login">
                                    <span className="icon-[tabler--login]"></span>
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/register">
                                    <span className="icon-[tabler--user-plus]"></span>
                                    Register
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;