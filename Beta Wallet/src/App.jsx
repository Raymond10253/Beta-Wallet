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
     
      <header className='absolute sticky top-0 left-0 right-0 z-50 border-b border-slate-100 bg-slate-900 py-7 px-3 flex justify-between backdrop-blur-md absolutel'>
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
            <a href="#services" className='text-orange-500 hover:text-orange-800'>Services</a>
          </div>
          <div>
            <a href="#how_it_works" className='text-orange-500 hover:text-orange-800'>How It works</a>
          </div>
          <div>
            <a href="#benefits" className='text-orange-500 hover:text-orange-800'>Benefits</a>
          </div>
          <div>
            <a href="#pricing" className='text-orange-500 hover:text-orange-800'>Pricing</a>
          </div>
        </div>
        <div className='space-x-3 text-slate-300'>
          <button className='px-4 py-2 border border-orange-500 rounded-xl hover:bg-orange-600' onClick={() => setIsLoginOpen(true)}>LOG IN</button>
          <button className='px-4 py-2 bg-orange-500 rounded-xl hover:bg-orange-600' onClick={() => setIssigninOpen(true)}>SIGN UP</button>
        </div>

      </header>
      <section id='hero' className="bg-transparent px-4
        min-h-screen flex items-center justify-center pb-5 overflow-hidden">
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
      </section>
      <section id='services' className='py-24'>
        <div className='space-y-5'>
          <div className='py-2'>
            <div className='flex items-center justify-center mb-2 text-2xl font-extrabold text-slate-950/70 uppercase'>
              <h4>Services</h4>
            </div>
            <div className='max-w-xs mx-auto py-1 rounded-full bg-orange-600'></div>
          </div>
          <div className='grid grid-cols-4 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4'>
            <div className="p-6 rounded-2xl shadow-xl w-full bg-blue-950/70 z-20 hover:scale-105">
                <h3 className='text-sm text-orange-600 font-bold uppercase mb-2'>Multi-Currency Account / Debit Cards:</h3>
                <p className='text-sm text-slate-300'>Store USD, EUR, KES, or crypto, and spend anywhere with physical or virtual cards.</p>
            </div>
            <div className='p-6 rounded-2xl shadow-xl w-full bg-blue-950/70 z-20 hover:scale-105'>
              <h3 className='text-sm text-orange-600 font-bold uppercase mb-2'>Instant Peer-to-Peer (P2P) Transfers:</h3>
              <p className='text-sm text-slate-300'>Send funds instantly to other wallet users or contacts using phone numbers, QR codes, or wallet tags.</p>
            </div>
            <div className='p-6 rounded-2xl shadow-xl w-full bg-blue-950/70 z-20 hover:scale-105'>
              <h3 className='text-sm text-orange-600 font-bold uppercase mb-2'>Currency & Crypto Exchange:</h3>
              <p className='text-sm text-slate-300'>Swap fiat currencies or exchange tokens with real-time conversion rates.</p>
            </div>
            <div className='p-6 rounded-2xl shadow-xl w-full bg-blue-950/70 z-20 hover:scale-105'>
              <h3 className='text-sm text-orange-600 font-bold uppercase mb-2'>E-Commerce Checkout / API:</h3>
              <p className='text-sm text-slate-300'>One-tap online checkout for online merchants.</p>
            </div>
          </div>
        </div>
      </section>
      <section id='how_it_works' className='py-24 px-4'>
        <div className='space-y-5'>
          <div className='py-2'>
            <div className='flex items-center justify-center mb-2 text-2xl font-extrabold text-slate-950/70 uppercase'>
              <h4>How It Works</h4>
            </div>
            <div className='max-w-xs mx-auto py-1 rounded-full bg-orange-600'></div>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 relative">
  
              <div className="flex flex-col-2 gap-4">
                <div className="w-14 h-14 mt-8 rounded-full bg-orange-500 text-slate-950 font-black text-xl flex items-center justify-center shadow-lg shadow-orange-500/20 z-10">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mt-6 mb-2">Download & Register</h3>
                  <p className="text-slate-400 text-sm max-w-xs">Install the app/web app and complete identity verification (KYC) in under 2 minutes.</p>
                </div>
                
              </div>
              <div className='ml-6 h-20 border-l-2 border-orange-600'></div>

              
              <div className="flex flex-col-2 gap-4">
                <div className="w-14 h-14 mt-8 rounded-full bg-slate-800 text-orange-500 border border-orange-500/30 font-black text-xl flex items-center justify-center z-10">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mt-6 mb-2">Fund Your Wallet</h3>
                  <p className="text-slate-400 text-sm max-w-xs">Connect a bank account, debit card, M-Pesa, or crypto address to deposit funds.</p>
                </div>
                
              </div>
              <div className='ml-6 h-20 border-l-2 border-orange-600'></div>
              
              <div className="flex flex-col-2 gap-4">
                <div className="w-14 h-14 mt-8 rounded-full bg-slate-800 text-orange-500 border border-orange-500/30 font-black text-xl flex items-center justify-center z-10">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mt-6 mb-2">Transact & Manage</h3>
                  <p className="text-slate-400 text-sm max-w-xs">Send money, pay bills, scan QR codes at checkout, or swap assets.</p>
                </div>
                
              </div>
              <div className='ml-6 h-20 border-l-2 border-orange-600'></div>

              <div className="flex flex-col-2 gap-4">
                <div className="w-14 h-14 mt-8 rounded-full bg-slate-800 text-orange-500 border border-orange-500/30 font-black text-xl flex items-center justify-center z-10">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mt-6 mb-2">Track & Grow</h3>
                  <p className="text-slate-400 text-sm max-w-xs">Monitor spending categories in real-time and earn yield/rewards on your balances.</p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='benefits' className='py-24'>
        <div className='space-y-5'>
          <div className='py-2'>
            <div className='flex items-center justify-center mb-2 text-2xl font-extrabold text-slate-950/70 uppercase'>
              <h4>benefits</h4>
            </div>
            <div className='max-w-xs mx-auto py-1 rounded-full bg-orange-600'></div>
          </div>
          <div className='px-4'>
            <div className='flex flex-col space-y-4'>
              
              <div className="p-6 rounded-2xl shadow-xl max-w-lg mx-auto w-full bg-blue-950/70 z-20 hover:scale-105">
                <h3>01</h3>
                <h4>
                  Bank-Grade Security:
                </h4>
                <p>
                  Biometric logins (Face ID), 2FA, tokenization, and multi-party computation (MPC) key storage.
                </p> 
              </div>
              
              
              <div className="p-6 rounded-2xl shadow-xl max-w-lg mx-auto w-full bg-blue-950/70 z-20 hover:scale-105">
                <h3 className='text-sm text-orange-600 font-bold'>02</h3>
                <h4>
                  Zero / Ultra-Low Fees:
                </h4>
                <p>
                  Free instant internal transfers and transparent foreign exchange rates.
                </p> 
              </div>
        
              <div className="p-6 rounded-2xl shadow-xl max-w-lg mx-auto w-full bg-blue-950/70 z-20 hover:scale-105">
                <h3>03</h3>
                <h4>
                  Global Access:
                </h4>
                <p>
                  Borderless transactions with multi-currency ledgers and international acceptance.
                </p> 
              </div>

              <div className="p-6 rounded-2xl shadow-xl max-w-lg mx-auto w-full bg-blue-950/70 z-20 hover:scale-105">
                <h3>04</h3>
                <h4>
                 Cashback & Rewards: 
                </h4>
                <p>
                  Earn rewards, loyalty points, or cashback on every transaction.
                </p>
                 
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='pricing' className='py-24'>
        <div className='space-y-5'>
          <div className='py-2'>
            <div className='flex items-center justify-center mb-2 text-2xl font-extrabold text-slate-950/70 uppercase'>
              <h4>Pricing</h4>
            </div>
            <div className='max-w-xs mx-auto py-1 rounded-full bg-orange-600'></div>
          </div>
        </div>
      </section>
      <main>
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