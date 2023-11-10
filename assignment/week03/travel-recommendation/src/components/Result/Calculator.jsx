import React, { useEffect, useMemo, useState } from 'react';
import { ResultContry, ResutlImg } from '../../styles/Design';
import { ContryList } from './ContryList';

const Calculator = ({calculator}) => {
    // 결과는 프랑스, 스위스, 미국, 캐나다, 태국, 일본
    const score=[0,0,0,0,0,0];

    const findResult= ()=>{
        // Q: 어느 지역 ?
        switch(calculator[0]){
            case 0:
                score[0]+=1;
                score[1]+=1;
                break;
            case 1:
                score[2]+=1;
                score[3]+=1;
                break;

            case 2:
                score[4]+=1;
                score[5]+=1;
                break;
        }

        // Q: 어느 컨셉 ?
        switch(calculator[1]){
            case 0:
                score[1]+=1;
                score[3]+=1;
                score[5]+=1;
                break;
            case 1:
                score[0]+=1;
                score[2]+=1;
                score[4]+=1;
                break;
        }

        // Q: 누구랑 ?
        switch(calculator[2]){
            case 0:
                score[1]+=1;
                score[5]+=1;
                break;
            case 1:
                score[3]+=1;
                score[4]+=1;
                break;

            case 2:
                score[0]+=1;
                score[2]+=1;
                break;
        }
        return ContryList[score.indexOf(Math.max(...score))];
    }

    const calculateResult= useMemo(findResult,[calculator]);
    
    return (
        <> {calculateResult && 
                <>
                    <ResutlImg src={`/images/${calculateResult}.jpg`}/>
                    <ResultContry>{calculateResult}</ResultContry>
                </>
                
            }
        </>
    );
};

export default Calculator;