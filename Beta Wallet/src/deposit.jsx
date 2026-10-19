import React, {useState} from "react";



export default function Deposit() {
  const [amount, setAmount] = useState('');

  const handleDeposit = (e) => {
    e.preventDefault();
    alert(`Successfully deposited $${amount}`);
    setAmount('');
  };

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Deposit Funds</h2>
        <p className="text-slate-400 text-sm">Add money securely to your Bash-Wallet balance.</p>
      </div>

      <form onSubmit={handleDeposit} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Amount (\$)</label>
          <input 
            type="number" 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00" 
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Payment Method</label>
          <select className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500">
            <option>Credit / Debit Card</option>
            <option>Mobile Money / M-Pesa</option>
            <option>Bank Transfer</option>
          </select>
        </div>

        <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition">
          Proceed to Deposit
        </button>
      </form>
    </div>
  );
}
