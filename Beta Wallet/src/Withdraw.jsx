import { useState } from 'react';
import { recordWithdrawal } from './transactions';

export default function Withdraw() {
    const [amount, setAmount] = useState('');
    const [method, setMethod] = useState('');
    const [account, setAccount] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const parsedAmount = Number(amount);
        if (!Number.isFinite(parsedAmount) || parsedAmount <= 0) {
            setError('Enter an amount greater than zero.');
            setMessage('');
            return;
        }

        if (!method || !account.trim()) {
            setError('Select a withdrawal method and enter the account number.');
            setMessage('');
            return;
        }

        try {
            recordWithdrawal(parsedAmount, method);
            setAmount('');
            setMethod('');
            setAccount('');
            setError('');
            setMessage('Withdrawal recorded.');
        } catch (submitError) {
            if (submitError.name === 'InsufficientBalanceError') {
                setError(submitError.message);
            } else {
                console.error('Unable to record withdrawal:', submitError);
                setError('Unable to save this withdrawal. Please try again.');
            }
            setMessage('');
        }
    };

    return(
    <>
        <div className="relative h-screen w-full">
        <header className="py-10 sticky bg-slate-900">

        </header>
        <section className="p-5">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white uppercase">Withdraw</h2>
            </div>
            <div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="amount" className="block text-white mb-2">Amount</label>
                        <input
                            type="number"
                            id="amount"
                            min="0.01"
                            step="0.01"
                            value={amount}
                            onChange={(event) => setAmount(event.target.value)}
                            placeholder="Enter amount"
                            className="w-full px-2 py-3 rounded-xl"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="method" className="block text-white mb-2">Withdrawal Method</label>
                        <select
                            id="method"
                            value={method}
                            onChange={(event) => setMethod(event.target.value)}
                            className="w-full px-2 py-3 rounded-xl"
                            required
                        >
                            <option value="">Select method</option>
                            <option value="bank">Bank Transfer</option>
                            <option value="crypto">Cryptocurrency</option>
                            <option value="paypal">PayPal</option>
                            <option value="other">Mpesa</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="account" className="block text-white mb-2">Account Number</label>
                        <input
                            type="text"
                            id="account"
                            value={account}
                            onChange={(event) => setAccount(event.target.value)}
                            placeholder="Enter account number"
                            className="w-full px-2 py-3 rounded-xl"
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <button type="submit" className="bg-orange-600 hover:bg-orange-700 w-full uppercase font-medium rounded-2xl py-2">Withdraw</button>
                    </div>
                    {message && <p role="status" className="text-emerald-400">{message}</p>}
                    {error && <p role="alert" className="text-rose-400">{error}</p>}
                </form>
            </div>
        </section>
        
        </div>  
    </>
    )
}