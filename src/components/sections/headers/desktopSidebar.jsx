import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaEnvelope,
  FaLocationDot,
  FaPhone,
  FaXmark,
} from "react-icons/fa6";
import PropTypes from "prop-types"; // Add PropTypes for validation
import Logo from "@/components/ui/logo";
import SocalIcons from "@/components/ui/socalIcons";
import { Button } from "@/components/ui/button";

const DesktopSidebar = ({ active, setActive }) => {
  return (
    <div className="xl:block hidden">
      <div
        className={`fixed left-0 top-0 w-full h-full bg-black/30 transition-all ${
          active ? "visible" : "invisible"
        }`}
        onClick={() => setActive(false)}
      ></div>
      <nav
        className={`bg-warm border-l-2 border-l-primary w-full max-w-md min-h-screen h-full overflow-y-auto p-7 shadow-md fixed ${
          active ? "right-0" : "-right-full"
        } top-0 z-50 transition-all duration-500`}
      >
        <div className="flex justify-between items-center">
          <Logo />
          <div
            className="bg-primary w-10 h-10 text-cream-foreground flex items-center justify-center rounded-[4px] cursor-pointer"
            onClick={() => setActive(false)}
          >
            <FaXmark className="text-xl" />
          </div>
        </div>

        <div className="mt-6">
          <p>
            At BFIS, we are committed to providing quality education and
            nurturing the future leaders of tomorrow. Feel free to contact us
            with any inquiries or to learn more.
          </p>
        </div>

        <div className="mt-5">
          <div>
            <h4 className="text-xl font-bold text-[#385469]">Contact Info</h4>
            <ul className="mt-5 flex flex-col gap-[15px]">
              <li className="flex items-center">
                <FaPhone className="text-primary-foreground" />{" "}
                <a href="tel:+919066790662" className="ml-2.5">
                  +91-90667 90662
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-primary-foreground" />{" "}
                <a href="mailto:info@bfis.in" className="ml-2.5">
                  info@bfis.in
                </a>
              </li>
              <li className="flex items-center">
                <FaLocationDot className="text-primary-foreground" />{" "}
                <span className="ml-2.5">
                  Sheikhpura New Chandigarh, Kurali-Siswan Road, Dist. S.A.S
                  Nagar, Mohali, Pin: 140110
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-5">
            <Button asChild className="text-cream-foreground w-full">
              <Link to={"/contact-us"}>
                Get A Quote <FaArrowRight />
              </Link>
            </Button>
          </div>

          <SocalIcons
            prentClass={"mt-6"}
            className={
              "w-11 h-11 text-muted-foreground bg-background hover:text-cream-foreground"
            }
          />
        </div>
      </nav>
    </div>
  );
};

// Add PropTypes validation for props
DesktopSidebar.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
};

export default DesktopSidebar;
