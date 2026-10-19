import { useState } from 'react'

function NavBar() {
    const [isContactopen, setIsContactopen] = useState(false);

    return (
    <>
    <div className='flex'>
        <div className='relative bg-blue-950 left-0 h-full w-[200px] pt-16 pl-2 pr-2 border-r-2 border-black z-50'>
            <div className='space-y-10'>
                <div>
                    <a href="#dashboard" className='rounded-2xl border border-transparent hover:border-black hover:bg-blue-950 w-full flex space-x-3 px-2 py-1'>
                        <i className='fa-solid fa-chart-line text-lg'></i>
                        <span>Dashboard</span>
                    </a>
                    
                </div>
                <div>
                    <a href="#profile" className='rounded-2xl border border-transparent hover:border-black hover:bg-blue-950 w-full flex space-x-3 px-2 py-1'>
                        <i className='fa-solid fa-circle-user text-lg'></i>
                        <span>Profile</span>
                    </a>
                    
                </div>
                <div>
                    <a href="#deposit" className='rounded-2xl border border-transparent hover:border-black hover:bg-blue-950 w-full flex space-x-3 px-2 py-1'>
                        <i className='fa-solid fa-circle-arrow-down text-lg'></i>
                        <span>Deposit</span> 
                    </a>
                    
                </div>
                
                <div>
                    <a href="#withdraw" className='rounded-2xl border border-transparent hover:border-black hover:bg-blue-950 w-full flex space-x-3 px-2 py-1'>
                        <i className='fa-solid fa-circle-arrow-up text-lg '></i>
                        <span>Withdraw</span>
                    </a>
                    
                </div>
                <div>
                    <a href="#transfer" className='rounded-2xl border border-transparent hover:border-black hover:bg-blue-950 w-full flex space-x-3 px-2 py-1'>
                        <i class="fa-solid fa-arrow-right-arrow-left text-lg"></i>
                        <span>Transfers</span>
                    </a>
                    
                </div>
                <div className='border-t border-black w-full my-6'></div>
                <div className='mb-2'>
                    <div>
                        <a href="#setting" className='rounded-2xl border border-transparent hover:border-black hover:bg-blue-950 w-full flex space-x-3 px-2 py-1'>
                            <i className='fa-solid fa-gear text-lg transition-transform duration-500 hover:rotate-[360deg]'></i>
                            <span>Setting</span>
                        </a>
                        
                    </div>
                </div>
            
                <div className='pb-[30px]'>
                    <a href="#contact" onClick={setIsContactopen(true)} className='rounded-2xl border border-transparent hover:border-black hover:bg-blue-950 w-full flex space-x-3 px-2 pt-1 '>
                        <i className='fa-solid fa-phone text-lg'></i>
                        <span>Contact</span>
                    </a>
                    
                </div>
            </div>
        </div>
        <div id='contact' className={`flex max-w-screen mx-auto my-10 p-5 rounded-2xl border-2 border-black/20 z-20 shadow shadow-2xl bg-blue-950 ${isContactopen ? '' : ''}`}>
            <div className='w-full'>
               <form action="" className='space-y-10'>
                    <div className='grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-4'>
                        <div>
                            <label htmlFor="" className='block font-bold'>Username</label>
                            <input type="text" required className='mt-4 p-2 rounded-xl'/>
                        </div>
                        <div>
                            <label htmlFor="" className='block font-bold'>email</label>
                            <input type="email" required className='mt-4 p-2 rounded-xl'/>
                        </div>  
                    </div>
                    
                    <div>
                        <label htmlFor="" className='block font-bold'>Subject</label>
                        <input type="text" className='w-full mt-4 p-2 rounded-xl'/>
                    </div>
                    <div className=''>
                        <div>
                            <label htmlFor="" className='block font-bold'>Message</label>
                            <textarea name="" id="" className='w-full mt-4 rounded-xl h-[150px] p-3'></textarea> 
                        </div>
                        <div>
                            <button>
                                <i className='fa-solid fa-paper-plane'></i>
                            </button>
                        </div>
                        
                    </div>
                </form> 
            </div>
        </div>
    </div>
    </>
    )
   
}
export default NavBar