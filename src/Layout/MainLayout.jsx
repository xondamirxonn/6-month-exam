import React from 'react'
import { Header } from './Header/Header'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer/Footer'

export const MainLayout = () => {
  return (
    <div className="">
      <header>
        <Header />
      </header>

      <main className="pt-[6%] min-h-[45.2vh]">
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
