// Functional Comp with Anonymous Fn 

import React from "react";
import Menu from "./Menu";

const Footer = function( props){

  const getCopyrightYear = () =>{
    return 2022;
  }

  const developerName = 'Arun'; 

  return(
    <footer>
      <hr />
      <Menu />
      <p className="greenText">Copyright { getCopyrightYear() }  | {developerName}</p>
      <p className="para">Happily made in March 2022</p>
    </footer>
  )
}

export default Footer;