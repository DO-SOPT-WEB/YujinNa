import React from 'react';
import Description from './Description';
import { Btn, BtnBox, MainBox, TypeofRecommand } from './Design';

const BeforeStart = ({setIsStarted, category, setCategory}) => {
    const categoryList=['취향대로 추천', '랜덤 추천'];
    const onTypeClick=(category)=>{
        category==='취향대로 추천'?setCategory('취향대로 추천'):setCategory('랜덤 추천');
    }
    const onBtnClick=()=>{
        setIsStarted(true);
    }

    return (
        <>
            <Description>원하는 추천 방식을 골라줘!</Description>
            <MainBox>
                {category==-1 ? (
                    categoryList.map((type,index)=>
                    <TypeofRecommand key={index} onClick={(e)=>onTypeClick(type,e)}>
                        {type}
                    </TypeofRecommand>)
                ):(
                    <TypeofRecommand>
                        {category}
                    </TypeofRecommand>
                )}
            </MainBox>     
            <BtnBox>
                {category!==-1 &&<Btn onClick={onBtnClick}>Start!</Btn>}
            </BtnBox>
        </>
    );
};

export default BeforeStart;


