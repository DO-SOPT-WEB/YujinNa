import { useState } from 'react'
import Header from './components/Header'
import styled from 'styled-components'
import Description from './components/Description'
import BeforeStart from './components/BeforeStart';
import AfterStart from './components/AfterStart';
function App() {
  const [category,setCategory]=useState(-1);
  const [isStarted,setIsStarted]=useState(false);

  return (
    <>
      <Header/>
      <Container>
        {isStarted?(
          <AfterStart/>
        ):(
          <BeforeStart 
            setIsStarted={setIsStarted}
            category={category}
            setCategory={setCategory}
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
