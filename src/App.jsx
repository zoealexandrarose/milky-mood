import { GlobalStyle, ImageContainer, Wrapper } from "./styles"
import Header from './components/Header'
import Footer from './components/Footer'
import ImgBox from'./components/ImgBox'
function App() {

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Footer />
      <Wrapper>
      <ImageContainer>
        <ImgBox />
      </ImageContainer>
      </Wrapper>
    </div>
  )
}

export default App
