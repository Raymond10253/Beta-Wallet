import React from 'react';
import { useState } from 'react';
import Login from './login';


export default function Profile() {
    const [editForm, setEditForm] = useState({
        userName: '',
        email: '',
        phoneNumber: ''
    })
    const [error, setError] = useState('')
    const handleEdit = (e) => {
        e.preventDefault();
    if(!editForm.userName || !editForm.email || !editForm.userName){
        setError("please fill in the details");
        return;
    }
    setEditForm({
        userName: '',
        email: '',
        phoneNumber: '' 
    })
}
    
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
                <div className='flex gap-4'>
                    <div className='space-y-6 bg-slate-900 p-6 rounded-xl w-1/3 h-full'>
                        <div>
                            <label htmlFor="" className='block'>User Name</label>
                            <span id='user-name' className='font-medium text-slate-400'></span>
                        </div>
                        <div>
                            <label htmlFor="" className='block'>Email</label>
                            <span id='email'>johndoe@gmail.com</span>
                        </div>
                        <div>
                            <label htmlFor="" className='block'>Phone Number</label>
                            <span id='phone-number'>+254700000000</span>
                        </div>
                    </div>
                    <div className="bg-slate-900 p-6 rounded-xl w-2/3 h-full">
                        <div>
                            <form action="">
                                <div>
                                    <label htmlFor="">USERNAME</label>
                                    <input 
                                        type="text" 
                                        required id="" 
                                        name="userName"
                                        placeholder="UserName"
                                        value={editForm.userName}
                                        onChange={handleEdit}
                                        className="py-1 px-2 w-full rounded-2xl max-w-xl" 
                                    />
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