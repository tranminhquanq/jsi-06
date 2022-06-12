import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home page</Link>
        </li>
        <li>
          <Link to="/student-form">Student Form</Link>
        </li>
        <li>
          <Link to="/users">User</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
