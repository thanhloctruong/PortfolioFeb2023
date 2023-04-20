import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import styles from "./Carousel.module.scss"
import Image from 'next/image'


export default function CarouselIMG() {
  return (
<Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/images/carousel1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Highlands coffee</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/images/carousel2.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1>Mario Friend</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/images/carousel3.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1>Lego Supper Mario</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
