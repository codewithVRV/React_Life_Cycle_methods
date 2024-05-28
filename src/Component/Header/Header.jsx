import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
  return (
    <>
      <div className="header-parent">
        <Link to={"/"}>
            <h2>Home</h2>
        </Link>
        <Link to={"/about"}>
            <h2>About</h2>
        </Link>
        <Link to={"/contact"}>
            <h2>Contact</h2>
        </Link>
        <Link to={"/service"}>
            <h2>Service</h2>
        </Link>
        <Link to={"/summary"}>
            <h2>Summary</h2>
        </Link>
      </div>
    </>
  );
};

export default Header;
