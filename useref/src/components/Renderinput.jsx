import React, { useRef, useState } from 'react';


const Renderinput = () => {
    const [data,setData]=useState([]);
    const inputRef=useRef();



console.log(data);

const handleAdd=()=>{
    console.log(inputRef.current);
    const newData={
        val:inputRef.current.value,
        id:Date.now()
    }
    setData([...data, newData]);
    
}


  return (
    <div>
      <input ref={inputRef} type='text' placeholder='Enter sth...'/>
      <button onClick={handleAdd}>Add</button>
      
        {
            data.map((el)=>(
                <div key={el.id}>
                    <h1>{el.val}</h1>
                </div>
            ))
        }
    
      
    </div>
  )
}

export default Renderinput
