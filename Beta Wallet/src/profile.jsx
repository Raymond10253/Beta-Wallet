import React from 'react';
import { useState } from 'react';
import Login from './login';


export default function Profile() {
const [userName, setUserName] = useState('');
const [email, setEmail] = useState('');
const [phoneNumber, setPhoneNumber] = useState('');
const [isHidden, setIsHidden] =useState(true);

    
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
                           <span className='text-md font-extrabold text-black'>Welcome! {userName}</span> 
                        </div>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <div className='space-y-6 bg-slate-900/50 p-6 rounded-xl w-1/3 h-full'>.
                        <div>
                            <h3 className='text-xl font-bold bg-gradient-to-br from-orange-600 via-blue-300 to-indigo-700 bg-clip-text text-transparent underline'>Profile details</h3>
                        </div>
                        <div>
                            <label htmlFor="" className='block text-orange-500 uppercase text-sm my-2'>Username</label>
                            <span id='user-name' className='font-medium text-slate-400'>{userName}</span>
                        </div>
                        <div>
                            <label htmlFor="" className='block text-orange-500 uppercase text-sm my-2'>Email</label>
                            <span id='email' className='font-medium text-slate-400'>{email}</span>
                        </div>
                        <div>
                            <label htmlFor="" className='block text-orange-500 uppercase text-sm my-2'>Phone Number</label>
                            <span id='phone-number' className='font-medium text-slate-400'>{phoneNumber}</span>
                        </div>

                        <div>
                            <button className='w-full bg-orange-500 p-1 rounded-xl text-white font-bold' onClick={() => setIsHidden(false)}>EDIT PROFILE</button>
                        </div>
                    </div>
                    <div className="bg-slate-900/50 p-6 rounded-xl w-2/3 h-full" hidden={isHidden}>
                        <div>
                        <button className="text-gray-500 hover:text-gray-700" onClick={() => setIsHidden(true)}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                        <div>
                            <form action="" id='profileform' className='space-y-6'>
                                <div>
                                    <label htmlFor="" className='block text-orange-500 uppercase text-sm my-2'>USERNAME</label>
                                    <input 
                                        type="text" 
                                        required id="" 
                                        name="userName"
                                        placeholder="UserName"
                                        value={userName}
                                        onChange={(e) => setUserName(e.target.value)}
                                        className="py-1 px-2 w-full rounded-2xl text-grey-900" 
                                    />
                                </div>
                                <div>
                                    <label htmlFor=""  className='block text-orange-500 uppercase text-sm my-2'>EMAIL</label>
                                    <input 
                                        type="email" 
                                        required id="" 
                                        name="email"
                                        placeholder="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="py-1 px-2 w-full rounded-2xl text-grey-900" 
                                    />
                                </div>
                                <div>
                                    <label htmlFor="" className='block text-orange-500 uppercase text-sm my-2'>PHONE NUMBER</label>
                                    <input 
                                        type="number" 
                                        required id="" 
                                        name="phoneNumber"
                                        placeholder="Phone Number"
                                        value={phoneNumber}
                                        maxLength={13}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        className="py-1 px-2 w-full rounded-2xl text-grey-900" 
                                    />
                                </div>
                                <div className='max-w-full mx-auto my-3'>
                                    <button type='submit' id='savebtn' className='w-full bg-orange-500 text-white text-md font-bold p-2 rounded-full'>
                                        <span id='savetext'>SAVE</span>
                                    </button>
                                </div>
                                
                            </form>
                        </div>
                        

                    </div>
                </div>
                    
               </div>
               <div>

               </div>
            </div>
        </div>
    </>
  );
}