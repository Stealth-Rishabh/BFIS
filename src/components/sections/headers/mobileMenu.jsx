import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaPlus, FaXmark } from "react-icons/fa6";
import PropTypes from "prop-types"; // Import PropTypes
import logo from "@/assets/images/logo.png";
import { menuList } from "@/lib/fackdata/menuList";
import ExtraInfo from "./extraInfo";

const MobileMenu = ({ isMobleMenuActive, setIsMobleMenuActive }) => {
  const [dropdownActive, setDropdownActive] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    setDropdownActive(null);
    setIsMobleMenuActive(false);
  }, [pathname, setIsMobleMenuActive]); // Add setIsMobleMenuActive to the dependency array

  return (
    <div className="block xl:hidden">
      <div
        className={`fixed left-0 top-0 w-full h-full bg-black/30 transition-all ${
          isMobleMenuActive ? "visible" : "invisible"
        }`}
        onClick={() => setIsMobleMenuActive(false)}
      ></div>
      <nav
        className={`bg-warm border-l-2 border-l-primary w-full max-w-md min-h-screen h-full overflow-y-auto p-7 shadow-md fixed  ${
          isMobleMenuActive ? "right-0" : "-right-full"
        } top-0 z-50 transition-all duration-500`}
      >
        <div className="flex justify-between items-center">
          <a href="" className="flex items-center gap-1">
            <img src={logo} alt="logo" />
          </a>
          <div
            className="bg-primary w-10 h-10 text-cream-foreground flex items-center justify-center rounded-[4px] left-4"
            onClick={() => setIsMobleMenuActive(false)}
          >
            <FaXmark className="text-xl" />
          </div>
        </div>
        <ul className="mt-6">
          {menuList.map(({ dropDownMenu = [], id, label, path }) => {
            return (
              <li key={id} className="leading-[164%] relative w-full dropdown">
                <Link
                  onClick={() =>
                    setDropdownActive(dropdownActive === id ? null : id)
                  }
                  to={path}
                  className="font-poppins py-2.5 border-b border-b-slate-300 text-[#385469] flex justify-between items-center"
                >
                  <span>{label}</span>
                  {dropDownMenu.length > 0 && <FaPlus />}
                </Link>
                {dropDownMenu.length > 0 && (
                  <ul
                    className={`min-w-56 w-full transition-all duration-500 ${
                      dropdownActive === id
                        ? "max-h-[600px] overflow-auto pt-3 no-scrollbar"
                        : "max-h-0 overflow-hidden"
                    }`}
                  >
                    {dropDownMenu.map(({ id, label, path }) => (
                      <li key={id}>
                        <Link
                          to={path}
                          className="text-[#385469] font-poppins hover:text-secondary-foreground transition-all duration-500 py-2.5 px-6 block border-b border-b-slate-300"
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
        <ExtraInfo />
      </nav>
    </div>
  );
};

// Add PropTypes validation
MobileMenu.propTypes = {
  isMobleMenuActive: PropTypes.bool.isRequired, // Validate as a required boolean
  setIsMobleMenuActive: PropTypes.func.isRequired, // Validate as a required function
};

export default MobileMenu;
