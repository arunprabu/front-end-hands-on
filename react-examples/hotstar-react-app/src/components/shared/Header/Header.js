// Custom Component

// imports
import React, { useEffect, useState } from "react";
import Menu from "../Menu";
import './Header.scss';
import appLogo from '../../../assets/images/hotstar-logo.png';
import { Link } from "react-router-dom";
import { CartState } from "../../../context/Context";

// comp defn -- should return jsx 
// Function comp with Named Function
function Header() {

  const {
    cartState: { cart },
    
  } = CartState();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);


  console.log(total);

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand greenText yellowText" to="/">
            <img src={appLogo} alt="Hotstar Logo" width={32} height={32}/> Hotstar App
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <Menu />
            <button className="btn btn-warning">Cart({cart.length})</button>
          </div>
        </div>
      </nav>
    </header>
  );

}

// export 
export default Header;