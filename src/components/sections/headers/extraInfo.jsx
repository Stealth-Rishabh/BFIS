import SocalIcons from "@/components/ui/socalIcons";
import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";

const ExtraInfo = () => {
  return (
    <div className="mt-5">
      <div>
        <h4 className="text-xl font-bold text-[#385469]">Contact Info</h4>
        <ul className="mt-5 flex flex-col gap-[15px]">
          <li className="flex items-center gap-2">
            <FaPhone className="text-primary-foreground" />{" "}
            <a href="tel:+919066790662" className="ml-2.5">
              +91-90667 90662
            </a>
          </li>
          <li className="flex items-center gap-2">
            <FaEnvelope className="text-primary-foreground" />{" "}
            <a href="mailto:info@bfis.in" className="ml-2.5">
              info@bfis.in
            </a>
          </li>
          <li className="flex items-center gap-2">
            <FaLocationDot className="text-primary-foreground" />{" "}
            <span className="ml-2.5">
              Sheikhpura New Chandigarh, Kurali-Siswan Road, Dist. S.A.S Nagar,
              Mohali, Pin: 140110
            </span>
          </li>
        </ul>
      </div>
      <div className="mt-5 mb-6">
        <a
          href="/contact-us"
          className="bg-primary text-cream-foreground rounded-md sm:flex hidden items-center gap-2.5  btn after:bg-green"
        >
          Get A Quote{" "}
          <span>
            <i className="fa-solid fa-arrow-right"></i>
          </span>{" "}
        </a>
      </div>
      <SocalIcons className={"w-11 h-11 bg-white text-muted-foreground"} />
    </div>
  );
};

export default ExtraInfo;
