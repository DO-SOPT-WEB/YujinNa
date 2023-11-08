import { useState } from 'react'
import Header from './components/Header'
import styled from 'styled-components'
import Description from './components/Description'
function App() {
  const categoryList=['취향대로 추천', '랜덤 추천'];
  const [category,setCategory]=useState(-1);
  const onTypeClick=(category)=>{
    category==='취향대로 추천'?setCategory('취향대로 추천'):setCategory('랜덤 추천');
  }
  return (
    <>
      <Header/>
      <Container>
        <Description/>
        <MainBox>
          {category==-1 ? (
            categoryList.map((type,index)=>
            <TypeofRecommand key={index} onClick={(e)=>onTypeClick(type,e)}>
              {type}
            </TypeofRecommand>)
          ):(
            <TypeofRecommand>
              {category}
            </TypeofRecommand>
          )
          
          }
          
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
  /* background-color: white; */
  height: 20rem;
  margin: 3rem;
  padding: 1rem;
  width: 60vw;
  display: flex;
`;

const BtnBox=styled.div`
  position: absolute;
  background-color: white;
  top: 30rem;
`;

const TypeofRecommand=styled.div`
  width: 40em;
  background-color: #ffe0e0;
  margin: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
`;