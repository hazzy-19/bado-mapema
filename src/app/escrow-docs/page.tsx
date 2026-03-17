"use client";

import Link from "next/link";
import Header from "../../components/Header";
import { ArrowLeft, Target, Shield, BarChart, Database, Lock, AlertTriangle, Workflow, Coins, Fingerprint, Activity, Clock, Server, Play, Copy, ArrowRightLeft, FileSearch, Banknote } from "lucide-react";

export default function EscrowDocsPage() {
    return (
        <div className="bg-[#020617] min-h-screen font-sans text-slate-300 relative overflow-auto selection:bg-emerald-500/30">
            {/* Background dynamic ambient glow */}
            <div className="fixed top-0 left-[20%] w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none opacity-60"></div>
            <div className="fixed bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none opacity-40"></div>
            <div className="fixed top-[40%] left-[-10%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none opacity-40"></div>

            <div className="relative z-10 flex flex-col min-h-screen">
                <Header />
                
                <main className="flex-1 max-w-5xl mx-auto w-full py-12 px-6 md:px-10 lg:px-12 pb-24">
                    {/* Breadcrumb / Back Button */}
                    <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-10 bg-white/5 border border-white/10 px-4 py-2 rounded-xl group hover:bg-white/10">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Dashboard
                    </Link>

                    {/* Page Header */}
                    <div className="mb-14 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <h1 className="font-sans text-4xl md:text-5xl font-extrabold text-white tracking-tight flex items-center gap-4 drop-shadow-md mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">
                            ESCROW LEDGER SYSTEM
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl font-light">
                            Complete Documentation. The bank-grade double-entry financial backbone of Bado Mapema that tracks every shilling and reconciles with M-PESA.
                        </p>
                        <div className="mt-6 h-[4px] w-24 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.5)]" />
                    </div>

                    <div className="space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150 fill-mode-both">
                        
                        {/* Executive Summary & Purpose */}
                        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)] border-t-4 border-t-emerald-500">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                                        <Target className="w-5 h-5" />
                                    </span>
                                    Regulatory Purpose
                                </h3>
                                <ul className="space-y-4 text-sm">
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                                        <div><strong className="text-slate-200 block">Primary Goal:</strong> Track all user funds with bank-grade accuracy.</div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                                        <div><strong className="text-slate-200 block">Secondary Goal:</strong> Enable automatic reconciliation with M-PESA float.</div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                                        <div><strong className="text-slate-200 block">Tertiary Goal:</strong> Provide 7-year audit trails for regulators (CBK).</div>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="p-2 rounded-xl bg-rose-500/20 text-rose-400 border border-rose-500/30">
                                        <AlertTriangle className="w-5 h-5" />
                                    </span>
                                    The "Why" Factor
                                </h3>
                                <div className="space-y-3 text-sm text-slate-300">
                                    <p className="bg-rose-500/10 border border-rose-500/20 p-3 rounded-xl text-rose-200 font-medium">Without a proper ledger: One bug = lost money = angry users = CBK investigation = license revoked = business dead.</p>
                                    <p><strong className="text-slate-100">The Trust Equation:</strong> <br/>USER TRUST = TRANSPARENCY × ACCURACY × AUDIT</p>
                                    <p>If any of these is zero, trust drops entirely.</p>
                                </div>
                            </div>
                        </section>

                        {/* Double Entry Rules */}
                        <section className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="p-2 rounded-xl bg-teal-500/20 text-teal-400 border border-teal-500/30">
                                    <ArrowRightLeft className="w-5 h-5" />
                                </span>
                                Double-Entry Accounting Basics
                            </h3>
                            <div className="mb-6 p-4 bg-teal-500/10 border border-teal-500/20 rounded-xl text-teal-200 font-mono text-center shadow-inner">
                                EVERY CREDIT MUST HAVE A DEBIT<br/>
                                <span className="text-teal-400 text-sm">Assets = Liabilities + Equity</span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-black/20 rounded-xl p-5 border border-white/5">
                                    <h4 className="font-bold text-emerald-400 mb-4 border-b border-emerald-500/30 pb-2">Example: User deposits KES 500</h4>
                                    <ul className="text-sm text-slate-300 font-mono space-y-2 mb-4">
                                        <li className="flex justify-between"><span>Debit (Asset):</span> <span className="text-emerald-400">+500 (Bank)</span></li>
                                        <li className="flex justify-between"><span>Credit (Liability):</span> <span className="text-rose-400">+500 (User Owes)</span></li>
                                    </ul>
                                    <p className="text-xs text-slate-400">Why: Your bank balance goes up (asset). You owe the user 500 (liability). Perfect balance.</p>
                                </div>
                                <div className="bg-black/20 rounded-xl p-5 border border-white/5">
                                    <h4 className="font-bold text-sky-400 mb-4 border-b border-sky-500/30 pb-2">Example: User withdraws KES 200</h4>
                                    <ul className="text-sm text-slate-300 font-mono space-y-2 mb-4">
                                        <li className="flex justify-between"><span>Debit (Liability):</span> <span className="text-rose-400">-200 (User Owes)</span></li>
                                        <li className="flex justify-between"><span>Credit (Asset):</span> <span className="text-emerald-400">-200 (Bank)</span></li>
                                    </ul>
                                    <p className="text-xs text-slate-400">Why: You owe the user less (liability drops). Your bank balance goes down (asset drops). Still balanced.</p>
                                </div>
                            </div>
                        </section>

                        {/* Chart of Accounts */}
                        <section className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="p-2 rounded-xl bg-orange-500/20 text-orange-400 border border-orange-500/30">
                                    <Database className="w-5 h-5" />
                                </span>
                                Bado Mapema Chart of Accounts
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="bg-black/30 rounded-xl p-4 border border-white/5">
                                    <h4 className="font-bold text-emerald-400 mb-2">ASSETS (1xxx)</h4>
                                    <p className="text-xs text-slate-500 mb-2 uppercase tracking-wide">What company owns</p>
                                    <ul className="text-xs text-slate-300 space-y-2 font-mono">
                                        <li>1100: M-PESA Paybill</li>
                                        <li>1200: Bank Account</li>
                                        <li>1300: Safaricom Float</li>
                                        <li>2100: Pending Collects</li>
                                    </ul>
                                </div>
                                <div className="bg-black/30 rounded-xl p-4 border border-white/5">
                                    <h4 className="font-bold text-rose-400 mb-2">LIABILITIES (3xxx)</h4>
                                    <p className="text-xs text-slate-500 mb-2 uppercase tracking-wide">What company owes</p>
                                    <ul className="text-xs text-slate-300 space-y-2 font-mono">
                                        <li>3100: User A Escrow</li>
                                        <li>3200: User B Escrow</li>
                                        <li>3300: Unclaimed Funds</li>
                                        <li>4100: M-PESA Fees Payable</li>
                                    </ul>
                                </div>
                                <div className="bg-black/30 rounded-xl p-4 border border-white/5">
                                    <h4 className="font-bold text-sky-400 mb-2">INCOME (5xxx)</h4>
                                    <p className="text-xs text-slate-500 mb-2 uppercase tracking-wide">Revenue</p>
                                    <ul className="text-xs text-slate-300 space-y-2 font-mono">
                                        <li>5100: Transaction Fees</li>
                                        <li>5200: Premium Subs</li>
                                        <li>5300: Late Fees</li>
                                        <li>6100: Float Interest</li>
                                    </ul>
                                </div>
                                <div className="bg-black/30 rounded-xl p-4 border border-white/5">
                                    <h4 className="font-bold text-amber-400 mb-2">EXPENSES (7xxx)</h4>
                                    <p className="text-xs text-slate-500 mb-2 uppercase tracking-wide">Costs</p>
                                    <ul className="text-xs text-slate-300 space-y-2 font-mono">
                                        <li>7100: M-PESA Fees Paid</li>
                                        <li>7200: Server Costs</li>
                                        <li>8100: Bad Debt Reserve</li>
                                        <li>8200: Fraud Reserve</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Core Ledger Entry Postgres Spec */}
                        <section className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)] relative overflow-hidden">
                            <h2 className="text-2xl font-bold text-white mb-6 relative z-10 flex items-center gap-3">
                                Core Ledger Schema (PostgreSQL ACID)
                                <Fingerprint className="w-5 h-5 text-indigo-400" />
                            </h2>
                            <p className="text-sm text-slate-400 mb-6 relative z-10">
                                This strict standard absolutely avoids race conditions, uses Write-Ahead Logging (WAL) and creates an immutable cryptographic chain to ensure money never "despawns".
                            </p>
                            
                            <div className="bg-[#0b1120] rounded-xl p-5 border border-slate-800 font-mono text-xs overflow-x-auto relative z-10 shadow-inner">
                                <div className="text-slate-500 mb-2">-- Ledger entries table</div>
                                <div className="text-purple-400">CREATE TABLE <span className="text-blue-400">ledger_entries</span> (</div>
                                <div className="pl-4 text-slate-300">id <span className="text-cyan-400">UUID</span> PRIMARY KEY DEFAULT gen_random_uuid(),</div>
                                <div className="pl-4 text-slate-300">entry_number <span className="text-cyan-400">BIGSERIAL</span> UNIQUE,</div>
                                <div className="pl-4 text-slate-300">entry_date <span className="text-cyan-400">TIMESTAMPTZ</span> NOT NULL,</div>
                                <div className="pl-4 text-slate-500">-- Control fields</div>
                                <div className="pl-4 text-slate-300">total_debit <span className="text-cyan-400">DECIMAL(19,4)</span> NOT NULL,</div>
                                <div className="pl-4 text-slate-300">total_credit <span className="text-cyan-400">DECIMAL(19,4)</span> NOT NULL,</div>
                                <div className="pl-4 text-slate-300">hash <span className="text-cyan-400">TEXT</span> NOT NULL, <span className="text-slate-500">-- Cryptographic immutability</span></div>
                                <div className="pl-4 text-slate-300">previous_hash <span className="text-cyan-400">TEXT</span>,</div>
                                <div className="pl-4 text-slate-500">-- Constraints</div>
                                <div className="pl-4 text-emerald-400">CHECK (total_debit = total_credit)</div>
                                <div className="text-purple-400">);</div>
                                <br/>
                                <div className="text-slate-500 mb-2">-- Line items table</div>
                                <div className="text-purple-400">CREATE TABLE <span className="text-blue-400">ledger_lines</span> (</div>
                                <div className="pl-4 text-slate-300">id <span className="text-cyan-400">UUID</span> PRIMARY KEY DEFAULT gen_random_uuid(),</div>
                                <div className="pl-4 text-slate-300">ledger_id <span className="text-cyan-400">UUID</span> REFERENCES ledger_entries(id),</div>
                                <div className="pl-4 text-slate-300">account_code <span className="text-cyan-400">TEXT</span> NOT NULL,</div>
                                <div className="pl-4 text-slate-300">debit <span className="text-cyan-400">DECIMAL(19,4)</span> DEFAULT 0,</div>
                                <div className="pl-4 text-slate-300">credit <span className="text-cyan-400">DECIMAL(19,4)</span> DEFAULT 0,</div>
                                <div className="text-purple-400">);</div>
                            </div>
                        </section>

                        {/* Transaction Flows */}
                        <section className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="p-2 rounded-xl bg-violet-500/20 text-violet-400 border border-violet-500/30">
                                    <Workflow className="w-5 h-5" />
                                </span>
                                Discrepancy Reconciliation Flows
                            </h3>
                            
                            <div className="space-y-6">
                                <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
                                    <h4 className="font-bold text-slate-200 mb-2">Scenario 1: Amount Mismatch</h4>
                                    <p className="text-sm text-slate-300 mb-3"><span className="text-rose-400 font-bold">M-PESA:</span> KES 500 &nbsp; | &nbsp; <span className="text-emerald-400 font-bold">Ledger:</span> KES 550</p>
                                    <p className="text-xs text-slate-400"><strong>Resolution:</strong> Check if Safaricom callback included fees dynamically. If it's a fee discrepancy, create an Expense/Fee Entry to balance. If a hard error, reverse with an opposite entry and recreate manually.</p>
                                </div>

                                <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
                                    <h4 className="font-bold text-slate-200 mb-2">Scenario 2: Missing in Ledger</h4>
                                    <p className="text-sm text-slate-300 mb-3"><span className="text-rose-400 font-bold">M-PESA:</span> Transaction Confirmed &nbsp; | &nbsp; <span className="text-emerald-400 font-bold">Ledger:</span> No record</p>
                                    <p className="text-xs text-slate-400"><strong>Resolution:</strong> STK Callback likely dropped. Query Safaricom callback logs natively, identify missed ID. Create manual backend entry verified by Reconciliation Officer.</p>
                                </div>

                                <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
                                    <h4 className="font-bold text-slate-200 mb-2">Scenario 3: Missing in M-PESA</h4>
                                    <p className="text-sm text-slate-300 mb-3"><span className="text-rose-400 font-bold">Ledger:</span> Has Entry &nbsp; | &nbsp; <span className="text-emerald-400 font-bold">M-PESA:</span> No Record</p>
                                    <p className="text-xs text-slate-400"><strong>Resolution:</strong> Verify strictly with Safaricom Support. If it never reached their DB, reverse ledger entry entirely. (Don't just delete it. Trace back as reversed).</p>
                                </div>
                            </div>
                        </section>

                        {/* Pitfalls */}
                        <section className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)] border-t-4 border-t-rose-500">
                            <h2 className="text-2xl font-bold text-white mb-6">Pitfalls & Mitigation</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-black/20 rounded-xl p-5 border border-white/5">
                                    <h4 className="font-bold text-white text-[15px] mb-2 flex gap-2"><AlertTriangle className="w-4 h-4 text-rose-500" /> Race Conditions</h4>
                                    <p className="text-sm text-slate-400 mb-2">Two rapid withdrawals check KES 1000 balance simultaneously, then both deduct KES 800 successfully. User spends 1600 from 1000.</p>
                                    <p className="text-sm text-emerald-400 font-medium border-t border-white/10 pt-2 mt-2">Mitigation: Enforce `SELECT FOR UPDATE` table lock rows at Postgres level. Single-threaded BullMQ queuing for payouts.</p>
                                </div>
                                <div className="bg-black/20 rounded-xl p-5 border border-white/5">
                                    <h4 className="font-bold text-white text-[15px] mb-2 flex gap-2"><AlertTriangle className="w-4 h-4 text-rose-500" /> Floating Point Glitches</h4>
                                    <p className="text-sm text-slate-400 mb-2">Float defaults cause `0.1 + 0.2 = 0.300000000004`. Fast forward a year, and 5 users have lost 25 cents.</p>
                                    <p className="text-sm text-emerald-400 font-medium border-t border-white/10 pt-2 mt-2">Mitigation: Use `DECIMAL(19,4)`. Never float. Better yet, store entirely in cents (integer increments) in Postgres.</p>
                                </div>
                                <div className="bg-black/20 rounded-xl p-5 border border-white/5">
                                    <h4 className="font-bold text-white text-[15px] mb-2 flex gap-2"><AlertTriangle className="w-4 h-4 text-rose-500" /> Orphaned Transactions</h4>
                                    <p className="text-sm text-slate-400 mb-2">Callback received, ledger row builds, server crashes before commit. Money reaches bank but not the app ledger.</p>
                                    <p className="text-sm text-emerald-400 font-medium border-t border-white/10 pt-2 mt-2">Mitigation: 2-Phase commits. Write-Ahead-Logging natively via PostgreSQL. 24h caching idempotency keys.</p>
                                </div>
                                <div className="bg-black/20 rounded-xl p-5 border border-white/5">
                                    <h4 className="font-bold text-white text-[15px] mb-2 flex gap-2"><AlertTriangle className="w-4 h-4 text-rose-500" /> Audit Trail Gaps</h4>
                                    <p className="text-sm text-slate-400 mb-2">Dev goes into console and runs `DELETE FROM ledger_entries` to fix a bug. Chain breaks. Regulators immediately suspend license.</p>
                                    <p className="text-sm text-emerald-400 font-medium border-t border-white/10 pt-2 mt-2">Mitigation: Hard rule: never delete, only append Reversals. Auto-trigger hash recalculation to break if deleted.</p>
                                </div>
                            </div>
                        </section>

                    </div>
                </main>
            </div>
        </div>
    );
}
