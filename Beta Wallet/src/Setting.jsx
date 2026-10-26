import React from 'react';
import { useState } from 'react';

export default function Setting({ userName = 'John Doe' }) {
    const [user, setUser] = useState(userName);

    return(
        <>
        <div className="relative h-screen w-full">
            <header className="sticky bg-slate-900/70 flex top-0 backdrop-blur-md border-b border-slate-600/60 px-5 py-4 z-30">
                <div className="flex justify-between items-center gap-4 w-full">
                    <div>
                        <i className="fas fa-cog text-xl text-orange-600 p-4 rounded-2xl"></i>
                        <span className="text-orange-600 font-bold text-lg">Settings</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div>
                            <i className="fa-regular fa-bell text-xl text-slate-400"></i>
                        </div>
                        <div className="h-7 border border-black"></div>
                        <div className="flex items-center space-x-2">
                            <div className="h-10 w-10 flex items-center justify-center border border-orange-500 text-orange-500 rounded-full font-extrabold text-xs">{user.split(' ').map((part) => part[0]).join('').slice(0, 2).toUpperCase() || 'JD'}</div>
                            <div>
                                <span className="text-slate-400 font-medium">{user}</span>
                                <span className="block text-xs font-extrabold text-orange-500">Premium account</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className='px-4 py-10'>
                <div>
                    <div className='grid grid-cols-2'>
                        <div className='border-r border-slate-400 w-full h-full flex items-center justify-center'>
                            <h2 className='text-xl font-bold text-white uppercase'>Settings</h2>
                        </div>  
                        
                    </div> 
                </div>
                
                
            </section>
        </div>
        </> 
    )
}