import React from 'react'
import { useStateContext } from '../contexts/ContextProvider';

const Header = ({category,title}) => {

  const {screenSize} = useStateContext(); 
  return (
    <div className={`${screenSize <= 900 ? 'mt-10' : 'mb-10'}`}>
      <p className='text-gray-400'>
        {category}
      </p>
      <p className='text-3xl font-extrabold tracking-tight text-slate-900'>{title}</p>
    </div>
  )
}

export default Header