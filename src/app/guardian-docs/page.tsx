"use client";

import Link from "next/link";
import Header from "../../components/Header";
import { ArrowLeft, Shield, Users, Lock, Target, Brain, Anchor, Activity, FileText, CheckCircle2, AlertTriangle, Eye, ShieldCheck, Key, Settings, MessageSquare, TrendingUp, DollarSign } from "lucide-react";

export default function GuardianDocsPage() {
    return (
        <div className="bg-[#020617] min-h-screen font-sans text-slate-300 relative overflow-auto selection:bg-rose-500/30">
            {/* Background dynamic ambient glow */}
            <div className="fixed top-0 left-[20%] w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-[120px] pointer-events-none opacity-60"></div>
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
                        <h1 className="font-sans text-4xl md:text-5xl font-extrabold text-white tracking-tight flex items-center gap-4 drop-shadow-md mb-4 bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-orange-400">
                            GUARDIAN / VETO SYSTEM
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl font-light">
                            Complete Documentation. A social accountability mechanism that creates a friction point preventing impulse spending while keeping user autonomy.
                        </p>
                        <div className="mt-6 h-[4px] w-24 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full shadow-[0_0_20px_rgba(225,29,72,0.5)]" />
                    </div>

                    <div className="space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150 fill-mode-both">
                        
                        {/* Executive Summary & Purpose */}
                        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="p-2 rounded-xl bg-orange-500/20 text-orange-400 border border-orange-500/30">
                                        <Target className="w-5 h-5" />
                                    </span>
                                    Purpose & Psychology
                                </h3>
                                <ul className="space-y-4 text-sm">
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
                                        <div>
                                            <strong className="text-slate-200 block">Primary Goal:</strong> Prevent impulsive early withdrawals.
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
                                        <div>
                                            <strong className="text-slate-200 block">Secondary Goal:</strong> Create social accountability.
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
                                        <div>
                                            <strong className="text-slate-200 block">Tertiary Goal:</strong> Build community/family financial wellness.
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="p-2 rounded-xl bg-rose-500/20 text-rose-400 border border-rose-500/30">
                                        <Brain className="w-5 h-5" />
                                    </span>
                                    The Psychology Behind It
                                </h3>
                                <div className="space-y-4 text-sm text-slate-300">
                                    <p><strong className="text-slate-100">Social Pressure:</strong> People behave better when watched.</p>
                                    <p><strong className="text-slate-100">Shared Responsibility:</strong> Guardian feels invested in user's success.</p>
                                    <p><strong className="text-slate-100">Loss Aversion:</strong> Losing a pet + disappointing someone you trust.</p>
                                    <p><strong className="text-slate-100">Ulysses Pact:</strong> Bind yourself to good decisions.</p>
                                </div>
                            </div>
                        </section>

                        {/* Guardian Roles */}
                        <section className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                                    <Users className="w-5 h-5" />
                                </span>
                                Guardian Roles & Dynamics
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                                    <strong className="text-cyan-400 flex items-center gap-2 mb-2"><ShieldCheck className="w-4 h-4"/> Primary Guardian</strong>
                                    <p className="text-xs text-slate-300">One per user. Receives all alerts, approves/denies withdrawals. (Parent, spouse, best friend)</p>
                                </div>
                                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                                    <strong className="text-blue-400 flex items-center gap-2 mb-2"><Anchor className="w-4 h-4"/> Backup Guardian</strong>
                                    <p className="text-xs text-slate-300">Optional second guardian. Only contacted if primary unavailable. Same powers.</p>
                                </div>
                                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                                    <strong className="text-emerald-400 flex items-center gap-2 mb-2"><Eye className="w-4 h-4"/> Emergency Contact</strong>
                                    <p className="text-xs text-slate-300">The bypass. Cannot approve/deny, but gets notified of overrides. (Mentor, religious leader)</p>
                                </div>
                            </div>
                        </section>

                        {/* Workflow Map */}
                        <section className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)] overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-[80px]" />
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                                    <Lock className="w-5 h-5" />
                                </span>
                                The Veto Protocol
                            </h3>
                            <div className="font-mono text-[13px] text-amber-300/80 bg-black/40 p-6 rounded-2xl border border-white/5 overflow-x-auto whitespace-pre">
{`USER WANTS TO WITHDRAW EARLY
           ↓
┌─────────────────────────────┐
│ CHECK 1: Is targetDate met? │
└─────────────────────────────┘
           ↓
        YES → Auto-approve (goal complete)
           ↓
         NO → Continue to Guardian
           ↓
┌─────────────────────────────┐
│    GENERATE GUARDIAN URL    │
│    (JWT-secured, 24hr)      │
└─────────────────────────────┘
           ↓
┌─────────────────────────────┐
│    GUARDIAN DECISION        │
└─────────────────────────────┘
     ↓                    ↓
┌──────────┐      ┌──────────┐
│  APPROVE │      │   DENY   │
└──────────┘      └──────────┘
     ↓                    ↓
Funds released    User notified
Pet unaffected    User can override
                     ↓
           ┌─────────────────────┐
           │   OVERRIDE OPTIONS  │
           │   ├─ Burn the Bridge│
           │   └─ Wait & ask again│
           └─────────────────────┘`}
                            </div>
                        </section>

                        {/* Structures */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Component Breakdown</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                
                                <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-colors col-span-1 lg:col-span-1">
                                    <h4 className="font-bold text-lg text-white mb-4">1. Guardian Record</h4>
                                    <ul className="space-y-2 text-sm text-slate-300">
                                        <li><strong className="text-cyan-300">Identity:</strong> <code>id</code>, <code>userId</code>, <code>guardianId</code>, <code>phone</code>, <code>priority</code></li>
                                        <li><strong className="text-emerald-300">Permissions:</strong> <code>canApprove</code>, <code>canViewBalance</code>, <code>canOverride</code></li>
                                        <li><strong className="text-orange-300">Stats:</strong> <code>approvals</code>, <code>denials</code>, <code>responseAvg</code></li>
                                        <li><strong className="text-fuchsia-300">Settings:</strong> <code>notifications</code>, <code>quietHours</code></li>
                                    </ul>
                                </div>

                                <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-colors col-span-1 lg:col-span-1">
                                    <h4 className="font-bold text-lg text-white mb-4">2. Withdrawal Request</h4>
                                    <ul className="space-y-2 text-sm text-slate-300">
                                        <li><strong className="text-blue-300">Request:</strong> <code>id</code>, <code>userId</code>, <code>goalId</code>, <code>amount</code>, <code>reason</code>, <code>urgency</code></li>
                                        <li><strong className="text-rose-300">Status:</strong> pending, approved, denied, expired, overridden</li>
                                        <li><strong className="text-amber-300">Flow:</strong> <code>notifiedAt</code>, <code>respondedAt</code>, <code>backupResponse</code></li>
                                        <li><strong className="text-slate-400">Override:</strong> <code>method</code>, <code>penaltyApplied</code></li>
                                    </ul>
                                </div>

                                <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-colors col-span-1 md:col-span-2 lg:col-span-1">
                                    <h4 className="font-bold text-lg text-white mb-4 flex items-center gap-2"><Key className="w-5 h-5 text-indigo-400"/> 3. JWT Token</h4>
                                    <div className="space-y-3 text-sm text-slate-300">
                                        <p>Secure single-use token embedded in URLs.</p>
                                        <div className="p-3 bg-indigo-500/10 rounded-xl border border-indigo-500/20 text-indigo-200 text-xs font-mono">
                                            "exp": 24 hours<br/>
                                            "requestId": "wd_..."<br/>
                                            "guardianId": "usr_..."<br/>
                                            "permissions": ["approve"]
                                        </div>
                                        <p className="text-xs">Bound strictly to the specific request and guardian.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Experience Design */}
                        <section className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="p-2 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30">
                                    <MessageSquare className="w-5 h-5" />
                                </span>
                                Guardian Experience Flow
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-bold text-slate-200 mb-4 border-b border-white/5 pb-2">SMS Communication</h4>
                                    <div className="space-y-3">
                                        <div className="p-4 bg-slate-800 rounded-lg text-slate-300 text-sm font-mono leading-relaxed border border-slate-700">
                                            "John needs KES 5,000 from 'Rent' goal. Reason: Car repair. Approve/Deny: bado.co.ke/g/Abc123"
                                        </div>
                                        <div className="p-4 bg-slate-800 rounded-lg text-slate-300 text-sm font-mono leading-relaxed border border-slate-700">
                                            "Reminder: John's request expires in 18hrs. bado.co.ke/g/Abc123"
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-200 mb-4 border-b border-white/5 pb-2">Web Dashboard View</h4>
                                    <ul className="text-sm text-slate-300 space-y-2">
                                        <li>Shows the requested amount, reason & urgency.</li>
                                        <li>Shows user's exact streak, days left to goal, and Pet Status.</li>
                                        <li>Two big action buttons: <strong>[APPROVE]</strong> or <strong>[DENY]</strong>.</li>
                                        <li>Feedback input: Optional message returned to user.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Scenarios & Edge Cases */}
                        <section className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                            <h2 className="text-2xl font-bold text-white mb-6">Workflow Scenarios</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="border-l-2 border-emerald-500 pl-4 py-2">
                                    <strong className="text-emerald-400 block mb-1">Scenario 1: Responsible Request (Approval)</strong>
                                    <p className="text-sm text-slate-300">Car breaks down → requests reasonable amount → Guardian sees healthy pet & streak → Approves. Money disbursed within 2 hrs. Pet unaffected.</p>
                                </div>
                                <div className="border-l-2 border-amber-500 pl-4 py-2">
                                    <strong className="text-amber-400 block mb-1">Scenario 2: Impulsive Request (Denied)</strong>
                                    <p className="text-sm text-slate-300">Requests KES 50k for iPhone from rent goal → Guardian denies with message "Rent first". User warned of penalities if they override.</p>
                                </div>
                                <div className="border-l-2 border-rose-500 pl-4 py-2">
                                    <strong className="text-rose-400 block mb-1">Scenario 3: The Override (Burn the Bridge)</strong>
                                    <p className="text-sm text-slate-300">User overrides denial → Disburses money but Pet gets SICK instantly, Discipline -20, streak fully resets to 0. Guardian notified.</p>
                                </div>
                                <div className="border-l-2 border-slate-500 pl-4 py-2">
                                    <strong className="text-slate-400 block mb-1">Scenario 4: Guardian Unavailable</strong>
                                    <p className="text-sm text-slate-300">Request 2 AM → No response for 12 hours → Escalate to backup guardian. After 24hrs total, request expires.</p>
                                </div>
                            </div>
                        </section>
                        
                    </div>
                </main>
            </div>
        </div>
    );
}
