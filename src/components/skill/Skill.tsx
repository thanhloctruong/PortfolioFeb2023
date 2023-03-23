import React from 'react'
import Experience from '../experience/Experience'
import Technology from '../technology/Technology'
import styles from './Skill.module.scss'

export default function Skill() {
  return (
        <section className={styles.skill}>
              <Experience/>
            <Technology/>
    </section>
  )
}
