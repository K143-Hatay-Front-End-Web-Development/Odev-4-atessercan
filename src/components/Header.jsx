import { Link } from "react-router-dom";
import Logo from "./Logo";
const Header = () => {
  return (
    <div className="header">
      <nav>
        <Link to="/">
          <Logo width="250" height="100" />
        </Link>
      </nav>
    </div>
  );
};

export default Header;
