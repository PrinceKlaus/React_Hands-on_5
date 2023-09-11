import React from 'react'
import Hoc from './Hoc'
function HoverCounter(props) {
  return (
    <div className="HoverCounter">

      <div>HoverCounter: {props.value} </div>
     
       <button onMouseOver={props.func}>hover Counter</button>
      
    </div>

  )
}
const newComponent=Hoc(HoverCounter)
export default newComponent;