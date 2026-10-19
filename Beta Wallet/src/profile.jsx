import React from 'react';


export default function Profile() {
  return (
    <>
            <div id='contact' className='flex max-w-screen mx-auto my-10 p-5 rounded-2xl border-2 border-black/20 z-20 shadow shadow-2xl bg-blue-950'>
            <div className='w-full'>
               <div>
                <div>
                    <div className='w-20 h-20 p-3 rounded-full border border-orange-400 bg-orange-400 flex items-center justify-center'>
                        <span className='text-3xl font-extrabold'>JD</span>
                    </div>
                    
                    <span>John Doe</span>
                </div>
                <div>
                    <label htmlFor="">Full Name</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" />
                </div>
                <div>
                    <label htmlFor="">Phone Number</label>
                    <input type="number" maxLength={13}/>
                </div>
               </div>
            </div>
        </div>
    </>
  );
}