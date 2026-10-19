import { useState } from 'react'
import './App.css'
import heroImage from 'C:/Users/HomePC/Desktop/My Projects/Bash-Wallet/Beta Wallet/src/assets/creditcard_background.jpg'
import Login from './login'
import Signup from './signup'

function App() {
  const [issigninOpen, setIssigninOpen] =useState(false)
  const [isLoginOpen, setIsLoginOpen] =useState(false)
  

  return (
    <>
      <header className='relative border-b border-slate-100 bg-slate-900 py-7 px-3 flex justify-between backdrop-blur-md absolute w-full'>
        <div className='text-slate-300 text-2xl font-bold'>
          <div className='flex gap-6 pl-4'>
            
            <div>
              <h4 className='space-x-2'>
                <i className='fa-solid fa-money-check-dollar fa-beat text-orange-500 text-3xl'></i>
                <span>Beta-Wallet</span>
              </h4>
            </div>
          </div>

        </div>
        <div className='flex space-x-6 text-black'>
          <div>
            <a href="" className='text-orange-500 hover:text-orange-800'>Services</a>
          </div>
          <div>
            <a href="" className='text-orange-500 hover:text-orange-800'>How It works</a>
          </div>
          <div>
            <a href="" className='text-orange-500 hover:text-orange-800'>Benefits</a>
          </div>
          <div>
            <a href="" className='text-orange-500 hover:text-orange-800'>Pricing</a>
          </div>
        </div>
        <div className='space-x-3 text-slate-300'>
          <button className='px-4 py-2 border border-orange-500 rounded-xl hover:bg-orange-600 font-bold' onClick={() => setIsLoginOpen(true)}>LOG IN</button>
          <button className='px-4 py-2 bg-orange-500 rounded-xl hover:bg-orange-600 font-bold' onClick={() => setIssigninOpen(true)}>SIGN UP</button>
        </div>

      </header>
      <main class="bg-transparent px-4 py-8 ml-10 mt-[20px]
      flex justify-center items-center pt-27">
        <div>
          <div className='grid grid-cols-2 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2'>
            <div>
              <h1 className='text-4xl font-bold text-white'>
                Fast and Simple Digital Payment Solution
              </h1>
              <p className='mt-3 text-slate-400 text-sm '>
                Many credit cards are lost by the users or stolen. This card can still be used by others. This app
                can provide you with a card and necessary information. This are single used virtual cards
              </p>
              <div className='mt-4 space-x-4'>
                <button className='p-4 rounded-2xl border border-orange-500 text-slate-200'>Get it now</button>
                <button className='p-4 rounded-2xl bg-orange-500 text-slate-200'>Download App</button>
              </div>
            </div>
            <div className='w-full h-full bg-no-repeat bg-cover bg-center object-contain mix-blend-overlay opacity-80 [mask-image:radial-gradient(circle,blue_0%,transparent_100%)] [-webkit-mask-image:radial-gradient(circle,black_50%,transparent_100%)]' style={{backgroundImage: `url(${heroImage})`}}>

            </div>
            
          </div>
          <div className='flex justify-between mt-16'>
              <div className='grid grid-cols-2 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-2'>
                <div>
                  <h3 className='text-lg text-orange-500 font-extrabold'>01</h3>
                  <h4 className='font-bold text-orange-500'>Financial Transaction</h4>
                  <p className='text-slate-400 text-sm'>Manage everything from the latter app or website</p>
                </div>
                <div>
                  <h3 className='text-lg text-orange-500 font-extrabold'>02</h3>
                  <h4 className='font-bold text-orange-500'>Easy to Use System</h4>
                  <p className='text-slate-400 text-sm'>Each card can have its own unique card holder name balance</p>
                </div>
              </div>

              <div>
                <a href="" className='bg-orange-500 py-3 px-4 rounded-full'>
                  <i className='fa-solid fa-plus text-white transition-transform duration-300 hover:scale-150'></i>
                </a>
                <div></div>
              </div>
            </div>
          
        </div>
        <Signup 
          isOpen = {issigninOpen}
          onClose ={() => setIssigninOpen(false)}
        />
        <Login 
          isOpen = {isLoginOpen}
          onClose ={() => setIsLoginOpen(false)}
        />
      </main>
    </>
  )
}

export default App