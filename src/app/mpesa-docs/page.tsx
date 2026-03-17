"use client";

import Link from "next/link";
import Header from "../../components/Header";
import { ArrowLeft, Server, Database, Smartphone, Zap, ShieldAlert, KeyRound, AlertTriangle, Workflow, Clock, Activity, CheckCircle2, TrendingUp, DollarSign, Layers } from "lucide-react";

export default function MpesaDocsPage() {
    return (
        <div className="bg-[#020617] min-h-screen font-sans text-slate-300 relative overflow-auto selection:bg-teal-500/30">
            {/* Background dynamic ambient glow */}
            <div className="fixed top-0 left-[20%] w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none opacity-60"></div>
            <div className="fixed bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none opacity-40"></div>
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
                        <h1 className="font-sans text-4xl md:text-5xl font-extrabold text-white tracking-tight flex items-center gap-4 drop-shadow-md mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-400">
                            M-PESA INTEGRATION
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl font-light">
                            Complete Documentation. The financial backbone powering daily savings & automated disbursements.
                        </p>
                        <div className="mt-6 h-[4px] w-24 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full shadow-[0_0_20px_rgba(20,184,166,0.5)]" />
                    </div>

                    <div className="space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150 fill-mode-both">
                        
                        {/* Executive Summary & Purpose */}
                        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="p-2 rounded-xl bg-teal-500/20 text-teal-400 border border-teal-500/30">
                                        <Zap className="w-5 h-5" />
                                    </span>
                                    Purpose & Scope
                                </h3>
                                <ul className="space-y-4 text-sm">
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(20,184,166,0.8)]" />
                                        <div>
                                            <strong className="text-slate-200 block">Primary Goal:</strong> Automate money collection & disbursement.
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(20,184,166,0.8)]" />
                                        <div>
                                            <strong className="text-slate-200 block">Secondary Goal:</strong> Provide real-time payment verification.
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(20,184,166,0.8)]" />
                                        <div>
                                            <strong className="text-slate-200 block">Tertiary Goal:</strong> Build trust through a transparent ledger.
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)] flex flex-col justify-center">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                                        <KeyRound className="w-5 h-5" />
                                    </span>
                                    Crucial Concept
                                </h3>
                                <div className="p-4 bg-emerald-500/10 border-l-4 border-emerald-500 rounded-r-xl text-sm text-emerald-100/90 leading-relaxed">
                                    <strong className="block text-emerald-400 mb-2">Idempotency is Non-Negotiable</strong>
                                    Network issues happen. Callbacks fire twice. Without idempotency keys (tracking processed transactions), you <strong className="text-white">will</strong> double-charge users and ruin trust. Store ALL raw callbacks and reject processed ones immediately.
                                </div>
                            </div>
                        </section>

                        {/* Money Flow Architecture map */}
                        <section className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)] overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full blur-[80px]" />
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="p-2 rounded-xl bg-teal-500/20 text-teal-400 border border-teal-500/30">
                                    <Workflow className="w-5 h-5" />
                                </span>
                                Money Flow Architecture
                            </h3>
                            <div className="font-mono text-[13px] text-teal-300/80 bg-black/40 p-6 rounded-2xl border border-white/5 overflow-x-auto whitespace-pre">
{`                    ┌─────────────────────────────────┐
                    │         USER'S PHONE            │
                    │    (M-Pesa App/SIM Toolkit)     │
                    └───────────────┬─────────────────┘
                                    │ STK Push
                                    ↓
                    ┌─────────────────────────────────┐
                    │      SAFARICOM M-PESA           │
                    │    ├── STK Push API             │
                    │    ├── Callback Webhook         │
                    │    └── B2C API                  │
                    └───────────────┬─────────────────┘
                                    │
                ┌───────────────────┼───────────────────┐
                ↓                   ↓                   ↓
    ┌─────────────────────┐ ┌─────────────────┐ ┌─────────────────┐
    │  COLLECTION FLOW    │ │ VERIFICATION    │ │ DISBURSEMENT    │
    │  Daily STK Push     │ │ Callback Handler│ │ B2C Transfers   │
    └─────────────────────┘ └─────────────────┘ └─────────────────┘
                ↓                   ↓                   ↓
    ┌──────────────────────────────────────────────────────┐
    │                 ESCROW LEDGER DATABASE               │
    │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ │
    │  │  Inflow  │ │  Outflow │ │ Balance  │ │  Audit   │ │
    │  │ Records  │ │ Records  │ │  per User│ │   Log    │ │
    │  └──────────┘ └──────────┘ └──────────┘ └──────────┘ │
    └──────────────────────────────────────────────────────┘`}
                            </div>
                        </section>

                        {/* Complete Transaction Lifecycle */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Transaction Lifecycle</h2>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                
                                <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl p-6 border border-white/5">
                                    <h4 className="font-bold text-lg text-emerald-400 flex items-center gap-2 mb-4"><Smartphone className="w-5 h-5"/> 1. STK Push (Collection)</h4>
                                    <p className="text-xs text-slate-400 mb-4 bg-black/30 p-2 rounded uppercase tracking-wider font-semibold">Trigger: Daily (e.g., 8 AM)</p>
                                    <ul className="space-y-3 text-sm text-slate-300">
                                        <li><strong>Prep:</strong> Check daily amount, generate <code>BM_DDMMYYYY_USERID</code>.</li>
                                        <li><strong>POST:</strong> Call <code>/mpesa/stkpush/v1</code> with Phone, Amount, CallbackURL.</li>
                                        <li><strong>User:</strong> Sees prompt, inputs PIN.</li>
                                        <li><strong>Accept/Fail:</strong> System logs MerchantRequestID.</li>
                                    </ul>
                                </div>

                                <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl p-6 border border-white/5">
                                    <h4 className="font-bold text-lg text-cyan-400 flex items-center gap-2 mb-4"><Server className="w-5 h-5"/> 2. Callback Processing</h4>
                                    <p className="text-xs text-slate-400 mb-4 bg-black/30 p-2 rounded uppercase tracking-wider font-semibold">Trigger: Async (5-60s later)</p>
                                    <ul className="space-y-3 text-sm text-slate-300">
                                        <li><strong>Receive:</strong> Webhook POST from Safaricom.</li>
                                        <li><strong>Verify:</strong> Check IP and Signature.</li>
                                        <li><strong>Parse:</strong> Read <code>ResultCode</code> (0 = Success). Extract amount and Ref.</li>
                                        <li><strong>Ledger & Pet:</strong> Credit escrow, heal pet, track streak. Notify user!</li>
                                    </ul>
                                </div>

                                <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl p-6 border border-white/5">
                                    <h4 className="font-bold text-lg text-rose-400 flex items-center gap-2 mb-4"><DollarSign className="w-5 h-5"/> 3. B2C (Disbursement)</h4>
                                    <p className="text-xs text-slate-400 mb-4 bg-black/30 p-2 rounded uppercase tracking-wider font-semibold">Trigger: Goal hit or Veto Approved</p>
                                    <ul className="space-y-3 text-sm text-slate-300">
                                        <li><strong>Prep:</strong> Validate escrow balance & limits.</li>
                                        <li><strong>POST:</strong> Call <code>/mpesa/b2c/v1</code> with CommandID: BusinessPayment.</li>
                                        <li><strong>Receive:</strong> Async B2C callback.</li>
                                        <li><strong>Ledger:</strong> Deduct from escrow, mark paid, SMS user.</li>
                                    </ul>
                                </div>

                            </div>
                        </section>

                        {/* Tech Stack & Architecture Requirements */}
                        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="p-2 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30">
                                        <Layers className="w-5 h-5" />
                                    </span>
                                    Tech Stack Details
                                </h3>
                                <div className="space-y-4 text-sm text-slate-300">
                                    <div className="flex justify-between border-b border-white/5 pb-2">
                                        <span className="text-slate-400">Auth</span>
                                        <strong>OAuth2 (Bearer) 1hr Token</strong>
                                    </div>
                                    <div className="flex justify-between border-b border-white/5 pb-2">
                                        <span className="text-slate-400">Database</span>
                                        <strong>PostgreSQL 14+ (Transactions)</strong>
                                    </div>
                                    <div className="flex justify-between border-b border-white/5 pb-2">
                                        <span className="text-slate-400">Cache / Rate Limit</span>
                                        <strong>Redis 6+</strong>
                                    </div>
                                    <div className="flex justify-between border-b border-white/5 pb-2">
                                        <span className="text-slate-400">Queue Worker</span>
                                        <strong>BullMQ (Retries & Hooks)</strong>
                                    </div>
                                    <div className="flex justify-between pb-2">
                                        <span className="text-slate-400">Node Libraries</span>
                                        <strong>axios, bull, cron, winston</strong>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="p-2 rounded-xl bg-amber-500/20 text-amber-500 border border-amber-500/30">
                                        <ShieldAlert className="w-5 h-5" />
                                    </span>
                                    Webhook Security Setup
                                </h3>
                                <ol className="space-y-3 text-sm text-slate-300 list-decimal pl-4">
                                    <li><strong className="text-slate-200">IP Whitelisting:</strong> Reject anything not from 196.201.214.200 or .206.</li>
                                    <li><strong className="text-slate-200">Signature Check:</strong> Verify the encrypted token.</li>
                                    <li><strong className="text-slate-200">Transaction Lookup:</strong> After receiving callback, optionally trigger a status query back to Safaricom to kill replay attacks.</li>
                                    <li><strong className="text-slate-200">Idempotency:</strong> Store <code>MerchantReqID</code> + <code>CheckoutRqID</code> in Redis (24hr). If hit again, return 200 early.</li>
                                </ol>
                            </div>
                        </section>

                        {/* Pros/Cons & Analysis */}
                        <section className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                            <h2 className="text-2xl font-bold text-white mb-8 pb-4 border-b border-white/10">Analysis & Technical Risks</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                                <div>
                                    <h4 className="font-bold text-emerald-400 text-lg mb-4 flex items-center gap-2"><TrendingUp className="w-5 h-5"/> Business & Tech Pros</h4>
                                    <ul className="space-y-3 text-sm text-slate-300">
                                        <li><strong>Direct Reach:</strong> Unrivaled market penetration in Kenya. No bank app needed.</li>
                                        <li><strong>Predictable:</strong> No hidden rolling reserves or unknown card scheme fees.</li>
                                        <li><strong>Trust:</strong> Users trust the green PIN screen natively.</li>
                                        <li><strong>Dev:</strong> Excellent docs, sandbox environment, community wrappers.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-rose-400 text-lg mb-4 flex items-center gap-2"><AlertTriangle className="w-5 h-5"/> Operational & Tech Cons</h4>
                                    <ul className="space-y-3 text-sm text-slate-300">
                                        <li><strong>Reliability:</strong> Webhooks CAN fail or time out. Reconciliation is mandatory.</li>
                                        <li><strong>Complex Errors:</strong> Safaricom API status codes require translation to UX.</li>
                                        <li><strong>Rate Limits:</strong> Blasting 10,000 STK Pushes at exactly 8:00 AM will fail. Must queue.</li>
                                        <li><strong>Float Risk:</strong> B2C needs constant topping up of organization's utility account.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Cost & Scale */}
                        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="p-2 rounded-xl bg-green-500/20 text-green-400 border border-green-500/30">
                                        <DollarSign className="w-5 h-5" />
                                    </span>
                                    Cost Analysis
                                </h3>
                                <ul className="space-y-3 text-sm text-slate-300">
                                    <li><strong className="text-green-300 block mb-1">STK Push (Input)</strong> ~1% + KES 20 per transaction. (e.g., KES 500 save costs KES 25).</li>
                                    <li><strong className="text-green-300 block mb-1">B2C (Output)</strong> KES 45 flat per transfer to registered M-Pesa.</li>
                                    <li className="bg-white/5 p-3 rounded-lg border border-white/10 mt-4">
                                        <strong>Breakeven Example:</strong> Need ~20k active savers to cover a KES 470k monthly OPEX burden.
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="p-2 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30">
                                        <Activity className="w-5 h-5" />
                                    </span>
                                    Key Monitoring Thresholds
                                </h3>
                                <ul className="space-y-3 text-sm text-slate-300">
                                    <li className="flex justify-between"><strong className="text-emerald-400">Uptime System Target</strong> <span>99.9%</span></li>
                                    <li className="flex justify-between"><strong className="text-cyan-400">Callback Receipt Rate</strong> <span>&gt; 99%</span></li>
                                    <li className="flex justify-between"><strong className="text-amber-400">Processing Speed</strong> <span>&lt; 30 sec</span></li>
                                    <li className="flex justify-between pt-2 border-t border-white/10">
                                        <strong className="text-rose-400">PagerDuty Trigger</strong>
                                        <span>STK Success &lt; 95%</span>
                                    </li>
                                </ul>
                            </div>
                        </section>
                        
                    </div>
                </main>
            </div>
        </div>
    );
}
