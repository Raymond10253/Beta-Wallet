import React from 'react';
import Deposit from './deposit';
import Withdraw from './Withdraw';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  CartesianGrid 
} from 'recharts';


// Sample data tracking deposits and withdrawals over time
const financialData = [
  { date: 'Jan 1', balance: 4000, deposit: 1200, withdrawal: 200 },
  { date: 'Jan 5', balance: 5200, deposit: 1500, withdrawal: 300 },
  { date: 'Jan 10', balance: 4800, deposit: 200, withdrawal: 600 },
  { date: 'Jan 15', balance: 7100, deposit: 3000, withdrawal: 700 },
  { date: 'Jan 20', balance: 8500, deposit: 2500, withdrawal: 1100 },
  { date: 'Jan 25', balance: 10120, deposit: 3500, withdrawal: 1880 },
];

export default function Overview() {
    return(
        <>
            <div className="relative w-full h-full border border-black bg-blue-900 p-4 inset-0 z-20">
                <div className='mb-2 text-orange-500 font-bold'>
                    <span>Welcome! John Doe</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-2">
                    <div className="p-3 w-full rounded-xl border border-black/20 shadow shadow-xl bg-gradient-to-b from-blue-950/50 via-orange-950/50 to-orange-500/50">
                        <div className="bg-transparent p-6 rounded-3xl shadow-xl w-full">
                            <div className="flex justify-between items-center mb-6">
                                <div>
                                <h3 className="text-gray-400 text-sm">Deposit & Withdrawal Analytics</h3>
                                <h2 className="text-2xl font-bold text-white mt-1">$10,120.50</h2>
                                </div>
                                <div className="flex items-center space-x-4 text-xs text-gray-400">
                                <div className="flex items-center space-x-1.5">
                                    <span className="w-3 h-3 bg-emerald-500 rounded-full"></span>
                                    <span>Deposits</span>
                                </div>
                                <div className="flex items-center space-x-1.5">
                                    <span className="w-3 h-3 bg-rose-500 rounded-full"></span>
                                    <span>Withdrawals</span>
                                </div>
                                </div>
                            </div>

                            
                            <div className="h-72 w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={financialData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                    <defs>
                                    <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="95%" stopColor="#101010" stopOpacity={0.4}/>
                                        <stop offset="90%" stopColor="#101010" stopOpacity={0}/>
                                    </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#221f2b" />
                                    <XAxis dataKey="date" stroke="#101010" textAnchor="end" tick={{ fontSize: 12 }} />
                                    <YAxis stroke="#101010" tick={{ fontSize: 12 }} />
                                    <Tooltip 
                                    contentStyle={{ backgroundColor: '#1a1721', borderColor: '#374151', borderRadius: '1px', color: '#fff' }} 
                                    />
                                    <Area 
                                    type="linear" 
                                    dataKey="balance" 
                                    stroke="#f87c17" 
                                    strokeWidth={2}
                                    fillOpacity={1} 
                                    fill="url(#colorBalance)" 
                                    />
                                </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 w-full rounded-xl bg-blue-950 border-2 border-black">
                        <div className="bg-gradient-to-br from-gray-900 to-indigo-950 text-white p-5 rounded-2xl shadow-inner space-y-4 relative overflow-hidden">
                            <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-brand-500/20 rounded-full blur-2xl"></div>
                            <div className="flex justify-between items-center">
                                <span className="text-xs tracking-widest uppercase text-indigo-200 font-semibold">Credit card</span>
                                <div className="flex gap-2">
                                    <i className="fa-brands fa-cc-visa text-2xl text-white"></i>
                                    <i className="fa-brands fa-cc-mastercard text-2xl text-white"></i>
                                </div>
                            </div>
                            <div>
                                <label className="block text-[10px] text-gray-400 uppercase mb-1"></label>
                                <input type="text" required placeholder="1234 **** **** 5678" maxlength="19" oninput="formatCardNumber(this)" className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm tracking-widest font-mono text-white placeholder-gray-500 focus:outline-none focus:border-brand-500"/>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[10px] text-gray-400 uppercase mb-1"></label>
                                    <input type="text" required placeholder="12/28" maxlength="5"  className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm font-mono text-white placeholder-gray-500 focus:outline-none focus:border-brand-500"/>
                                </div>
                                <div>
                                    <label className="block text-[10px] text-gray-400 uppercase mb-1"></label>
                                    <input type="password" required placeholder="1234" maxlength="4" className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm font-mono text-white placeholder-gray-500 focus:outline-none focus:border-brand-500"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="p-3 w-full rounded-xl bg-gradient-to-br from-blue-950/50 via-orange-950/50 to-orange-500/50 border border-black/20 shadow shadow-xl mt-2">
                        <div></div>
                        <div className='grid grid-cols-2 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2'>
                            <div className="flex justify-center items-center space-x-2 px-10">
                                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white border border-orange-600 py-1 rounded-xl space-x-2 font-bold">
                                    <i className="fa-solid fa-arrow-down-long"></i>
                                    <span>Deposit</span>
                                </button>
                                <button className="w-full border border-orange-700 text-orange-500 py-1 rounded-xl space-x-2 font-bold hover:bg-orange-700 hover:text-white">
                                    <i className="fa-solid fa-arrow-up-long"></i>
                                    <span>Withdraw</span>
                                </button>
                            </div>
                            <div>
                                <button className="w-full border border-orange-700 text-orange-500 py-1 rounded-xl space-x-2 font-bold hover:bg-orange-700 hover:text-white">
                                    <i className="fa-solid fa-arrow-up-long"></i>
                                    <span>Saving & Investments</span>
                                </button>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}
    