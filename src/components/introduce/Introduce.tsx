import React from "react";
import Image from "next/image";
import styles from "./introduce.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Introduce() {
  return (
    <section className={styles.introduce} id="home">
      <div className={styles.introduce_info}>
        <svg
          height="100"
          stroke="#FFFFFF"
          stroke-width="2"
          className={styles.text_line}
          width="100%">
          <text x="0" dominant-baseline="start" text-anchor="start" y="50%">
            Trương Thành Lộc (ACan Trương)
          </text>
        </svg>
        <div className={styles.typewriter}>I'm Front end Developer </div>
        <ul className={styles.social_list}>
          <li className={styles.item}>
            <a href="http://">
              <Image src="/assets/images/github.png" alt={""} width={50} height={50} />
            </a>
          </li>
          <li className={styles.item}>
            <a href="http://">
                                      <Image src="/assets/images/linkedin.png" alt={""} width={50} height={50} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Introduce;
