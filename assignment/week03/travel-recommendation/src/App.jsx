import { useState } from 'react'
import Header from './components/Header'
import styled, {ThemeProvider} from 'styled-components'
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import BeforeStart from './components/BeforeStart';
import AfterStart from './components/AfterStart';
function App() {
  const [category,setCategory]=useState(-1);
  const [isStarted,setIsStarted]=useState(false);
  const [isHome,setIsHome]=useState(true);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Header isHome={isHome} setIsStarted={setIsStarted} setIsHome={setIsHome} setCategory={setCategory}/>
      <Container>
        {isStarted?(
          <AfterStart
            setIsStarted={setIsStarted}
            category={category}
          />
        ):(
          <BeforeStart 
            isStarted={isStarted}
            setIsStarted={setIsStarted}
            category={category}
            setCategory={setCategory}
            setIsHome={setIsHome}
          />
        )}
      </Container>
    </ThemeProvider>
    
  )
}

export default App

const Container=styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 50rem;
  justify-content: center;
  align-items: center;
  background-color: pink;
  margin: 5rem 7rem;
`
