import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import { Nav } from "react-bootstrap";

function nav() {
      const [position, setPosition] = useState(0)
      const [visible, setVisible] = useState(true);
      useEffect(() => {
            const handleScroll = () => {
              let moving = window.pageYOffset
              setVisible(position > moving);
              setPosition(moving)
            };
            window.addEventListener("scroll", handleScroll);
            return (() => {
              window.removeEventListener("scroll", handleScroll);
            })
          })
  return (
        <>
              <header className={`${visible ? styles.visible : styles.hidden}  ${styles.home_header}`}>
      <Nav as="ul" className={` ${styles.container_header}`}>
        <Nav.Item as="li">
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="#about">About</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="#experience">Experience</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="#skill">Skill</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav.Item>
      </Nav>        
                 </header>
    </>
  );
}

export default nav;
