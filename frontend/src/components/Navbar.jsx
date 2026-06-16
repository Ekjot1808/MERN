import { NavLink, useNavigate } from "react-router"
import { UseUser } from "../store/auth";
import { toast } from "react-toastify";

function Navbar() {
  const { user, setUser } = UseUser();
  const navigate = useNavigate();

  console.log(user)

  async function handleLogout() {
    await fetch("http://localhost:5000/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });
    setUser(null);
    navigate("/login");
    toast.success("Logout Successful");
  }

  return (
    <>
      <nav className="navbar max-w-7xl mx-auto px-6">

        {/* Logo */}
        <div className="flex-1">
          <NavLink to="/" className="font-bold text-lg md:text-xl">
            Ekjot Singh
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal items-center gap-2 px-1 font-medium">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/service">Service</NavLink></li>

            {user?.user?.isAdmin && (
              <li>
                <NavLink to="/admin">Admin</NavLink>
              </li>
            )}

            {user ? (
              <li>
                <NavLink onClick={handleLogout} className="btn btn-outline btn-sm">
                  Logout
                </NavLink>
              </li>
            ) : (
              <>
                <li>
                  <NavLink to="/login" className="btn btn-outline btn-sm">
                    Login
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/register" className="btn btn-primary btn-sm">
                    Register
                  </NavLink>
                </li>
              </>
            )}

          </ul>
        </div>

        {/* Mobile Hamburger */}
        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-1 p-3 shadow bg-base-200 rounded-box w-52"
          >
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/service">Service</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
          </ul>
        </div>

      </nav>
    </>
  )
}

export default Navbar
