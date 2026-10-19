import { useState } from 'react'

import Overview from './Overview';
import Profile from './profile';
import Deposit from './deposit';
import Withdraw from './Withdraw';
import Transfer from './Transfer';
import Setting from './Setting';
import Contact from './Contact';


function NavBar() {
const [activeTab, setActiveTab] = useState('dashboard')
const renderContent = () => {
    switch (activeTab) {
    case 'dashboard':
        return <Overview />;
    case 'profile':
        return <Profile />;
    case 'deposit':
        return <Deposit />;
    case 'withdraw':
        return <Withdraw />;
    case 'transfer':
        return <Transfer />;
    case 'setting':
        return <Setting />;
    case 'contact':
        return <Contact />;
    default:
        return <Overview />;
} 
}


    return (
    <>
    <div className='flex'>
        <aside className='relative w-[200px] bg-slate-900 border-r-2 border-orange-600 pt-16 flex flex-col justify-between z-50 inset-0 px-2'>
            <div className='space-y-10'>
                <div>
                    <a href="#dashboard" onClick={() => setActiveTab('dashboard')} className='border border-b border-transparent hover:border-b-orange-500/40 w-full flex space-x-3 px-2 py-1'>
                        <i className='fa-solid fa-chart-line text-lg text-orange-500'></i>
                        <span className='text-orange-500/60'>Dashboard</span>
                    </a>
                    
                </div>
                <div>
                    <a href="#profile" onClick={() => setActiveTab('profile')} className='border border-b border-transparent hover:border-b-orange-500/40 w-full flex space-x-3 px-2 py-1'>
                        <i className='fa-solid fa-circle-user text-lg text-orange-500'></i>
                        <span className='text-orange-500/60'>Profile</span>
                    </a>
                    
                </div>
                <div>
                    <a href="#deposit" onClick={() => setActiveTab('deposit')} className='border border-b border-transparent hover:border-b-orange-500/40 w-full flex space-x-3 px-2 py-1'>
                        <i className='fa-solid fa-circle-arrow-down text-lg text-orange-500'></i>
                        <span className='text-orange-500/60'>Deposit</span> 
                    </a>
                    
                </div>
                
                <div>
                    <a href="#withdraw" onClick={() => setActiveTab('withdraw')} className='border border-b border-transparent hover:border-b-orange-500/40 w-full flex space-x-3 px-2 py-1'>
                        <i className='fa-solid fa-circle-arrow-up text-lg text-orange-500'></i>
                        <span className='text-orange-500/60'>Withdraw</span>
                    </a>
                    
                </div>
                <div>
                    <a href="#transfer" onClick={() => setActiveTab('transfer')} className='border border-b border-transparent hover:border-b-orange-500/40 w-full flex space-x-3 px-2 py-1'>
                        <i class="fa-solid fa-arrow-right-arrow-left text-lg text-orange-500"></i>
                        <span className='text-orange-500/60'>Transfers</span>
                    </a>
                    
                </div>
                <div className='border-t border-orange-500 w-full my-2'></div>
                <div className='mb-2'>
                    <div>
                        <a href="#setting" onClick={() => setActiveTab('setting')} className='border border-b border-transparent hover:border-b-orange-500/40 w-full flex space-x-3 px-2 py-1'>
                            <i className='fa-solid fa-gear text-lg text-orange-500 transition-transform duration-500 hover:rotate-[360deg]'></i>
                            <span className='text-orange-500/60'>Setting</span>
                        </a>
                        
                    </div>
                </div>
            
                <div className='pb-[30px]'>
                    <a href="#contact" onClick={() => setActiveTab('contact')} className='border border-b border-transparent hover:border-b-orange-500/40 w-full flex space-x-3 px-2 pt-1'>
                        <i className='fa-solid fa-phone text-lg text-orange-500'></i>
                        <span className='text-orange-500/60'>Contact</span>
                    </a>
                    
                </div>
            </div>
        </aside>

        <main className='w-full flex justify-center items-center'>
            {renderContent()}
        </main>
    </div>
    </>
    )
   
}
export default NavBar