export default function Contact() {
    return(
        <>
            <div id='contact' className='rounded-2xl flex w-full h-full mx-3 p-5 border-2 border-black/20 z-20 shadow shadow-2xl bg-blue-950/50'>
            <div className='w-full'>
               <form action="" className='space-y-10'>
                    <div className='grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-4'>
                        <div>
                            <label htmlFor="" className="block text-md font-medium uppercase text-orange-600 my-2">Username</label>
                            <input type="text" required className='mt-4 px-2 py-3 rounded-xl w-full'/>
                        </div>
                        <div>
                            <label htmlFor="" className="block text-md font-medium uppercase text-orange-600 my-2">email</label>
                            <input type="email" required className='mt-4 px-2 py-3 rounded-xl w-full'/>
                        </div>  
                    </div>
                    
                    <div>
                        <label htmlFor="" className="block text-md font-medium uppercase text-orange-600 my-2">Subject</label>
                        <input type="text" className='w-full mt-4 px-2 py-3 rounded-xl'/>
                    </div>
                    <div className=''>
                        <div>
                            <label htmlFor="" className="block text-md font-medium uppercase text-orange-600 my-2">Message</label>
                            <textarea name="" id="" className='w-full mt-4 rounded-xl h-[150px] p-3'></textarea> 
                        </div>
                        <div>
                            <button>
                                <i className='fa-solid fa-paper-plane block text-md font-medium uppercase text-orange-600 my-2 py-3 px-4 rounded-2xl border border-orange-600 hover:bg-orange-600 hover:text-white'></i>
                            </button>
                        </div>
                        
                    </div>
                </form> 
            </div>
        </div>
        </>
    )
}