import React from 'react'
import styles from './Technology.module.scss'
import { Col, Row } from 'react-bootstrap';
import Image from "next/image";

import { useLottie } from 'lottie-react';
import graduating from "../../../public/assets/animates/code.json";
export default function Technology() {
      const options = {
            animationData: graduating,
            loop: true
      };
      const { View } = useLottie(options);
      return (
            
        <div className={styles.tech}  id="skill">
              <h2>Skills.</h2>
        <Row>
              <Col md={6}>
              <div className={styles.contents}>
                    <p>With a diverse range of skills, including expertise in Html, Js,scss ReactJS and Angular, I am a versatile software engineer with the ability to tackle a wide variety of projects and challenges.</p>
                              <div className={styles.tech_list}>
                              <Image src="/assets/images/html-5.png" alt={""} width={50} height={50} />
                              <Image src="/assets/images/css.png" alt={""} width={50} height={50} />
                              <Image src="/assets/images/js.png" alt={""} width={50} height={50} />
                              <Image src="/assets/images/typescript.png" alt={""} width={50} height={50} />
                              <Image src="/assets/images/figma-1.svg" alt={""} width={50} height={50} />
                              <Image src="/assets/images/react-2.svg" alt={""} width={50} height={50} />
                              <Image src="/assets/images/next-js.svg" alt={""} width={50} height={50} />
                              </div>
                              </div>
              </Col>
                        <Col md={6}>
                              {View}
              </Col>
    </Row>        
        </div>
  )
}
