import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <ul className="nav nav-pills pull-right">
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <Link to="/">
        <h3 className="text-muted">HELLO SHOP</h3>
      </Link>
    </div>
  );
};

export default Header;
