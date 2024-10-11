import { Link } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes
import logo from "@/assets/images/logo.png";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-1">
      <img src={logo} alt="img" />
    </Link>
  );
};

// Add PropTypes validation
Logo.propTypes = {
  className: PropTypes.string, // Validate className as a string
};

export default Logo;
