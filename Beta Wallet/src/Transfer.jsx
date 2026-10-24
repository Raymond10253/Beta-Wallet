export default function Transfer() {
    return(
        <>
        <div className="h-screen w-full">
            <header className="sticky bg-slate-900/70 backdrop-blur-md px-5 py-4 z-30">

            </header>
            <section className='px-4 py-5'>
                <div className='p-5 bg-slate-900/60 rounded-2xl'>
                <div className='flex justify-between px-2'>
                    <div className='space-x-3'>
                        <i class="fa-solid fa-arrow-rotate-left text-orange-500 text-xl"></i>
                        <span className='font-bold'>Recent Transaction Logs</span>
                    </div>
                    <div>
                        <a href="" className='text-orange-500 text-sm'>View All</a>
                    </div>
                </div>
                <div>
                    <ul>

                    </ul>
                </div>
                </div>
            </section>
        </div>
        </>
    )
}