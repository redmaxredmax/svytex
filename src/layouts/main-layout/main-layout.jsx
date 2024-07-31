import React from 'react'
import { Header } from './header'
import { Footer } from './footer'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
    return (
        <div className='flex flex-col h-screen justify-between' >
            <div>
                <header>
                    <Header />
                </header>
                <main className='pt-5'>
                    <Outlet />
                </main>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}
