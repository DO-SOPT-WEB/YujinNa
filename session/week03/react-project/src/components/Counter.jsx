import React, { useState } from 'react';
import styled from 'styled-components';

const Counter = ({name}) => {
    const [number, setNumber] =useState(0);

    const increaseNum=()=>{
        setNumber(number+1);
    }
    const decreaseNum=()=>{
        setNumber(number-1);
    }
    return (
        <Container>
            <h1>{name}의 계산기</h1>
            <p>{number}</p>
            <ButtonContainer>
                <CalcButton onClick={increaseNum} type='button'>+1</CalcButton>
                <CalcButton onClick={decreaseNum} type='button'>-1</CalcButton>
            </ButtonContainer>
        </Container>
    );
};

export default Counter;

const Container =styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;
`;

const ButtonContainer = styled.div`
    display: flex;;
    gap: 2px;
`;

const CalcButton = styled.button`
    background-color: pink;
    cursor: pointer;

    &:hover{
        background-color: blue;
        color: white;
    }

`;