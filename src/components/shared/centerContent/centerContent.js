import styled from 'styled-components'

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
const ContentDiv = styled.div`
  height: 500px;
  display: flex;
  align-items: center;
`

function CenterContent({ children, title }) {
  return (
    <ContentDiv>
      <div>
        <ContentTitle>{title}</ContentTitle>
        <ContentText>{children}</ContentText>
      </div>
    </ContentDiv>
  )
}

export default CenterContent
