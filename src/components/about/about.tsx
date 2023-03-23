

import React from 'react'
import Image from "next/image";
import styles from './About.module.scss'
import { Col, Row } from 'react-bootstrap';
function About() {

  return (
        <section className={styles.about} id="about">
              <Row>
                    <Col md={6} className={styles.img_container}>
                          <Image className={styles.img} src="/assets/images/avta.jpg" alt={""} width={400} height={500}/>
                    </Col>
                    <Col md={6} className={styles.decription}>
                          <h2>About me</h2>
                          <p className={styles.text}>
                          A highly motivated and enthusiastic web developer seeking a challenging role in a dynamic environment where I can utilize my skills and knowledge to contribute to the growth of the organization. 
                          </p>
                          <div className={styles.box}>Download CV</div>
                    </Col>
              </Row>
    </section>
  )
}

export default About
