import { useState } from 'react';
import { recordWithdrawal } from './transactions';

export default function Withdraw() {
    const [amount, setAmount] = useState('');
    const [method, setMethod] = useState('');
   // const [account, setAccount] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [paymentDetail, setPaymentDetail] = useState('');

    const paymentDetailFields = {
        bank: { label: 'Bank account number', placeholder: 'Enter bank account number', type: 'text' },
        crypto: { label: 'Wallet address', placeholder: 'Enter cryptocurrency wallet address', type: 'text' },
        paypal: { label: 'PayPal email address', placeholder: 'Enter PayPal email address', type: 'email' },
        other: { label: 'M-Pesa phone number', placeholder: 'Enter M-Pesa phone number', type: 'tel' },
    };
    const selectedPaymentField = paymentDetailFields[method];
    const handleSubmit = (event) => {
        event.preventDefault();

        const parsedAmount = Number(amount);
        if (!Number.isFinite(parsedAmount) || parsedAmount <= 0) {
            setError('Enter an amount greater than zero.');
            setMessage('');
            return;
        }

        if (!method || !paymentDetail.trim()) {
            setError('Select a withdrawal method and enter the payment detail.');
            setMessage('');
            return;
        }

        try {
            recordWithdrawal(parsedAmount, method);
            setAmount('');
            setMethod('');
            setPaymentDetail('');
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
        <section className="p-5 max-w-3xl mx-auto border border-black rounded-xl bg-gradient-to-b from-blue-950/50 to-orange-700/50 z-30 shadow shadow-xl my-10">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-orange-600 via-blue-300 to-indigo-700 uppercase">Withdraw</h2>
            </div>
            <div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="amount" className="block text-orange-600 text-sm uppercase font-bold mb-2">Amount</label>
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
                        <label htmlFor="method" className="block text-orange-600 text-sm uppercase font-bold mb-2">Withdrawal Method</label>
                        <select
                            id="method"
                            value={method}
                            onChange={(event) => {
                                setMethod(event.target.value);
                                setPaymentDetail('');
                                setError('');
                                setMessage(''); 
                            }}
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
                    {selectedPaymentField && (
                        <div>
                            <label htmlFor="paymentDetail" className="block text-orange-600 text-sm uppercase font-bold mb-2">
                                {selectedPaymentField.label}
                            </label>
                            <input
                                type={selectedPaymentField.type}
                                id="paymentDetail"
                                value={paymentDetail}
                                onChange={(event) => setPaymentDetail(event.target.value)}
                                placeholder={selectedPaymentField.placeholder}
                                className="w-full px-2 py-3 rounded-xl"
                                required
                            />
                        </div>
                    )}
                    
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