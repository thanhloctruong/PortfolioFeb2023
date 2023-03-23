import React from "react";
import styles from "./Contact.module.scss";
import Image from "next/image";

import { useLottie } from "lottie-react";
import handShake from "../../../public/assets/animates/shake.json";
import { Col, Row } from "react-bootstrap";
export default function Contact() {
  const options = {
    animationData: handShake,
    loop: true,
  };
  const { View } = useLottie(options);
  return (
    <section className={styles.contact}  id="contact">
      <h2>Contact me.</h2>
      <Row>
        <Col md={6}>{View}</Col>
        <Col md={6}>
          <div className={styles.contents}>
            <a href="tel:0865574573" className={styles.link}>
              <Image
                src="/assets/images/phone.png"
                alt={""}
                width={50}
                height={50}
              />
              0865574573
            </a>
            <a href="mailto:thanhloctruong102@gmail.com" className={styles.link}>
              <Image
                src="/assets/images/mail.png"
                alt={""}
                width={50}
                height={50}
              />
              thanhloctruong102@gmail.com
            </a>
          </div>
        </Col>
      </Row>
    </section>
  );
}
