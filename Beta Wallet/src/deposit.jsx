import React, {useState} from "react";



export default function Deposit() {
  const [amount, setAmount] = useState('');

  const handleDeposit = (e) => {
    e.preventDefault();
    alert(`Successfully deposited $${amount}`);
    setAmount('');
  };

  return (
    <div className="max-w-full mx-auto space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Deposit Funds</h2>
        <p className="text-slate-400 text-sm">Add money securely to your Bash-Wallet balance.</p>
      </div>

      <form onSubmit={handleDeposit} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
        
      </form>
    </div>
  );
}
