import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "@/assets/images/logo_w.png";
import Drawer from "./Drawer";

export default function Navbar() {
  const navlinks = [
    { name: "Home", path: "/" },
    {
      name: "About Us",
      path: "/about",
      dropdown: [
        { name: "Message", path: "/about/message" },
        { name: "Our Values", path: "/about/values" },
        { name: "What Sets Us Apart", path: "/about/set-us-apart" },
      ],
    },
    { name: "Academics", path: "/academics" },
    { name: "Programs", path: "/programs" },
    { name: "Admissions", path: "/admission" },
    { name: "Infrastructure", path: "/infrastructure" },
    { name: "Events", path: "/events" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  // Check if any dropdown link is active
  const isDropdownActive = (dropdown) =>
    dropdown?.some((item) => location.pathname.startsWith(item.path));

  const handleMouseEnter = () => setDropdownOpen(true);
  const handleMouseLeave = () => setDropdownOpen(false);

  return (
    <div className="px-4 py-4 bg-red-800 shadow-lg relative z-50">
      <div className="container flex items-center justify-between mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-10">
          <NavLink to="/" aria-label="Home">
            <img
              src={logo}
              alt="Brookfield International School Logo"
              className="object-contain lg:h-24 md:h-20 sm:h-16 h-12"
              style={{
                filter: "drop-shadow(2px 2px 4px rgba(255, 255, 255, 0.5))",
              }}
            />
          </NavLink>
        </div>

        {/* Navigation Links for Desktop */}
        <nav className="hidden lg:flex">
          <ul className="flex space-x-4 relative">
            {navlinks.map((link) =>
              link.dropdown ? (
                <li
                  key={link.name}
                  className="relative group"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive || isDropdownActive(link.dropdown)
                        ? "text-red-200 border-b-2 border-red-200 px-3 py-2"
                        : "text-white hover:text-red-300 rounded px-3 py-2 transition-colors duration-300"
                    }
                  >
                    {link.name}
                  </NavLink>
                  {dropdownOpen && (
                    <ul className="absolute left-0 mt-2 bg-red-900 text-white shadow-lg rounded py-2 w-48 z-50">
                      {link.dropdown.map((dropdownItem) => (
                        <li key={dropdownItem.name}>
                          <NavLink
                            to={dropdownItem.path}
                            className={({ isActive }) =>
                              isActive
                                ? "block px-4 py-2 text-red-200 font-medium"
                                : "block px-4 py-2 hover:bg-red-950 transition-colors duration-300"
                            }
                          >
                            {dropdownItem.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-red-200 border-b-2 border-red-200 px-3 py-2"
                        : "text-white hover:text-red-300 rounded px-3 py-2 transition-colors duration-300"
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Mobile Navigation Drawer */}
        <div className="lg:hidden">
          <Drawer />
        </div>
      </div>
    </div>
  );
}
