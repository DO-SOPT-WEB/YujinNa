import React, { useEffect, useState } from 'react';
import { BtnBox, MainBox,Description,AnswerBox, Btn, LevelBox } from '../../styles/Design';
import { questionList, temporaryAnswer } from './QuestionList';

const NonRandom = ({id, setId, setIsStarted, calculator, setCalculator}) => {
    const [nextBtnContent, setNextBtnContent]=useState('다음으로');
    const [loaded,isLoaded]=useState(false);

    useEffect(()=>{
        id>=2 ? setNextBtnContent("결과보기") : setNextBtnContent("다음으로");
        isLoaded(true);
    },[id]);

    const onAnswerClick=(idx)=>{
        const newTemporary = temporaryAnswer[id].map((each,i)=>idx===i ? true : false);
        temporaryAnswer[id]=newTemporary;
        calculator[id]=idx;
        setCalculator([...calculator]);
    }

    const onNextClick=()=>{
        setId(id+1);
    }
    const onBackClick=()=>{
        id-1>=0
            ? setId(id-1) 
            : (setIsStarted(false), setId(0))       
    }
    return (
        <>
            <Description>{questionList[id].question}</Description>
            <LevelBox>
                {id+1} / 3
            </LevelBox>
            <MainBox>
                {loaded && questionList[id].answer.map((each, idx)=>
                    <AnswerBox 
                        key={idx} 
                        onClick={(e)=>onAnswerClick(idx,e)}
                        btncolor={temporaryAnswer[id][idx]}
                        >
                        {each}
                    </AnswerBox>    
                )}
            </MainBox>     
            <BtnBox>
                <Btn onClick={onBackClick}>이전으로</Btn>
                {temporaryAnswer[id].some((element)=> element==true)
                    ? <Btn onClick={onNextClick}>{nextBtnContent}</Btn> 
                    : <Btn disabled>{nextBtnContent}</Btn>}
            </BtnBox>
    </>
        
    );
};

export default NonRandom;

