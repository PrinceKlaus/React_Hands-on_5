import React, { useState } from 'react'
import '../App.css'
function Hoc(WrapperComponent) {
const HocFunc=(props)=>{
    const [count,setCount] = useState(0);
    const increment=()=>{
        setCount(count+1);
    }
    console.log(props)
return(
    <>

    <WrapperComponent value={count} func={increment} />
    
    </>
);
}
return HocFunc;
}

export default Hoc