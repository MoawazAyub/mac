import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'

const ContentTitle = styled.div`
  justify-content: center;
  display: flex;
  padding: 17px;
  font-size: 26px;
  color: #002361;
`

const ContentText = styled.div`
  color: black;
  font-size: 19px;
`

const ImageDiv = styled.div`
  color: red;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
`

const TextDiv = styled.div`
  color: blue;
`

const MainRow = styled(Row)`
  height: 500px;
`

function ImgAndText({ children, leftImage, img, title }) {
  return (
    <MainRow className="align-middle">
      {leftImage && (
        <Col>
          <ImageDiv img={img}>s</ImageDiv>
        </Col>
      )}

      <Col className="d-flex align-items-center">
        <TextDiv>
          <ContentTitle>{title}</ContentTitle>
          <ContentText>{children}</ContentText>
        </TextDiv>
      </Col>

      {!leftImage && (
        <Col>
          <ImageDiv img={img}>s</ImageDiv>
        </Col>
      )}
    </MainRow>
  )
}

export default ImgAndText
