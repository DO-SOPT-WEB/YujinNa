import React from 'react';
import styled from 'styled-components';

const Description = () => {
    return (
        <Desc>
            원하는 추천 방식을 골라줘!
        </Desc>
    );
};

export default Description;

const Desc=styled.div`
    background-color:ivory;
    padding: 0.5rem 1.5rem;
    position: absolute;
    top: 1rem;

`