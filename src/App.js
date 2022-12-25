import './App.scss'
import Header from './components/shared/header/header'
import MainCarousel from './components/shared/carousel/mainCarousel'
import Container from 'react-bootstrap/Container'
import CenterContent from './components/shared/centerContent/centerContent'
import FirstdImg from './assets/crousel/crousel-img7.jpg'
import ImgAndText from './components/shared/imgAndText/imgAndText'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MainCarousel></MainCarousel>
      <Container>
        <CenterContent title={' Muhammad Ayub and Company'}>
          As a melting pot of cultures with some of the most populous
          neighbouring countries, the Pakistan region continues to offer
          exciting business opportunities, both locally and globally. With
          offices in key locations throughout the region, PKF F.R.A.N.T.S firms
          offer local expertise and a unique understanding of local markets,
          backed by the resources of an international network.
        </CenterContent>
        <ImgAndText title={'grow business with us'} img={FirstdImg}>
          As a melting pot of cultures with some of the most populous
          neighbouring countries, the Pakistan region continues to offer
          exciting business opportunities, both locally and globally. With
          offices in key locations throughout the region, PKF F.R.A.N.T.S firms
          offer local expertise and a unique understanding of local markets,
          backed by the resources of an international network.
        </ImgAndText>
      </Container>
    </div>
  )
}

export default App
