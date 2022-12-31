import styled from 'styled-components'

const ContentText = styled.div`
  padding: 17px;
  font-size: 16px;
`
const ContentDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  height: 80px;
  display: flex;
  align-items: center;
  background-color: #002361;
  color: white;
`

function Footer({ children }) {
  return (
    <ContentDiv>
      <div>
        <ContentText>{children}</ContentText>
      </div>
    </ContentDiv>
  )
}

export default Footer
