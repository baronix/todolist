import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Create = () => {
    const [task,setTask] = useState([])
    const handleAdd = ()=>{
        axios.post('https://us-central1-todo-f73fb.cloudfunctions.net/api/add', {task: task})
        .then(result => {location.reload()})
        .catch(err => console.log(err))
    }

      const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // 👇 Get input value
      handleAdd();
    }
  };
    
  return (
    <div className='max-w-[100%] w-[80%] lg:w-[500px] mt-3  shadow-lg shadow-indigo-500/40'>
                    <div className="flex rounded-md shadow-sm">
                        
                        <input type="text" onKeyDown={handleKeyDown} placeholder='Introduzir nova tarefa' onChange={(e)=> setTask(e.target.value)} className='border border-gray-600 shadow-lg shadow-indigo-500/40 rounded-l-md p- text-center font-mono w-[100%] lg:w-[100%]'/>
                        
                        <button onClick={handleAdd} className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 shadow-lg shadow-indigo-500/40 w-[50px] rounded-r-md p-1 text-[#ffffff] hover:scale-105 duration-500 font-mono font-bold ">
                            <span>+</span>
                        </button>
                    </div>
                </div>   
  )
}

export default Create