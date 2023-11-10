import React, { useEffect, useState } from 'react';

const Random = () => {
    const [time,setTime]=useState(3);
    useEffect(()=>{
        time>0&&setTimeout(()=>setTime(time-1),1000);
    },[time]);
    return (
        <div>
            {time>0?(
                time
            ):(
                <>결과</>
            )}
        </div>
    );
};

export default Random;