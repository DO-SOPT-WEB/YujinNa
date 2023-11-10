import React from 'react';
import styled from 'styled-components';
import { GotoHomeBtn } from './Design';
import { temporaryAnswer } from './NonRandom/QuestionList';

const Header = ({isHome, setIsHome, setIsStarted, setCategory}) => {
  const onClickHomeBtn=()=>{
    setIsStarted(false);
    setIsHome(true);
    setCategory(-1);

    temporaryAnswer.map((eachQ,qIdx) => temporaryAnswer[qIdx]=eachQ.map(() => false));
  }
  return (
    <Container>
      여행지 추천
      {isHome||<GotoHomeBtn onClick={onClickHomeBtn}>처음으로</GotoHomeBtn>}
    </Container>
  );
};

export default Header;

const Container=styled.div`
  padding: 1rem;
  background-color: pink;

`