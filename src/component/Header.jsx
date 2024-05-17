import { Link } from "react-router-dom";
import logo from "../assets/todo-logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="header-right">
        <Link to="/">Home</Link>
        <Link to="/information">Information</Link>
        <Link to="/todoPage">Todo Page</Link>
      </div>
    </header>
  );
};

export default Header;
