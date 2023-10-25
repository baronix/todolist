import { useEffect, useState } from 'react'
import Create from './Create'
import axios from 'axios';
import todoLogo from '../assets/logo.webp'
import {BsCircleFill,BsFillTrashFill, BsFillCheckCircleFill} from 'react-icons/bs'
import Header from './Header';

function Home() {
    const [todos,setTodos] = useState([]);
    useEffect(()=>{
        axios.get('https://us-central1-todo-f73fb.cloudfunctions.net/api/get')
        .then(result => setTodos(result.data))
        .catch(err => console.log(err))
    }, [])

    const handleEdit = (id) => {
        axios.put('https://us-central1-todo-f73fb.cloudfunctions.net/api/update/'+id)
        .then(result => {location.reload()})
        .catch(err => console.log(err))
    }

    const handleDelete = (id) => {
        axios.delete('https://us-central1-todo-f73fb.cloudfunctions.net/api/delete/'+id)
        .then(result => {location.reload()})
        .catch(err => console.log(err))
    }

  return (
    <div className='h-screen max-h-screen overflow-y-scroll  mx-auto flex flex-col items-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black pb-[50px]'>
        {/* <img src={todoLogo} alt="Todo list" className='max-w-[500px] hover:scale-105 duration-100'/> */}
        <Header className="sticky top-0 z-50"/>
        <Create className=''/>
        {
            todos.length=== 0 
            ? 
            <div className='flex'><h2 className='text-white italic font-mono mr-1'>Sem tarefas por realizar</h2>🥳</div> 
            :
            todos.map(todo=>(
                <div key={todo._id} className='max-w-[80%] w-[80%] lg:w-[500px] mt-3  shadow-lg shadow-indigo-500/40'>
                    <div className="flex rounded-md shadow-sm">
                        <button type="button" className="inline-flex flex-shrink-0  justify-center items-center px-4 rounded-l-md  font-semibold bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 text-white transition-all text-sm">
                            {todo.done 
                            ? 
                            <BsFillCheckCircleFill className='text-white text-lg hover:animate-spin'/> 
                            : 
                            <BsCircleFill className='text-white text-lg hover:scale-110 duration-100' onClick={()=> handleEdit(todo._id)}/>}
                        </button>
                        <p className={
                            todo.done 
                            ? 
                            "text-[#00A36C] line-through text-center py-3 px-4 block w-full shadow-sm rounded-0 font-mono text-sm" 
                            : 
                            "text-white text-center py-3 px-4 block w-full  shadow-sm rounded-0 font-mono  text-sm"}>{todo.task}</p>
                        <button className="px-4 inline-flex items-center min-w-fit rounded-r-md text-lg  bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-rose-400">
                            <span><BsFillTrashFill onClick={()=> handleDelete(todo._id)} className='text-white hover:scale-110 duration-100 '/></span>
                        </button>
                    </div>
                </div>   
                
            ))
        }
    </div>
  )
}

export default Home

{/*             <div className='flex border w-[500px] justify-center items-center mb-2 rounded-lg py-3 border-indigo-400 ml-3' onClick={()=> handleEdit(todo._id)} key={todo._id}>
                    {todo.done ? <BsFillCheckCircleFill className='text-white'/> : <BsCircleFill className='text-white hover:scale-110 duration-100'/>}
                    <p className={todo.done ? "line-through text-white" : "text-white"}>{todo.task}</p>
                    <span><BsFillTrashFill onClick={()=> handleDelete(todo._id)} className='text-white hover:scale-110 duration-100 '/></span>
                </div> */}
    