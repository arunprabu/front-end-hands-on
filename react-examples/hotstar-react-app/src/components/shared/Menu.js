// Functional Comp with Arrow Fn 
import React from "react";
import MenuItem from "./MenuItem";

const Menu = () => {
  
  const primaryMenus = [
    { name: 'Home', url: '/'},
    { name: 'Users', url: '/users'},
    { name: 'About Hooks', url: '/about'},
    { name: 'HOC and Error Boundary', url: '/hoc'},
    { name: 'Products', url: '/products'},
    { name: 'Signin', url: '/signin'},
    { name: 'Employees', url: '/employees'}
  ];
  
  let menus = null; 
  menus = primaryMenus.map( (primaryMenu, index) => {
    return(
      <MenuItem {...primaryMenu} key={index}/>
    )
  })

  return(
    <ul className="navbar-nav me-auto mb-2 mb-md-0">
      {menus}
    </ul>
  )
}

export default Menu;