import { useState } from "react";

function Login({ isOpen, onClose, onLogin, onSignUp }) {
    const [userForm, setUserForm] = useState({
        userName: '',
        password: ''
    });
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleUser = (e) =>{
    const {name, value} = e.target;
    setUserForm((prev) =>({
        ...prev,
        [name]: value
    }));
};
const handleSubmit = (e) =>{
    e.preventDefault();
    const trimmedUserName = userForm.userName.trim();

    if (!trimmedUserName) {
        return;
    }

    if (onLogin) {
        onLogin(trimmedUserName);
    }
}        


if(!isOpen) return null;

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
                        <div>
                            <label htmlFor="username" className="block text-md uppercase text-orange-600 my-2">Username</label>
                            <input 
                            type="text" 
                            required id="username" 
                            name="userName"
                            placeholder="username"
                            value={userForm.userName}
                            onChange={handleUser}
                            className="py-1 px-2 w-full rounded-2xl max-w-xl"/>
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-md uppercase text-orange-600 my-2">Password</label>
                            <div className="relative">
                                <input 
                                type={isPasswordVisible ? "text" : "password"} 
                                required id="password" 
                                maxLength={8}
                                minLength={4}
                                placeholder="password"
                                name="password"
                                value={userForm.password}
                                onChange={handleUser}
                                className="py-1 px-2 pr-10 w-full rounded-2xl"/>
                                <button
                                    type="button"
                                    onClick={() => setIsPasswordVisible((visible) => !visible)}
                                    aria-label={isPasswordVisible ? "Hide password" : "Show password"}
                                    aria-pressed={isPasswordVisible}
                                    className="absolute inset-y-0 right-3 text-gray-600"
                                >
                                    <i className={`fa-solid ${isPasswordVisible ? "fa-eye-slash" : "fa-eye"}`} aria-hidden="true"></i>
                                </button>
                            </div>
                        </div> 
                        <div className="flex items-center justify-center w-full">
                            <button type="submit" className="bg-orange-600 hover:bg-orange-700 w-full uppercase font-medium rounded-2xl py-1">Log In</button>
                        </div>
                        <div className="flex items-center justify-center">
                            <p>Don't have an account? <a href="#" onClick={(event) => { event.preventDefault(); onSignUp(); }} className="text-orange-500">Sign up</a></p>                        
                        </div>
                    </form> 
                    
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Login