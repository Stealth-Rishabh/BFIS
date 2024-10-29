import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";
import SocalIcons from "@/components/ui/socalIcons";

const TopHeader = () => {
  return (
    <div id="top-header" className="bg-destructive sm:block hidden">
      <div className="container">
        <div className="flex lg:flex-row flex-col justify-between items-center gap-2 py-[13px]">
          <div>
            <ul className="flex gap-7.5">
              {/* Phone number with tel link */}
              <li className="text-cream-foreground flex items-center gap-4">
                <FaPhone /> <a href="tel:+919066790662">+91-90667 90662</a>
              </li>

              {/* Email with mailto link */}
              <li className="text-cream-foreground flex items-center gap-4">
                <FaEnvelope /> <a href="mailto:info@bfis.in">info@bfis.in</a>
              </li>

              {/* Location with Google Maps link */}
              <li className="text-cream-foreground flex items-center gap-4">
                <FaLocationDot />{" "}
                <a
                  href="https://www.google.com/maps/place/Sheikhpura+New+Chandigarh,+Kurali-Siswan+Road,+Mohali,+Pin:140110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sheikhpura New Chandigarh, Kurali-Siswan Road, Dist. S.A.S
                  Nagar, Mohali, Pin: 140110
                </a>
              </li>
            </ul>
          </div>

          <div>
            <SocalIcons className={"text-xs"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
