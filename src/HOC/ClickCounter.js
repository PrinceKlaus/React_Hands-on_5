import React from 'react'
import Hoc from './Hoc'
function ClickCounter(props) {

    
  return (
    
 <div className="clickCounter">
    <div>ClickCounter:{props.value}</div>
    <button onClick={props.func}>ClickCounter</button>   
 </div>
  )
}

export default Hoc(ClickCounter)