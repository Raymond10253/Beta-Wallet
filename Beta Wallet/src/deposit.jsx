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
          <h2 className="text-2xl font-bold text-white uppercase">Deposit</h2>
        </div>
        <div>
          <form action="">
            <div>
              <label htmlFor="amount" className="block text-white mb-2">Amount</label>
              <input type="text" id="amount" placeholder="Enter amount" className="w-full px-2 py-3 rounded-xl"/>
            </div>
            <div>
              <label htmlFor="method" className="block text-white mb-2">Deposit Method</label>
              <select id="method" className="w-full px-2 py-3 rounded-xl">
                <option value="">Select method</option>
                <option value="bank">Bank Transfer</option>
                <option value="crypto">Cryptocurrency</option>
                <option value="paypal">PayPal</option>
                <option value="other">Mpesa</option>
              </select>
            </div>
            <div className="mt-4">
              <button type="submit" className="bg-orange-600 hover:bg-orange-700 w-full uppercase font-medium rounded-2xl py-1">Deposit</button>
            </div>
          </form>
        </div>
      </section>

    </div>
    </>
  );
}
