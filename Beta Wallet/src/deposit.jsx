import React, {useState} from "react";



export default function Deposit() {
  const [amount, setAmount] = useState('');

  return (
    <>
    <div className="relative h-screen w-full">
      <header className="py-10 sticky bg-slate-900">

      </header>
      <section className="p-5">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Deposit</h2>
        </div>
        <div className="grid grid-cols-3 gap-4 p-5 border border-slate-950 rounded-2xl shadow shadow-2xl">
          <div className="p-5 rounded-2xl border border-slate-950">

          </div>
          <div className="p-5 rounded-2xl border border-slate-950"></div>
          <div className="p-5 rounded-2xl border border-slate-950"></div>
        </div>
      </section>
      
    </div>           
    </>
  );
}
