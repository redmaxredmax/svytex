import React from 'react'

export const Home = () => {
    return (
        <div className='container pt-5'>
            <div className='lg:w-[800px] lg:pt-[100px]'>
                <h1 className='font-semibold mb-1 leading-7 text-text-blue text-center text-3xl md:font-bold md:text-5xl md:leading-11 lg:text-6xl lg:text-start ' data-aos="fade-left" data-aos-duration="1000">
                    Инновационный <br /><span className='bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent  '>крипто</span> <br />Кошёлок <span className='bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent '>SVYTEX</span>
                </h1>
                <p className='text-xs leading-4 text-center lg:text-start lg:text-base' data-aos="fade-up" data-aos-duration="2000">SVYTEX WALLET - новая система выводов и пополнений с минимальными комиссиями</p>
            </div>
        </div>
    )
}
