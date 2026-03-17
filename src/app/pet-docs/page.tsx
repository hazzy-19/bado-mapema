"use client";

import Link from "next/link";
import Header from "../../components/Header";
import { ArrowLeft, Activity, Brain, Shield, Rocket, Target, Layers, CheckCircle2, AlertTriangle, TrendingUp, DollarSign, BarChart } from "lucide-react";

export default function PetDocsPage() {
    return (
        <div className="bg-[#020617] min-h-screen font-sans text-slate-300 relative overflow-auto selection:bg-cyan-500/30">
            {/* Background dynamic ambient glow */}
            <div className="fixed top-0 left-[20%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none opacity-60"></div>
            <div className="fixed bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none opacity-50"></div>
            <div className="fixed top-[40%] left-[-10%] w-[400px] h-[400px] bg-amethyst-500/10 rounded-full blur-[120px] pointer-events-none opacity-40" style={{ backgroundColor: 'rgba(168, 85, 247, 0.08)' }}></div>

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
                        <h1 className="font-sans text-4xl md:text-5xl font-extrabold text-white tracking-tight flex items-center gap-4 drop-shadow-md mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
                            THE PET STATE MACHINE
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl font-light">
                            Complete Documentation. The emotional heart of your app — the reason users will keep coming back.
                        </p>
                        <div className="mt-6 h-[4px] w-24 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.5)]" />
                    </div>

                    <div className="space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150 fill-mode-both">
                        
                        {/* Executive Summary & Purpose */}
                        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                                        <Target className="w-5 h-5" />
                                    </span>
                                    Purpose & Psychology
                                </h3>
                                <ul className="space-y-4 text-sm">
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                                        <div>
                                            <strong className="text-slate-200 block">Primary Goal:</strong> Create emotional attachment to saving habits.
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                                        <div>
                                            <strong className="text-slate-200 block">Secondary Goal:</strong> Visualize discipline in a fun way.
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                                        <div>
                                            <strong className="text-slate-200 block">Tertiary Goal:</strong> Social sharing ("Look at my pet!").
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="p-2 rounded-xl bg-amethyst-500/20 text-amethyst-400 border border-amethyst-500/30" style={{ color: '#a855f7', backgroundColor: 'rgba(168,85,247,0.2)', borderColor: 'rgba(168,85,247,0.3)' }}>
                                        <Brain className="w-5 h-5" />
                                    </span>
                                    The Psychology Behind It
                                </h3>
                                <div className="space-y-4 text-sm text-slate-300">
                                    <p><strong className="text-slate-100">Tamagotchi Effect:</strong> People naturally nurture digital creatures.</p>
                                    <p><strong className="text-slate-100">Loss Aversion:</strong> Losing a pet hurts more than gaining money feels good.</p>
                                    <p><strong className="text-slate-100">Progress Bias:</strong> Users won't abandon something they've built.</p>
                                    <p><strong className="text-slate-100">Social Currency:</strong> Healthy pets become status symbols.</p>
                                    <div className="mt-4 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300">
                                        <strong className="text-rose-400 block mb-1">Psychological Risks:</strong>
                                        Grief Reaction, Anxiety, Detachment. Too much pressure can drive users away.
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Architecture Overview */}
                        <section className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)] overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px]" />
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                                    <Layers className="w-5 h-5" />
                                </span>
                                Architecture Overview
                            </h3>
                            <div className="font-mono text-[13px] text-emerald-300/80 bg-black/40 p-6 rounded-2xl border border-white/5 overflow-x-auto whitespace-pre">
{`┌─────────────────────────────────────┐
│         PET STATE MACHINE           │
├─────────────────────────────────────┤
│                                     │
│   HEALTH STATES                     │
│   ┌─────────┐                       │
│   │ HEALTHY │──┐                    │
│   └─────────┘  │ (miss 1 day)       │
│        ↑       ↓                    │
│        │    ┌──────┐                │
│        └────│ SICK │──┐             │
│        (save)└──────┘  │ (miss 2)   │
│              ↑       ↓              │
│              │    ┌──────────┐      │
│              └────│ CRITICAL │──┐   │
│              (save)└──────────┘ │   │
│                         ↓       │   │
│                     ┌──────┐    │   │
│                     │ DEAD │◄───┘   │
│                     └──────┘(miss 3)│
│                         ↓           │
│                     ┌──────────┐    │
│                     │RESURRECT │    │
│                     └──────────┘    │
└─────────────────────────────────────┘`}
                            </div>
                        </section>

                        {/* Component Breakdown */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Component Breakdown</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                
                                {/* Data Structure */}
                                <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-colors">
                                    <h4 className="font-bold text-lg text-white mb-4">1. Pet Data Structure</h4>
                                    <ul className="space-y-3 text-sm text-slate-300">
                                        <li><strong className="text-cyan-300">Core Identity:</strong> <code>id</code>, <code>userId</code>, <code>name</code>, <code>birthDate</code>, <code>species/type</code>.</li>
                                        <li><strong className="text-emerald-300">Health & Status:</strong> <code>healthState</code>, <code>lastFedAt</code>, <code>consecutiveMisses</code>, <code>totalMisses</code>.</li>
                                        <li><strong className="text-fuchsia-300">Appearance & Ev.:</strong> <code>stage</code>, <code>color</code>, <code>accessories</code>, <code>scars</code>.</li>
                                        <li><strong className="text-orange-300">Personality:</strong> <code>trait</code>, <code>catchphrase</code>, <code>favoriteActivity</code>.</li>
                                        <li><strong className="text-rose-300">Death & Res.:</strong> <code>deathCount</code>, <code>resurrectionHistory</code>, <code>lastDeath</code>.</li>
                                        <li><strong className="text-slate-400">Metadata:</strong> <code>createdAt</code>, <code>updatedAt</code>, <code>lastInteractionAt</code>.</li>
                                    </ul>
                                </div>

                                {/* Rules */}
                                <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-colors">
                                    <h4 className="font-bold text-lg text-white mb-4">2. State Transition Rules</h4>
                                    <div className="space-y-4">
                                        <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20 text-emerald-100 text-sm">
                                            <strong>HEALTHY → SICK:</strong> Miss 1 day of saving OR early withdrawal without guardian.
                                        </div>
                                        <div className="p-3 bg-amber-500/10 rounded-xl border border-amber-500/20 text-amber-100 text-sm">
                                            <strong>SICK → CRITICAL:</strong> Miss again (lasts 24h). Save to recover to HEALTHY.
                                        </div>
                                        <div className="p-3 bg-orange-500/10 rounded-xl border border-orange-500/20 text-orange-100 text-sm">
                                            <strong>CRITICAL → DEAD:</strong> Miss again. Urgent alerts sent to guardian.
                                        </div>
                                        <div className="p-3 bg-rose-500/10 rounded-xl border border-rose-500/20 text-rose-100 text-sm">
                                            <strong>DEAD → HEALTHY:</strong> Only through resurrection mechanics. Progress paused.
                                        </div>
                                    </div>
                                </div>

                                {/* Resurrection */}
                                <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-colors">
                                    <h4 className="font-bold text-lg text-white mb-4">3. Resurrection Mechanics</h4>
                                    <div className="space-y-4 text-sm text-slate-300">
                                        <div className="border-l-2 border-cyan-500 pl-4 py-1">
                                            <strong className="text-cyan-400 block mb-1">Method 1: Pay Fee</strong>
                                            Cost: 50 KES base (doubles each time). Process: M-Pesa. Psychology: "Pain of paying".
                                        </div>
                                        <div className="border-l-2 border-amethyst-500 pl-4 py-1" style={{ borderColor: '#a855f7' }}>
                                            <strong className="text-amethyst-400 block mb-1" style={{ color: '#c084fc' }}>Method 2: Guardian Revive</strong>
                                            Cost: Free. Process: Guardian gets notification, clicks approve. Psychology: Shame is a powerful motivator.
                                        </div>
                                        <div className="border-l-2 border-emerald-500 pl-4 py-1">
                                            <strong className="text-emerald-400 block mb-1">Method 3: Streak Recovery</strong>
                                            Cost: 30 days of streak. Process: Automatic if streak ≥ 30. Psychology: "I earned this" vs "I wasted this".
                                        </div>
                                    </div>
                                </div>

                                {/* Evolution */}
                                <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-colors">
                                    <h4 className="font-bold text-lg text-white mb-4">4. Evolution System</h4>
                                    <ul className="space-y-3 text-sm text-slate-300">
                                        <li><strong>Stage 1 (Birth):</strong> New goal. Baby form.</li>
                                        <li><strong>Stage 2 (Growing):</strong> 30-day streak. Larger, wings/glow. Special animations.</li>
                                        <li><strong>Stage 3 (Mature):</strong> Saved 100,000 KES. Crown, golden aura.</li>
                                        <li><strong>Stage 4 (Legendary):</strong> Complete 5 goals. Rainbow trail. Shareable badge.</li>
                                        <li className="pt-2 border-t border-white/10 mt-2"><strong>Accessories:</strong> Sunglasses (7-day), Hat (1st goal), Scarf (survived critical), Halo (resurrected), Wings (100-day).</li>
                                    </ul>
                                </div>

                            </div>
                        </section>

                        {/* Implementation & Tech */}
                        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="lg:col-span-1 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="p-2 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30">
                                        <Rocket className="w-5 h-5" />
                                    </span>
                                    Tech Stack
                                </h3>
                                <ul className="space-y-4 text-sm text-slate-300">
                                    <li><strong className="text-blue-300 block text-base bg-white/5 px-2 py-1 rounded inline-block mb-1">TypeScript / Node.js</strong>Perfect for state machines, type safety, large ecosystem.</li>
                                    <li><strong className="text-slate-200 block mt-2">Database: PostgreSQL</strong>ACID compliance, JSONB fields, transactions.</li>
                                    <li><strong className="text-slate-200 block mt-2">Cache: Redis</strong>Active pet states, limits, real-time sync.</li>
                                    <li><strong className="text-slate-200 block mt-2">Libraries:</strong>XState, Prisma/Drizzle, Zod, Jest.</li>
                                </ul>
                            </div>
                            <div className="lg:col-span-2 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="p-2 rounded-xl bg-orange-500/20 text-orange-400 border border-orange-500/30">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </span>
                                    Implementation Phases
                                </h3>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold border border-orange-500/30 shrink-0">1</div>
                                        <div>
                                            <strong className="text-white text-lg block mb-1">Foundation (Week 1-2)</strong>
                                            <p className="text-sm text-slate-400">Define State Machine, map all states & triggers. Create Data Models (schema, migrations). Build Core Engine.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold border border-orange-500/30 shrink-0">2</div>
                                        <div>
                                            <strong className="text-white text-lg block mb-1">Integration (Week 3-4)</strong>
                                            <p className="text-sm text-slate-400">Connect to Daily Loop (cron jobs, updates). Add Resurrection methods (MPesa, Guardian, Streak). Evolution system.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold border border-orange-500/30 shrink-0">3</div>
                                        <div>
                                            <strong className="text-white text-lg block mb-1">Polish (Week 5-6)</strong>
                                            <p className="text-sm text-slate-400">Personality Engine (Sheng/English messages), Visual Assets (sprites, animations), Unit & E2E Testing.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Pros/Cons & Pitfalls */}
                        <section className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                            <h2 className="text-2xl font-bold text-white mb-8 pb-4">Analysis & Risks</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                                <div>
                                    <h4 className="font-bold text-emerald-400 text-lg mb-4 flex items-center gap-2"><TrendingUp className="w-5 h-5"/> Strong Pros</h4>
                                    <ul className="space-y-3 text-sm text-slate-300">
                                        <li><strong>Engagement:</strong> Emotional hooks, daily habits, social sharing.</li>
                                        <li><strong>Retention:</strong> Non-abandonment, streak inertia, loyalty rewards.</li>
                                        <li><strong>Differentiation:</strong> Unique in fintech space, high virality.</li>
                                        <li><strong>Data:</strong> Learn patterns, predict churn risks.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-rose-400 text-lg mb-4 flex items-center gap-2"><AlertTriangle className="w-5 h-5"/> Critical Cons</h4>
                                    <ul className="space-y-3 text-sm text-slate-300">
                                        <li><strong>Complexity:</strong> Tricky state machines, deep testing required.</li>
                                        <li><strong>Psych Risk:</strong> Pet death anxiety, quitting.</li>
                                        <li><strong>Dev Cost:</strong> Needs good art, slower initial launch.</li>
                                        <li><strong>Maintenance:</strong> Message updates, balance adjustments over time.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                                    <strong className="text-white block mb-2">Pitfall 1: State Inconsistency</strong>
                                    <p className="text-xs text-slate-400">Solution: Database as Single Source of Truth, optimistic updates, version fields.</p>
                                </div>
                                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                                    <strong className="text-white block mb-2">Pitfall 2: Death Too Harsh</strong>
                                    <p className="text-xs text-slate-400">Solution: Easy first-time resurrection, guardian revive, "New game+" bonuses.</p>
                                </div>
                                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                                    <strong className="text-white block mb-2">Pitfall 3: Too Cutesy for Adults</strong>
                                    <p className="text-xs text-slate-400">Solution: Offer "serious mode" (e.g., plant), frame as discipline companion.</p>
                                </div>
                                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                                    <strong className="text-white block mb-2">Pitfall 4: Notification Fatigue</strong>
                                    <p className="text-xs text-slate-400">Solution: Smart frequency capping, state-change-only alerts, user preferences.</p>
                                </div>
                            </div>
                        </section>

                        {/* Strategy / Guidelines / Metrics */}
                        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Metrics */}
                            <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="p-2 rounded-xl bg-pink-500/20 text-pink-400 border border-pink-500/30">
                                        <BarChart className="w-5 h-5" />
                                    </span>
                                    Success Metrics
                                </h3>
                                <ul className="space-y-4 text-sm text-slate-300">
                                    <li><strong className="text-slate-100">Engagement:</strong> DAU, Pet check-ins, messages screenshot rate.</li>
                                    <li><strong className="text-slate-100">Health:</strong> % pets per state, avg days to death, resurrect methods.</li>
                                    <li><strong className="text-slate-100">Business:</strong> Correlation w/ savings, premium conversion, referrals.</li>
                                    <li className="pt-2 text-rose-300 border-t border-white/10 mt-2"><strong>Warning Signs:</strong> High death rate (&gt;20%), drops after death, negative feedback.</li>
                                </ul>
                            </div>

                            <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="p-2 rounded-xl bg-yellow-500/20 text-yellow-500 border border-yellow-500/30">
                                        <DollarSign className="w-5 h-5" />
                                    </span>
                                    Monetization
                                </h3>
                                <ul className="space-y-4 text-sm text-slate-300">
                                    <li><strong className="text-slate-100">Direct - Premium Pets:</strong> Special species, exclusive colors.</li>
                                    <li><strong className="text-slate-100">Direct - Insurance & Cosmetics:</strong> Prevent death (49 KES/mo), Outfits and decorations.</li>
                                    <li><strong className="text-slate-100">Indirect - Retention:</strong> Pet as loss leader, longer users = more fees.</li>
                                    <li><strong className="text-slate-100">Indirect - Viral Growth:</strong> Challenge friends, group/chama pets.</li>
                                </ul>
                            </div>
                        </section>
                        
                    </div>
                </main>
            </div>
        </div>
    );
}
