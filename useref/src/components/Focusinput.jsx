import React from 'react';
import { useRef } from 'react';

const Focusinput = () => {
    const inputRef=useRef(null);

    const handleClick=()=>{
      inputRef.current.focus();
      }

  return (
    <div>
       <input ref={inputRef}/>
     <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Focusinput
