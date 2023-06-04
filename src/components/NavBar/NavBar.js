import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-container">
        <nav className="navbar">
            <h1 className="navbar-logo">E-CHOKO</h1>
            <Link className="carrito" to={"/cart"}>🛒</Link>
        </nav>

    </div>
  )
}

export default NavBar