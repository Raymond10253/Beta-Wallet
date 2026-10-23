import React, {useState} from "react";



export default function Deposit() {
  const [amount, setAmount] = useState('');

  return (
    <>
      <div className='rounded-2xl flex w-full h-full mx-3 p-5 border-2 border-black/20 z-20 shadow shadow-2xl bg-gradient-to-b from-blue-950/50 to-orange-700/50'>
        <div className="grid grid-cols-2">
          <div className="border border-slate-700/60 rounded-2xl w-full">
            <div>
              <h3>
                DEPOSIT
              </h3>
              
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}
