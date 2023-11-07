import { useState } from 'react'
import Header from './components/Header'
import styled from 'styled-components'
import Description from './components/Description'
function App() {

  return (
    <>
      <Header/>
      <Container>
        <Description/>
        <MainBox>
          ㅎㅎ
        </MainBox>
        <BtnBox>
          버튼들 위치
        </BtnBox>
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

const MainBox=styled.div`
  position: absolute;
  top: 2rem;
  background-color: white;
  height: 20rem;
  margin: 3rem;
  padding: 1rem;
`;

const BtnBox=styled.div`
  position: absolute;
  background-color: white;
  top: 30rem;
`;

