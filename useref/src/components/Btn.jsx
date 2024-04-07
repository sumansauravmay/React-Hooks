import React, {useRef, useState } from 'react'

const Btn = () => {
    const [count,setCount]=useState(0);
    const btnref=useRef();


const handleClick=()=>{
setCount(count+1);
}


  return (
    <div>
        <h5>{count}</h5>
      <button ref={btnref} onClick={handleClick}>Add</button>
    </div>
  )
}

export default Btn
