import React, { useState } from "react";
import styles from "./Experience.module.scss";

export default function Experience() {
      const listProduct = [
            {
                  name: "Lego friend",
                  type: "Advertise website",
                  tech: "Webpack, html, scss, animate.css, Typescript",
                  size: 1,
                  role: "Maintainer frontend developer"
            },
            {
                  name: "Lego Super Mario",
                  type: "Advertise website",
                  tech: "Webpack, html, scss, animate.css, Typescript",
                  size: 1,
                  role: "Maintainer frontend developer"
            },
            {
                  name: "Highlands coffee",
                  type: "E-commerce website",
                  tech: "Nextjs,Html, Scss, Typescript, Redux Toolkit, Gsap, animate.css, boostrap, lotie",
                  size: 8,
                  role: "Maintainer frontend developer"
            }
      ]

      const [number, setNumber ]= useState<any>(null)

      const handleShow = (id: number) => {
            setNumber(id)
      }



  return (
    <div className={styles.experience} id="experience">
      <h2>Over 1 year experience.</h2>
              <ul className={styles.sessions}>
                    {
                          listProduct.map((item: any, index: number) => {
                                return (
                                    <li key={index}>
                                            <div className={styles.times} >{item.name}</div>
                                            <p>{item.type}</p>
                                            <p>Technology used: {item.tech}</p>
                                            {
                                                  index == number ? (
                                                        <>
                                                              <p>Team size: {item.size}</p>
                                                              <p>Role in project: {item.role}</p>
                                                              <div className={styles.button_show} onClick={() => setNumber(null)}>Hide</div>
                                                        </>
                                                  ) : <>
                                            <div className={styles.button_show} onClick={()=> handleShow(index)}>show more</div>
                                                  </>
                                            }
                                  </li>
                                )
                          })
                    }
      </ul>
    </div>
  );
}
