import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import FirstImg from '../../../assets/crousel/crousel-img4.jpg'
import SecondImg from '../../../assets/crousel/crousel-img7.jpg'
import ThirdImg from '../../../assets/crousel/crousel-img9.jpg'
import styled from 'styled-components'

const StyledCrousel = styled(Carousel)`
  img {
    height: 520px;
  }
`

function MainCarousel() {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <StyledCrousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={FirstImg} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={SecondImg} alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={ThirdImg} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </StyledCrousel>
  )
}

export default MainCarousel
