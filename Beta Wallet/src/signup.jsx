import { useState } from "react";

const Signup = ({ isOpen, onClose, onSignup, onSignIn }) => {
const [isPasswordVisible, setIsPasswordVisible] = useState(false)
const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false)
const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
});
const [error, setError] = useState('')

const handleChange = (e) =>{
    const {name, value} =e.target;
    setFormData((prevData) =>({
        ...prevData,
        [name]: value
    }));
};
const handleSubmit = (e) =>{
    e.preventDefault();
if(!formData.firstName.trim() || !formData.email.trim() || !formData.password){
    setError("Please fill in the details");
    return;
}
if(formData.password !== formData.confirmPassword){
    setError("Password do not match");
    return;
}
setError("");
onSignup(`${formData.firstName.trim()} ${formData.lastName.trim()}`.trim());

};

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
                        
                        
                       <form className="space-y-4 flex flex-col w-full" onSubmit={handleSubmit}>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <div>
                            <label htmlFor="firstName" className="block text-md uppercase text-orange-600 my-2">First Name</label>
                            <input 
                                type="text" 
                                required id="firstName"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="py-1 px-2 w-full rounded-2xl max-w-xl"
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-md uppercase text-orange-600 my-2">Last Name</label>
                            <input 
                                type="text" 
                                required id="lastName"
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="py-1 px-2 w-full rounded-2xl max-w-xl"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-md uppercase text-orange-600 my-2">Email</label>
                            <input 
                                type="email" 
                                required id="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="py-1 px-2 w-full rounded-2xl max-w-xl"
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="password" className="block text-md uppercase text-orange-600 my-2">Password</label>
                            <div className="relative">
                                <input 
                                    type={isPasswordVisible ? "text" : "password"} 
                                    required id="password" 
                                    name="password"
                                    placeholder="Password"
                                    maxLength={8}
                                    minLength={4}
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="py-1 px-2 pr-10 w-full rounded-2xl"
                                />
                                <button
                                    type="button"
                                    onClick={() => setIsPasswordVisible((visible) => !visible)}
                                    aria-label={isPasswordVisible ? "Hide password" : "Show password"}
                                    aria-pressed={isPasswordVisible}
                                    className="absolute inset-y-0 right-3 text-gray-500"
                                >
                                    <i className={`fa-solid ${isPasswordVisible ? "fa-eye-slash" : "fa-eye"}`} aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="confirmPassword" className="block text-md uppercase text-orange-600 my-2">Confirm Password</label>
                            <div className="relative">
                                <input 
                                    type={isConfirmPasswordVisible ? "text" : "password"} 
                                    required id="confirmPassword"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    maxLength={8}
                                    minLength={4}
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="py-1 px-2 pr-10 w-full rounded-2xl"
                                />
                                <button
                                    type="button"
                                    onClick={() => setIsConfirmPasswordVisible((visible) => !visible)}
                                    aria-label={isConfirmPasswordVisible ? "Hide confirm password" : "Show confirm password"}
                                    aria-pressed={isConfirmPasswordVisible}
                                    className="absolute inset-y-0 right-3 text-gray-500"
                                >
                                    <i className={`fa-solid ${isConfirmPasswordVisible ? "fa-eye-slash" : "fa-eye"}`} aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                       
                        <div className="flex items-center justify-center w-full">
                            <button type="submit" className="bg-orange-600 hover:bg-orange-700 w-full uppercase font-medium rounded-2xl py-1">Sign Up</button>
                        </div>
                        <div className="flex items-center justify-center">
                            <p>Already have an account? <a href="#" onClick={(event) => { event.preventDefault(); onSignIn(); }} className="text-orange-500">Sign in</a></p>
                        </div>
                    </form> 
                    
                    </div>
                    
                </div>
            </div>
        </>
    )
}
export default Signup