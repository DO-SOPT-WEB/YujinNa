import React from 'react';
import { Btn, BtnBox, Description, ResultBox, ResultContry, ResutlImg } from '../../styles/Design';
import Calculator from './Calculator';
import { temporaryAnswer } from '../NonRandom/QuestionList';

const Result = ({calculator, randomResult, setIsStarted}) => {

    const onRetryClick=()=>{
        setIsStarted(false);
        temporaryAnswer.map((eachQ,qIdx) => temporaryAnswer[qIdx]=eachQ.map(() => false));
    }
    return (
        <>
            <Description>추천하는 여행지는 바로!!</Description>
            <ResultBox>
                {randomResult?(
                    <>
                        <ResutlImg src={`/images/${randomResult}.jpg`}/>
                        <ResultContry>{randomResult}</ResultContry>
                    </>
                ):(
                    <Calculator calculator={calculator} />
                )}
                
            </ResultBox>     
            <BtnBox>
                <Btn onClick={onRetryClick}>다시하기</Btn>
            </BtnBox>
        </>
    );
};

export default Result;