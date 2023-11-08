import React, { useState } from 'react';
import { BtnBox, MainBox,Description,AnswerBox } from '../Design';
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
                {/* {category!==-1 &&<Btn onClick={onBtnClick}>Start!</Btn>} */}
            </BtnBox>
    </>
        
    );
};

export default NonRandom;

