import React from 'react'
import coin from "../../assets/images/coin.png"

export const Instructions = () => {
  return (
    <div className='container pt-[50px]'>
      <div className='flex lg:justify-between justify-center items-center'>
        <div>
          <h1 className='text-center bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent text-5xl font-semibold mb-2 md:text-7xl md:font-bold lg:text-start lg:text-8xl' data-aos="fade-left" data-aos-duration="1000">AirDrop</h1>
          <p className='text-center text-base font-medium md:text-lg md:font-semibold lg:text-start lg:text-xl' data-aos="fade-up" data-aos-duration="2000">Получите токены SVYT участия в нашем AirDrop. <br />
            <span>Это простой и легкий способ начать использовать SVYTEX WALLET.</span>
          </p>
          </div>
        <div className='hidden lg:block'>
          <img data-aos="flip-right" data-aos-duration="2000" className='w-[400px]' src={coin} alt="coin" />
        </div>
      </div>
    </div>
  )
}
