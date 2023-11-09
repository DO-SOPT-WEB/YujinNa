import React, { useState } from 'react';
import Random from './Random/Random';
import NonRandom from './NonRandom/NonRandom';

const AfterStart = ({category, setIsStarted}) => {
    const [id,setId]=useState(0);

    return (
        <>
            {category==='랜덤 추천'?(
                <Random/>
            ):(
                <NonRandom id={id} setId={setId} setIsStarted={setIsStarted}/>
            )}
        </>
    );
};

export default AfterStart;