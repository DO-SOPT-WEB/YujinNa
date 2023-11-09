import React, { useState } from 'react';
import Random from './Random/Random';
import NonRandom from './NonRandom/NonRandom';
import Result from './Result';

const AfterStart = ({category, setIsStarted}) => {
    const [id,setId]=useState(0);

    return (
        <>
            {category==='랜덤 추천'?(
                <Random/>
            ):(
                id < 3
                ? <NonRandom id={id} setId={setId} setIsStarted={setIsStarted}/>
                : <Result/>
            )}
        </>
    );
};

export default AfterStart;