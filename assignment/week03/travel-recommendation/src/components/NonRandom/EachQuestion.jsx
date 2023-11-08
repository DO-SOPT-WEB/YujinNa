import React from 'react';
import Description from '../Description';
import { BtnBox, MainBox } from '../Design';

const EachQuestion = ({id}) => {
    return (
        <>
            <Description>{id}</Description>
            <MainBox>
                
            </MainBox>     
            <BtnBox>
                {/* {category!==-1 &&<Btn onClick={onBtnClick}>Start!</Btn>} */}
            </BtnBox>
        </>
    );
};

export default EachQuestion;