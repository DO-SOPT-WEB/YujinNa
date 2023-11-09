import React, { useEffect, useState } from 'react';
import { Btn, BtnBox, Description, MainBox } from '../Design';
import Calculator from './Calculator';

const Result = ({calculator}) => {
    const onRetryClick=()=>{

    }
    return (
        <>
            <Description>추천하는 여행지는 바로!!</Description>
            <MainBox>
                <Calculator calculator={calculator} />
            </MainBox>     
            <BtnBox>
                <Btn onClick={onRetryClick}>다시하기</Btn>
            </BtnBox>
        </>
    );
};

export default Result;