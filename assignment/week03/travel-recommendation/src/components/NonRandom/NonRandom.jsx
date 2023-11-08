import React, { useState } from 'react';
import { BtnBox, MainBox,Description } from '../Design';
import { questionList } from './QuestionList';

const NonRandom = ({id}) => {
    console.log(questionList[id].question);

    return (
        <>
            <Description>{questionList[id].question}</Description>
            <MainBox>
                {questionList[id].answer.map((each, idx)=>
                    <div key={idx}>
                        {each}
                    </div>    
                )}
            </MainBox>     
            <BtnBox>
                {/* {category!==-1 &&<Btn onClick={onBtnClick}>Start!</Btn>} */}
            </BtnBox>
    </>
        
    );
};

export default NonRandom;