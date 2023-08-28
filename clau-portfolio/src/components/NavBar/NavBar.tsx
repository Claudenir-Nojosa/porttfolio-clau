import React from "react";
import ThemeButton from "./ThemeButton";
import classes from "./Navbar.module.css";

const NavBar = () => {
  return (
    <>
      <header className={classes.header}>
        <nav className={classes.navigationBar}>
          <ul className={classes.lista}>
            <li className={classes.listaItem}>Clau's Portfolio</li>
            <li className={classes.listaItemLinkedin}>
              <a
                href="https://www.linkedin.com/in/claudenir-nojosa/"
                target="_blank"
              >
                Linkedin
              </a>
            </li>
            <ThemeButton />
          </ul>
        </nav>
      </header>
      <h3 className={classes.paragrafo}>Less talk, show me the code</h3>
    </>
  );
};

export default NavBar;
