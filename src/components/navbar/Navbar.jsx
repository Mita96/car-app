import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch,AiOutlineUser } from "react-icons/ai";
import Logo from "../../images/logo.png"
function Navbar() {
    const [nav, setNav] = useState(false);
  return (
  <header className={styles.navbar}>
    <img src={Logo} alt="Logo"  />
    <nav>
        <ul className={nav ? [styles.menu, styles.active].join(" "): [styles.menu]}>
            <li>
                <a href="/">Learn More</a>
            </li>
            <li>
                <a href="/">Log In</a>
            </li>
            <li>
                <a href="/">Sign Up</a>
            </li>
            <li>
                <AiOutlineSearch style={{marginTop:"8px"}} size={30}></AiOutlineSearch>
            </li>
            <li>
                <AiOutlineUser  style={{marginTop:"8px"}} size={30}></AiOutlineUser>
            </li>
        </ul>
    </nav>
    <div onClick={()=> setNav(!nav)} className={styles.mobile_btn}>
        {nav ?( <AiOutlineClose size={30}></AiOutlineClose>) :( <AiOutlineMenu size={30}></AiOutlineMenu>)}
    </div>
  </header>
  )
}

export default Navbar;

//22 min 58 sec