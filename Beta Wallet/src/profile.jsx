import React from 'react';
import Signup from './signup';


export default function Profile() {
  return (
    <>
            <div id='contact' className='rounded-2xl flex w-full h-full mx-3 p-5 border-2 border-black/20 z-20 shadow shadow-2xl bg-gradient-to-b from-blue-950/50 to-orange-700/50'>
            <div className='w-full'>
               <div className='space-y-6'>
                <div className='flex flex-col-2 gap-3'>
                    <div className='w-20 h-20 pb-3 rounded-full border border-orange-400 bg-orange-400 flex items-center justify-center'>
                        <span className='text-3xl font-extrabold'>JD</span>
                    </div>
                    <div>
                        <div>
                           <span className='text-lg text-orange-600 font-medium'>John Doe</span> 
                        </div>
                        <div>
                           <span className='text-lg text-orange-600'>johndoe@gmail.com</span> 
                        </div>
                        
                    </div>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 p-4'>
                    <div className='space-y-6'>
                        <div>
                            <label htmlFor="" className='block'>Full Name</label>
                            <span>John Doe</span>
                        </div>
                        <div>
                            <label htmlFor="" className='block'>Email</label>
                            <span>johndoe@gmail.com</span>
                        </div>
                        <div>
                            <label htmlFor="" className='block'>Phone Number</label>
                            <span>+254700000000</span>
                        </div>
                    </div>
                    <div></div>
                </div>
                    
               </div>
            </div>
        </div>
    </>
  );
}