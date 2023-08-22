import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import styles from "./NavBar.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useScrollPosition } from "../Hooks/scrollPosition";


const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });


  const detectDimension = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectDimension);
    windowDimension.width > 990 && setNavBarOpen(false);
    return () => {
      window.removeEventListener("resize", detectDimension);
    };
  }, [windowDimension]);

  const links = [
    {
      id: 1,
      link: "Inicio",
    },
    {
      id: 2,
      link: "Usuarios",
    },
    {
      id: 3,
      link: "Estudios",
    },
    {
      id: 3,
      link: "Institucional",
    },
  ];

  const scrollPosition = useScrollPosition();

  return (
    <div
      className={
        navBarOpen
          ? styles.navOpen
          : scrollPosition > 0
          ? styles.navOnScroll
          : styles.navBar
      }
    >
      {!navBarOpen &&  <img className={styles.logo} src={require("../assets/Logo.png")} alt="Logo"/>}
      {!navBarOpen && windowDimension.width < 990 ? (
        <AiOutlineMenu
          onClick={() => setNavBarOpen(!navBarOpen)}
          className={styles.logoMenu}
        />
      ) : (
        windowDimension.width < 990 && (
          <AiOutlineClose
            onClick={() => setNavBarOpen(!navBarOpen)}
            className={styles.logoMenuClose}
          />
        )
      )}
      {navBarOpen && (
        <ul className={styles.linksContainer}>
          {links.map(({ id, link }) => (
            <div>
              <Link
                key={id}
                onClick={() => setNavBarOpen(false)}
                to={link}
                smooth
                duration={500}
                className={styles.navLink}
              >
                {link}
              </Link>
            </div>
          ))}
        </ul>
      )}
      {windowDimension.width > 990 && (
        <ul className={styles.linksContainer}>
          {links.map(({ link }) => (
            <div>
              <Link
                onClick={() => setNavBarOpen(false)}
                to={link}
                smooth
                duration={500}
                className={styles.navLink}
              >
                {link}
              </Link>
              <div className={styles.border}></div>
            </div>
          ))}
          <Link
            onClick={() => setNavBarOpen(false)}
            to="Contacto"
            smooth
            duration={500}
            className={styles.contactLink}
          >
            Contacto
          </Link>
        </ul>
      )}
    </div>
  );
};

export default NavBar;