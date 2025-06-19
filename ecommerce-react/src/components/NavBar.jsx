import "./NavBar.css";
import ecommerceLogo from "../assets/ecommerceLogo.png"
import CartWidget from "./CartWidget";

const NavBar = () => {
    

    return(
        <div className="navbar">
            <h1>NavBar</h1>
            <img className="logo" src={ecommerceLogo} alt="" />
            
            <ul className="categories">
                <li>Electronica</li>
                <li>Ropa</li>
                <li>Hogar</li>
                <li>Autos</li>
            </ul>
            <CartWidget/>

        </div>
    )

}

export default NavBar;