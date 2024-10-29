import {
  FacebookIcon,
  Instagram,
  Youtube,
  MapPin,
  Mail,
  Phone,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function BannerNav() {
  return (
    <div className="bg-red-600 text-gray-200 py-2 px-4 text-sm hidden sm:block">
      <div className="container mx-auto flex justify-end sm:justify-between sm:items-center">
        <div className="hidden md:flex items-center space-x-4">
          <span>Follow us</span>
          <div className="flex space-x-2">
            <Link to="#" className=" text-gray-950 hover:text-gray-200">
              <Instagram size={16} />
            </Link>
            <Link to="#" className="text-gray-950 hover:text-gray-200">
              <FacebookIcon size={16} />
            </Link>
            <Link to="#" className="text-gray-950 hover:text-gray-200">
              <Linkedin size={16} />
            </Link>

            <Link to="#" className="text-gray-950 hover:text-gray-200">
              <Youtube size={16} />
            </Link>
          </div>
        </div>
        <div className="flex justify-end sm:items-center space-x-4">
          <div className="hidden md:flex items-center">
            <MapPin
              size={16}
              className="text-gray-950 hover:text-gray-200 mr-1"
            />
            <span>
              Sheikhpura New Chandigarh, Kurali-Siswan Road, Dist. S.A.S Nagar,
              Mohali, Pin: 140110
            </span>
          </div>
          <div className="flex items-center">
            <Mail
              size={16}
              className="text-gray-950 hover:text-gray-200 mr-1"
            />
            <span>info@bfis.in</span>
          </div>
          <div className="flex items-center">
            <Phone
              size={16}
              className="text-gray-950 hover:text-gray-200 mr-1"
            />
            <span>+91-9066790662</span>
          </div>
        </div>
      </div>
    </div>
  );
}
