import React from 'react'
import todoLogo from '../assets/logo.webp'

const Header = () => {
  return (
    <div>
        <img src={todoLogo} alt="Todo list" className='max-w-[500px] animate-pulse'/>
    </div>
  )
}

export default Header