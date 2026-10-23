/*
import React from 'react';
import { useState } from 'react';
import Login from './login';


export default function Profile() {
const profileForm = document.getElementById('profile-form')
const userNameInput = document.getElementById('user-name')
const emailInput = document.getElementById('email')
const phoneNumberInput = document.getElementById('phonenumber')

const displaySavedUsername = document.getElementById('display-saved-username');
const displaySavedEmail = document.getElementById('display-saved-email');
const displaySavedPhonenumber = document.getElementById('display-saved-phonenumber');

let state = JSON.parse(localStorage.getItem('savingState')) || {
    username: '',
    email: '',
    phonenumber: ''
};
function updateUI() {
    displaySavedUsername.textContent = state.username ? `${state.username}` : '';
    displaySavedEmail.textContent = state.email ? `${state.email}` : '';
    displaySavedPhonenumber.textContent = state.phonenumber ? `${state.phonenumber}` : '';

    localStorage.setItem('savingState', JSON.stringify(state));
}

profileForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userN = userNameInput.value.trim();
    const emailN = emailInput.value.trim();
    const phoneN = phoneNumberInput.value.trim();

    if (userN && emailN && phoneN) {
        state.username = userN;
        state.email = emailN;
        state.phonenumber = phoneN;
        updateUI();

        userNameInput.value = '';
        emailInput.value = '';
        phoneNumberInput.value = ':'
    }
});
*/

import React, { useState, useEffect } from 'react';
import Login from './login';

export default function Profile() {
    const [isHidden, setIsHidden] =useState(true);
  // 1. Initialize state from localStorage or default values
  const [state, setState] = useState(() => {
    const saved = localStorage.getItem('savingState');
    return saved ? JSON.parse(saved) : { username: '', email: '', phonenumber: '' };
  });

  // 2. Local state for form inputs
  const [userN, setUserN] = useState('');
  const [emailN, setEmailN] = useState('');
  const [phoneN, setPhoneN] = useState('');

  // 3. Sync state changes to localStorage
  useEffect(() => {
    localStorage.setItem('savingState', JSON.stringify(state));
  }, [state]);

  // 4. Handle form submission cleanly in React
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userN.trim() && emailN.trim() && phoneN.trim()) {
      setState({
        username: userN.trim(),
        email: emailN.trim(),
        phonenumber: phoneN.trim(),
      });

      // Clear input fields
      setUserN('');
      setEmailN('');
      setPhoneN('');
    }
  };
    
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
                           <span className='text-md font-extrabold text-black'>Welcome! {state.username}</span> 
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
                            <span id='display-saved-username' className='font-medium text-slate-400'>{state.username || 'Not set'}</span>
                        </div>
                        <div>
                            <label htmlFor="" className='block text-orange-500 uppercase text-sm my-2'>Email</label>
                            <span id='display-saved-email' className='font-medium text-slate-400'>{state.email || 'Not set'}</span>
                        </div>
                        <div>
                            <label htmlFor="" className='block text-orange-500 uppercase text-sm my-2'>Phone Number</label>
                            <span id='display-saved-phonenumber' className='font-medium text-slate-400'>{state.phonenumber || 'Not set'}</span>
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
                            <form onSubmit={handleSubmit} className='space-y-6'>
                                <div>
                                    <label htmlFor="" className='block text-orange-500 uppercase text-sm my-2'>USERNAME</label>
                                    <input 
                                        type="text" 
                                        required id="user-name" 
                                        name="userName"
                                        placeholder="UserName"
                                        value={userN}
                                        onChange={(e) => setUserN(e.target.value)}
                                        className="py-1 px-2 w-full rounded-2xl text-grey-900" 
                                    />
                                </div>
                                <div>
                                    <label htmlFor=""  className='block text-orange-500 uppercase text-sm my-2'>EMAIL</label>
                                    <input 
                                        type="email" 
                                        required id="email" 
                                        name="email"
                                        placeholder="email"
                                        value={emailN}
                                        onChange={(e) => setEmailN(e.target.value)}
                                        className="py-1 px-2 w-full rounded-2xl text-grey-900" 
                                    />
                                </div>
                                <div>
                                    <label htmlFor="" className='block text-orange-500 uppercase text-sm my-2'>PHONE NUMBER</label>
                                    <input 
                                        type="number" 
                                        required id="phonenumber" 
                                        name="phoneNumber"
                                        placeholder="Phone Number"
                                        value={phoneN}
                                        onChange={(e) => setPhoneN(e.target.value)}
                                        maxLength={13}
                                        className="py-1 px-2 w-full rounded-2xl text-grey-900" 
                                    />
                                </div>
                               
                                <button type='submit' id='savebtn' className='max-w-full mx-auto my-3 w-full bg-orange-500 text-white text-md font-bold p-2 rounded-full'>
                                    <span id='savetext'>SAVE</span>
                                </button>
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