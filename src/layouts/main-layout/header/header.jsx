import React from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from "../../../assets/icons/menu-icon.svg"
export const Header = () => {
  return (
    <div className='container flex justify-between items-center mx-auto'>
      <a href="/">
        <h2 className='font-bold text-lg text-blue-900'>SVYTEX</h2>
      </a>
      <>
        <div className='md:hidden'>
          <img src={MenuIcon} alt="icon" />
        </div>
        <ul className='hidden md:flex gap-4 lg:gap-5 lg:px-[70px] bg-white px-10 py-4 rounded-b-3xl'>
          <li className='text-black font-medium hover:text-blue-900  text-sm md:font-bold lg:font-semibold lg:text-base'>
            <Link to="/">Главное</Link>
          </li>
          <li className='text-black font-medium hover:text-blue-900 text-sm md:font-bold lg:font-semibold lg:text-base'>
            <Link to="/instructions">Инструкция</Link>
          </li>
          <li className='text-black font-medium hover:text-blue-900 text-sm md:font-bold lg:font-semibold lg:text-base'>
            <Link to="/price">Прайс</Link>
          </li>
          <li className='text-black font-medium hover:text-blue-900 text-sm md:font-bold lg:font-semibold lg:text-base'>
            <Link to="/start">Как начать</Link>
          </li>
        </ul>
        <div className='hidden md:block'>
          <button className='py-2 px-3 rounded-xl font-semibold text-white cursor-pointer hover:bg-white hover:border-btn-blue hover:border-2 hover:text-btn-blue bg-btn-blue'>Присоедениться</button>
        </div>
      </>
    </div>
  )
}
