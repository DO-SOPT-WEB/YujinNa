import React, { useEffect, useState } from 'react';
import Result from '../Result/Result';
import { ContryList } from '../Result/ContryList';
import { CountDown } from '../Design';

const Random = ({setIsStarted}) => {
    const [time,setTime]=useState(3);
    const [randomResult,setRandomResult]=useState(0);
    useEffect(()=>{
        time>0&&setTimeout(()=>setTime(time-1),1000);
    },[time]);
    useEffect(()=>{
        setRandomResult(ContryList[Math.floor(Math.random()*ContryList.length)]);
    },[]);
    return (
        <>
            {time>0?(
                <CountDown>{time}</CountDown>
            ):(
                <Result isRandom={true} randomResult={randomResult} setIsStarted={setIsStarted}/>
            )}
        </>
    );
};

export default Random;