import { useState } from 'react'
import Header from './components/Header'
import styled from 'styled-components'
import BeforeStart from './components/BeforeStart';
import AfterStart from './components/AfterStart';
function App() {
  const [category,setCategory]=useState(-1);
  const [isStarted,setIsStarted]=useState(false);
  const [isHome,setIsHome]=useState(true);

  return (
    <>
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
    </>
    
  )
}

export default App

const Container=styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 35rem;
  justify-content: center;
  align-items: center;
  background-color: pink;
  margin: 1.5rem 3rem;
`
