import React, { useEffect, useState } from 'react';
import { BtnBox, MainBox,Description,AnswerBox, Btn } from '../Design';
import { questionList } from './QuestionList';

const NonRandom = ({id,setId, setIsStarted}) => {
    const [clickedList,setClickedList]=useState([false,false,false]);

    useEffect(()=>{
        setClickedList([false,false,false]);
    },[id]);

    const onAnswerClick=(idx)=>{
        const newClickedList=clickedList.map((each,i)=> idx===i ? true : false);
        setClickedList(newClickedList);
    }

    const onNextClick=()=>{
        setId(id+1);
    }
    const onBackClick=()=>{
        id-1>=0
            ? setId(id-1)
            : setIsStarted(false)        
    }
    return (
        <>
            <Description>{questionList[id].question}</Description>
            <MainBox>
                {questionList[id].answer.map((each, idx)=>
                    <AnswerBox 
                        key={idx} 
                        onClick={(e)=>onAnswerClick(idx,e)}
                        btncolor={clickedList[idx]}
                        >
                        {each}
                    </AnswerBox>    
                )}
            </MainBox>     
            <BtnBox>
                <Btn onClick={onBackClick}>이전으로</Btn>
                {clickedList.some((element)=> element==true)
                    ? <Btn onClick={onNextClick}>다음으로</Btn> 
                    : <Btn disabled>다음으로</Btn>}
            </BtnBox>
    </>
        
    );
};

export default NonRandom;

