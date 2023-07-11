import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import imgLogo from '../../assets/Logo_ElectroStore.svg';

// Link para la general
// Navlink me permite aplicarle estilos css

const NavBar = () => {
    return (
        <header>
            <nav>
                <Link to="/">
                    <img className="imgLogoTienda" src={imgLogo} alt="ElectroStore" />
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