import React, { useRef, useState } from 'react';


const Renderupdateinput = () => {
    const [data,setData]=useState("");
    const inputRef=useRef();



console.log(data);

const handleAdd=()=>{
    console.log(inputRef.current);
    let val=inputRef.current.value;
    setData(val);
    
}


  return (
    <div>
      <input ref={inputRef} type='text' placeholder='Enter sth...'/>
      <button onClick={handleAdd}>Add</button>
      
      <h1>{data}</h1>
    
      
    </div>
  )
}

export default Renderupdateinput;
