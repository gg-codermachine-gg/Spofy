import React from 'react'

interface ButtonProps{
    param: String,
}

export const Buttons: React.FC<ButtonProps> = ({param}) => {
  return (
    <button className='w-72 h-[66px] bg-lime-500 rounded-xl text-black font-medium text-[1.23rem]'>{param}</button>
  )
}       