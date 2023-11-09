import React, { useState } from 'react';
import { BtnBox, MainBox,Description,AnswerBox, Btn } from '../Design';
import { questionList } from './QuestionList';

const NonRandom = ({id}) => {
    const [clickedList,setClickedList]=useState([false,false,false]);
    const onAnswerClick=(idx)=>{
        const newClickedList=clickedList.map((each,i)=>
            idx===i? true:false
        )
        setClickedList(newClickedList);
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
                <Btn>이전으로</Btn>
                {clickedList.some((element)=> element==true)
                    ? <Btn>다음으로</Btn> : <Btn disabled>다음으로</Btn>}
            </BtnBox>
    </>
        
    );
};

export default NonRandom;

