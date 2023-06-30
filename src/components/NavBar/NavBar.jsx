import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

// Link para la general
// Navlink me permite aplicarle estilos css

const NavBar = () => {
    return (
        <header>
            <nav>
                <Link to="/">
                    <div className="LogoTienda">ElectroStore</div>
                </Link>
                <ul>
                    <li>
                        <NavLink to="categoria/1">
                            <button>Notebooks</button>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="categoria/2">
                            <button>Celulares</button>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="categoria/3">
                            <button>Tablets</button>
                        </NavLink>
                    </li>           
                </ul>

                <CartWidget />
            </nav>
            
        </header>
    )
}

export default NavBar