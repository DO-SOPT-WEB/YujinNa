import { useState } from 'react'
import Header from './components/Header'
import styled from 'styled-components'
function App() {

  return (
    <MainBody>
      <Header/>

    </MainBody>
  )
}

export default App

const MainBody=styled.div`
  text-align: center;
  margin:0 auto;

`