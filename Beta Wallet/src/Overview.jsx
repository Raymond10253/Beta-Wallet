import { useState } from 'react';
import { getTransactions } from './transactions';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer,
} from 'recharts';

export default function Overview() {
  const [transactionState] = useState(() => {
    try {
      return { transactions: getTransactions(), error: '' };
    } catch (error) {
      console.error('Unable to load transactions:', error);
      return { transactions: [], error: 'Unable to load transaction history.' };
    }
  });
  const { transactions, error: transactionError } = transactionState;

  const balanceSummary = transactions.reduce(
    (summary, transaction) => {
      const balance = summary.balance
        + (transaction.type === 'deposit' ? transaction.amount : -transaction.amount);
      return {
        balance,
        transactions: [...summary.transactions, { ...transaction, balance }],
      };
    },
    { balance: 0, transactions: [] },
  );
  const runningBalance = balanceSummary.balance;
  const transactionsWithBalances = balanceSummary.transactions;
  const totalDeposits = transactions
    .filter((transaction) => transaction.type === 'deposit')
    .reduce((total, transaction) => total + transaction.amount, 0);
  const totalWithdrawals = transactions
    .filter((transaction) => transaction.type === 'withdrawal')
    .reduce((total, transaction) => total + transaction.amount, 0);
  const chartData = transactionsWithBalances.map((transaction) => ({
    time: new Date(transaction.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    balance: transaction.balance,
    type: transaction.type,
  }));
  const formatAmount = (amount) => `Ksh.${amount.toLocaleString('en-KE', { maximumFractionDigits: 2 })}`;

    return(
        <>
            
            <div className="relative w-full h-full flex flex-1 flex-col min-w-0 bg-blue-900 pb-4 inset-0 z-20">
                <header className='sticky bg-slate-900/70 flex top-0 backdrop-blur-md border-b border-slate-600/60 px-5 py-4 z-30'>
                    <div className='flex justify-between items-center w-full'>
                        <div className='space-x-3'>
                            <i className='fa-solid fa-wallet text-2xl text-orange-600 bg-slate-600/50 p-4 rounded-2xl'></i>
                            <span className='font-bold text-xl uppercase text-slate-400'>Dashboard</span>
                        </div>
                        <div className='flex flex-col-3'>
                            <div className='px-4'>
                                <a href="">
                                    <i className='fa-regular fa-bell text-xl text-slate-400'></i>
                                </a>
                            </div>
                            <div className='h-7 border border-black'></div>
                            <div className='px-4 flex space-x-3'>
                                <div className='h-10 w-10 flex items-center justify-center border border-orange-500 text-orange-500 rounded-full font-extrabold text-xs'>JD</div>
                                <div>
                                    <h3 className='font-bold text-slate-400'>John Doe</h3>
                                    <h4 className='text-xs font-extrabold text-orange-500'>Premium account</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <section className='px-4 py-10'>
                <div className='my-5 text-orange-500 font-bold'>
                    <span>Welcome! John Doe</span>
                </div>
                <div>
                    <div className="p-3 w-full rounded-xl border border-black/20 shadow shadow-xl bg-gradient-to-b from-blue-950/50 via-orange-950/50 to-orange-500/50">
                        
                            <div className="flex justify-between items-center mb-6">
                                <div>
                                <h3 className="text-gray-400 text-sm">Deposit & Withdrawal Analytics</h3>
                                <h2 className="text-2xl font-bold text-white mt-1">{formatAmount(runningBalance)}</h2>
                                </div>
                                <div className="flex items-center space-x-4 text-xs text-gray-400">
                                <div className='flex items-center space-x-1.5'>
                                    <span className="w-3 h-3 bg-emerald-500 rounded-full"></span>
                                    <span>Total Deposits <span className='font-mono font-bold text-green-500'>{formatAmount(totalDeposits)}</span></span>
                                </div>
                                <div className="flex items-center space-x-1.5">
                                    <span className="w-3 h-3 bg-rose-500 rounded-full"></span>
                                    <span>Total Withdrawals <span className='font-mono font-bold text-rose-400'>{formatAmount(totalWithdrawals)}</span></span>
                                </div>
                                </div>
                            </div>

                            
                            <div className="bg-[#1e1b2e]/50 p-6 rounded-lg text-white w-full h-80">
                                <h3 className="text-gray-400 text-sm">Live Balance Analytics</h3>
                                
                                <ResponsiveContainer width="100%" height="85%">
                                    <AreaChart data={chartData}>
                                    <defs>
                                        <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#f97316" stopOpacity={0.4}/>
                                        <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                                        </linearGradient>
                                    </defs>
                                    <XAxis dataKey="time" stroke="#9ca3af" />
                                    <YAxis stroke="#9ca3af" />
                                    <Tooltip contentStyle={{ backgroundColor: '#111827', borderColor: '#374151' }} />
                                    <Area type="linear" dataKey="balance" stroke="#f97316" fillOpacity={1} fill="url(#colorBalance)" />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>

                        
                    </div>
                    
                </div>
                </section>
                <section className='px-6 py-5'>

                <div>
                    
                            <div className="flex justify-center items-center space-x-2 px-10 grid grid-cols-3 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                                <div className='p-5 border border-slate-800 w-full rounded-2xl bg-slate-900/50'>
                                    <h4 className='text-orange-500 font-bold'>Available balance</h4>
                                    <div className='flex justify-between my-2'>
                                        <span className='text-2xl font-bold text-slate-400'>{formatAmount(runningBalance)}</span>
                                        <span className='p-4 border border-orange-500 rounded-3xl'>
                                            <i className='fa-solid fa-check text-orange-500'></i>
                                        </span>
                                    </div>
                                </div>
                                <div className='p-5 border border-slate-800 w-full rounded-2xl bg-slate-900/50'>
                                    <h4 className='text-orange-500 font-bold'>Pending Processes</h4>
                                    <div className='flex justify-between my-2'>
                                        <span className='text-2xl font-bold text-slate-400'>ksh.0</span>
                                        <span className='p-4 border border-orange-500 rounded-3xl'>
                                            <i className='fa-solid fa-hourglass-half text-orange-500'></i>
                                        </span>
                                    </div>
                                </div>
                                <div className='p-5 border border-slate-800 w-full rounded-2xl bg-slate-900/50'>
                                    <h4 className='text-orange-500 font-bold'>Transactions</h4>
                                    <div className='flex justify-between my-2'>
                                        <span className='text-2xl font-bold text-slate-400'>{transactions.length}</span>
                                        <span className='p-4 border border-orange-500 rounded-3xl'>
                                            <i className='fa-solid fa-list-check text-orange-500'></i>
                                        </span>
                                    </div>
                                </div>
                                
                            </div>
                        
                </div>
                </section>
                <section className='px-4 py-5'>
                    <div className='p-5 bg-slate-900/60 rounded-2xl'>
                    <div className='flex justify-between px-2 my-3'>
                        <div className='space-x-3'>
                            <i class="fa-solid fa-arrow-rotate-left text-orange-500 text-xl"></i>
                            <span className='font-bold'>Recent Transaction Logs</span>
                        </div>
                        <div>
                            <span className='text-orange-500 text-sm'>{transactions.length} total</span>
                        </div>
                    </div>
                    <div className='overflow-x-auto'>
                        <table className='w-full text-left text-xs'>
                            <thead>
                                <tr className='border-b border-slate-400 text-slate-300 uppercase font-semibold'>
                                    <th className='p-3'>type</th>
                                    <th className='p-3'>method</th>
                                    <th className='p-3'>amount</th>
                                    <th className='p-3'>calculated balance</th>
                                    <th className='p-3'>time logged</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transactionError ? (
                                    <tr>
                                        <td colSpan="5" className="p-3 text-rose-400">{transactionError}</td>
                                    </tr>
                                ) : transactionsWithBalances.length === 0 ? (
                                    <tr>
                                        <td colSpan="5" className="p-3 text-slate-400">No transactions yet. Make a deposit to get started.</td>
                                    </tr>
                                ) : [...transactionsWithBalances].reverse().map((transaction) => (
                                    <tr key={transaction.id} className="border-b border-slate-700 text-slate-300">
                                        <td className="p-3 capitalize">{transaction.type}</td>
                                        <td className="p-3 capitalize">
                                            {transaction.method || '—'}
                                            {transaction.paymentDetail && (
                                                <span className="block text-xs normal-case text-slate-400">{transaction.paymentDetail}</span>
                                            )}
                                        </td>
                                        <td className="p-3">{formatAmount(transaction.amount)}</td>
                                        <td className="p-3">{formatAmount(transaction.balance)}</td>
                                        <td className="p-3">{new Date(transaction.date).toLocaleString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    </div>
                </section>
                
            </div>
            <main>
                
            </main>
        </>
    )
}
    