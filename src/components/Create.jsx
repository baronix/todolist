import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Create = () => {
    const [task,setTask] = useState([])
    const handleAdd = ()=>{
        axios.post('https://todolist-api-k7pz.onrender.com/add', {task: task})
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
    <div className='mb-10 w-[500px] '>
        <input type="text" onKeyDown={handleKeyDown} placeholder='Introduzir nova tarefa' onChange={(e)=> setTask(e.target.value)} className='border border-gray-600 shadow-lg shadow-indigo-500/40 rounded-md p-1 text-center font-mono w-[88%]'/>
        <button type='button' onClick={handleAdd} className='bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 shadow-lg shadow-indigo-500/40 w-[50px] rounded-md p-1 text-[#ffffff] hover:scale-105 duration-500 font-mono ml-2 font-bold '>+</button>
    </div>
  )
}

export default Create