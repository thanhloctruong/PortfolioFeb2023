

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
                                Aim to become full stack developer, have more than 1 year of experience working as a frontend developer with ReactJS and AngularJS.
                                <br /> Assisted in the development and maintenance of various websites.
                                <br />Contributed to the code base and implemented new features.
                                <br />Gained experience in working with a team and collaborating with stakeholders.
                                <br />Have experience in front-end deployment.
                          </p>
                          <div className={styles.box}><a href="/files/Frontend-TruongThanhLoc.pdf" target="_blank">View CV</a></div>
                    </Col>
              </Row>
    </section>
  )
}

export default About
