import React from 'react';
import { Btn, BtnBox, Description, MainBox } from './Design';

const Result = () => {
    const onRetryClick=()=>{

    }
    return (
        <>
            <Description>추천하는 여행지는 바로!!</Description>
            <MainBox>
                
            </MainBox>     
            <BtnBox>
                <Btn onClick={onRetryClick}>다시하기</Btn>
            </BtnBox>
        </>
    );
};

export default Result;