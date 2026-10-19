import { useState } from "react"



function Signup({isOpen, onClose}) {
const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
});
const [error, setError] = useState('')



if (!isOpen) return null;

    return(
        <>
            <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
                <div className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"></div>
                <div className="bg-white dark:bg-blue-800/60 rounded-3xl max-w-md w-full p-3 sm:p-8 shadow-2xl z-10">
                    <div>
                        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <div className="flex items-center pb-4 border-b border-gray-200 mb-6 max-w-md w-full">
                        
                        
                       <form className="space-y-4 flex flex-col w-full">
                        <div>
                            <label htmlFor="password" className="block text-md font-medium uppercase text-orange-600 my-2">First Name</label>
                            <input type="text" required id="username" className="py-1 px-2 w-full rounded-2xl max-w-xl"/>
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-md font-medium uppercase text-orange-600 my-2">Last Name</label>
                            <input type="text" required id="username" className="py-1 px-2 w-full rounded-2xl max-w-xl"/>
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-md font-medium uppercase text-orange-600 my-2">Email</label>
                            <input type="text" required id="username" className="py-1 px-2 w-full rounded-2xl max-w-xl"/>
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-md font-medium uppercase text-orange-600 my-2">Password</label>
                            <input type="password" required id="password" className="py-1 px-2 w-full rounded-2xl"/>
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-md font-medium uppercase text-orange-600 my-2">Confirm Password</label>
                            <input type="password" required id="password" className="py-1 px-2 w-full rounded-2xl"/>
                        </div>
                       
                        <div className="flex items-center justify-center w-full">
                            <button type="submit" className="bg-orange-600 hover:bg-orange-700 w-full rounded-2xl py-1">Sign Up</button>
                        </div>
                    </form> 
                    
                    </div>
                    
                </div>
            </div>
        </>
    )
}
export default Signup