import { NavLink } from "react-router-dom"; // import NavLink from react-router-dom
import logo from "@/assets/images/logo.webp";

import Drawer from "./Drawer";

export default function Navbar() {
  const navlinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Admissions", path: "/admissions" },
    { name: "Events", path: "/events" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <div className="px-4 py-4 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex items-center space-x-10">
          <img
            src={logo}
            alt="Indo Global Group of Colleges"
            className="object-contain lg:h-24 md:h-20 sm:h-16 h-12"
          />
          {/* <img src={logo2} alt="22 Years" className="object-contain h-12" /> */}
        </div>
        <nav>
          <ul className="hidden space-x-4 lg:flex">
            {navlinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-100 bg-red-700 rounded px-3 py-2"
                      : "text-white hover:text-red-200 hover:bg-red-700 rounded px-3 py-2"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <Drawer />
        </nav>
      </div>
    </div>
  );
}
