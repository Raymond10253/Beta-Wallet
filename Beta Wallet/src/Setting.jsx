import React from 'react';
import { useState } from 'react';

export default function Setting({ userName = '' }) {
    const [user, setUser] = useState(userName);
    const [activeTab, setActiveTab] = useState('security');
    const userInitial = userName ? userName.charAt(0).toUpperCase() : 'U';

    const [biometrics, setBiometrics] = useState(true);
    const [emailAlerts, setEmailAlerts] = useState(true);
    const [privacyMode, setPrivacyMode] = useState(false);

    return(
        <>
        <div className="relative h-screen w-full">
            <header className="sticky bg-slate-900/70 flex top-0 backdrop-blur-md border-b border-slate-600/60 px-5 py-4 z-30">
                <div className="flex justify-between items-center gap-4 w-full">
                    <div className="flex items-center space-x-4">
                        <i className="fas fa-cog text-xl text-orange-600 p-4 rounded-2xl bg-slate-600"></i>
                        <span className="text-slate-300 font-bold text-lg">Settings</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="h-7 border border-black"></div>
                        <div className="flex items-center space-x-2">
                            <div className="h-10 w-10 flex items-center justify-center border border-orange-500 text-orange-500 rounded-full font-extrabold text-xs">{userName.split(' ').map((part) => part[0]).join('').slice(0, 2).toUpperCase() || 'JD'}</div>
                            <div>
                                <span className="text-slate-400 font-medium">{userName}</span>
                                <span className="block text-xs font-extrabold text-orange-500">Premium account</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className='px-4 py-10'>
                <main className="md:col-span-3 bg-slate-900/30 border border-slate-800 rounded-2xl p-6 shadow-xl">
          
            {activeTab === 'security' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-bold text-white">Security & Authentication</h2>
                <p className="text-sm text-slate-400">Protect your assets with seed backups, passwords, and biometric locks.</p>
              </div>

              <div className="divide-y divide-slate-800 border-t border-b border-slate-800">
                
                <div className="py-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-200">Secret Recovery Phrase</h3>
                    <p className="text-xs text-slate-400">Back up or view your 12-word master seed phrase securely.</p>
                  </div>
                  <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-orange-400 border border-slate-700 rounded-xl text-xs font-semibold transition">
                    Reveal Seed
                  </button>
                </div>

                
                <div className="py-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-200">Biometric Authentication</h3>
                    <p className="text-xs text-slate-400">Require Face ID or Fingerprint confirmation for fund transfers.</p>
                  </div>
                  <input 
                    type="checkbox" 
                    checked={biometrics} 
                    onChange={() => setBiometrics(!biometrics)}
                    className="w-5 h-5 accent-orange-500 rounded cursor-pointer"
                  />
                </div>

                
                <div className="py-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-200">Wallet Password</h3>
                    <p className="text-xs text-slate-400">Last changed 3 months ago.</p>
                  </div>
                  <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-semibold transition">
                    Update Password
                  </button>
                </div>
              </div>
            </div>
          )}
          <select name="" id="" onChange={(event) => setActiveTab(event.target.value)} className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-sm text-orange-600 font-semibold">
            <option value="" className="bg-slate-900 text-slate-100"></option>
            <option value={activeTab === 'dapps' ? 'dapps' : ''} className="bg-slate-900 text-slate-100">Dapps</option>
            <option value={activeTab === 'network' ? 'network' : ''} className="bg-slate-900 text-slate-100">Network</option>
            <option value={activeTab === 'general' ? 'general' : ''} className="bg-slate-900 text-slate-100">General</option>
          </select>

          
           {activeTab === 'dapps' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-bold text-white">Connected Applications</h2>
                <p className="text-sm text-slate-400">Manage external dApps and smart contract allowances linked to your wallet.</p>
              </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-bold text-white">Connected Applications</h2>
                <p className="text-sm text-slate-400">Manage external dApps and smart contract allowances linked to your wallet.</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-slate-900/80 border border-slate-800 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">U</div>
                    <div>
                      <h4 className="text-sm font-medium text-white">Uniswap V3</h4>
                      <p className="text-xs text-slate-400">Connected via WalletConnect • Ethereum</p>
                    </div>
                  </div>
                  <button className="px-3 py-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg text-xs font-semibold transition">
                    Disconnect
                  </button>
                </div>
              </div>
            </div>
            </div>

           )}

          
          {activeTab === 'network' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-bold text-white">Network & RPC Configuration</h2>
                <p className="text-sm text-slate-400">Switch active blockchains or add custom RPC network nodes.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-orange-500/10 border border-orange-500/40 rounded-xl flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-white">Ethereum Mainnet</h4>
                    <p className="text-xs text-orange-400">Active Node</p>
                  </div>
                  <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                </div>
                <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-white">Polygon Network</h4>
                    <p className="text-xs text-slate-400">Standard RPC</p>
                  </div>
                  <button className="text-xs text-orange-400 hover:underline font-semibold">Switch</button>
                </div>
              </div>
            </div>
          )}

          
          {activeTab === 'general' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-bold text-white">General & UI Preferences</h2>
                <p className="text-sm text-slate-400">Customize display currencies, privacy modes, and alert settings.</p>
              </div>

              <div className="divide-y divide-slate-800 border-t border-b border-slate-800">
                <div className="py-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-200">Privacy Mode (Hide Balances)</h3>
                    <p className="text-xs text-slate-400">Mask total portfolio balances with asterisks (*).</p>
                  </div>
                  <input 
                    type="checkbox" 
                    checked={privacyMode} 
                    onChange={() => setPrivacyMode(!privacyMode)}
                    className="w-5 h-5 accent-orange-500 rounded cursor-pointer"
                  />
                </div>

                <div className="py-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-200">Email Notifications</h3>
                    <p className="text-xs text-slate-400">Receive security alerts and transaction summaries.</p>
                  </div>
                  <input 
                    type="checkbox" 
                    checked={emailAlerts} 
                    onChange={() => setEmailAlerts(!emailAlerts)}
                    className="w-5 h-5 accent-orange-500 rounded cursor-pointer"
                  />
                </div>
              </div>
            </div>
          )}

        </main>
            </section>
        </div>
        </> 
    )
}