import React from 'react'
import styles from './Footer.module.scss'
import Image from "next/image";

export default function Footer() {

      const year = 2023;
  return (
        <footer className={styles.footer}>
              <h2>Trương Thành Lộc</h2>
              <div>
                    
              <a href="https://github.com/thanhloctruong" target="_blank" rel="noreferrer">
              <Image src="/assets/images/github.png" alt={""} width={50} height={50} />
            </a>
            <a href="https://www.linkedin.com/in/acantruong" target="_blank" rel="noreferrer">
                                      <Image src="/assets/images/linkedin.png" alt={""} width={50} height={50} />
              </a>
              </div>
              <h4>All right reserved &copy; {year}</h4>
    </footer>
  )
}
