import React from 'react';


export default function Profile() {
  return (
    <>
            <div id='contact' className='rounded-2xl flex w-full h-full mx-3 p-5 border-2 border-black/20 z-20 shadow shadow-2xl bg-gradient-to-b from-blue-950/50 to-orange-700/50'>
            <div className='w-full'>
               <div>
                <div className='flex span-x-3'>
                    <div className='w-20 h-20 p-3 rounded-full border border-orange-400 bg-orange-400 flex items-center justify-center'>
                        <span className='text-3xl font-extrabold'>JD</span>
                    </div>
                    <div className='block'>
                        <span className='text-lg text-orange-600 font-medium'>John Doe</span>
                        <span className='text-lg text-orange-600'>johndoe@gmail.com</span>
                    </div>
                </div>
                <div>
                    <label htmlFor="" className='block'>Full Name</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="" className='block'>Email</label>
                    <input type="email" />
                </div>
                <div>
                    <label htmlFor="" className='block'>Phone Number</label>
                    <input type="number" maxLength={13}/>
                </div>
               </div>
            </div>
        </div>
    </>
  );
}