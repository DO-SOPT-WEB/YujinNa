import React, { useEffect, useState } from 'react';

const Calculator = ({calculator}) => {
    // 결과는 프랑스, 스위스, 미국, 캐나다, 태국, 일본
    const ContryList=['프랑스', '스위스', '미국', '캐나다', '태국', '일본'];
    
    const score=[0,0,0,0,0,0];
    const [result,setResult]=useState('계산중');
    
    useEffect(()=>{
        findResult();
    },[calculator]);

    const findResult= async ()=>{
        await calculate();
        
        setResult(ContryList[score.indexOf(Math.max(...score))]);
    }

    const  calculate = async () =>{
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
    }
    
    return (
        <> {result!=='계산중' && <>{result}</>}</>
    );
};

export default Calculator;