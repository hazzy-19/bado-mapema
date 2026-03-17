"use client";

import Link from "next/link";
import Header from "../../components/Header";
import { ArrowLeft, Target, Brain, Activity, TrendingUp, Shield, BarChart, Trophy, Flame, Zap, Award, Share2, Layers, Goal, LineChart } from "lucide-react";

export default function DisciplineDocsPage() {
    return (
        <div className="bg-[#020617] min-h-screen font-sans text-slate-300 relative overflow-auto selection:bg-indigo-500/30">
            {/* Background dynamic ambient glow */}
            <div className="fixed top-0 left-[20%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none opacity-60"></div>
            <div className="fixed bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none opacity-40"></div>
            <div className="fixed top-[40%] left-[-10%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none opacity-40"></div>

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
                        <h1 className="font-sans text-4xl md:text-5xl font-extrabold text-white tracking-tight flex items-center gap-4 drop-shadow-md mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-sky-400">
                            DISCIPLINE SCORE ENGINE
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl font-light">
                            Complete Documentation. A behavioral scoring system that quantifies user financial discipline into a single number (0-100).
                        </p>
                        <div className="mt-6 h-[4px] w-24 bg-gradient-to-r from-indigo-500 to-sky-500 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.5)]" />
                    </div>

                    <div className="space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150 fill-mode-both">
                        
                        {/* Executive Summary & Purpose */}
                        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                                        <Target className="w-5 h-5" />
                                    </span>
                                    Purpose & Psychology
                                </h3>
                                <ul className="space-y-4 text-sm">
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                                        <div>
                                            <strong className="text-slate-200 block">Primary Goal:</strong> Quantify and reward consistent saving behavior.
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                                        <div>
                                            <strong className="text-slate-200 block">Secondary Goal:</strong> Create motivation through progress tracking.
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                                        <div>
                                            <strong className="text-slate-200 block">Tertiary Goal:</strong> Build data moat for predictive analytics.
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="p-2 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30">
                                        <Brain className="w-5 h-5" />
                                    </span>
                                    Why This Works
                                </h3>
                                <div className="space-y-3 text-sm text-slate-300">
                                    <p><strong className="text-slate-100">Quantified Self:</strong> People love seeing numbers improve.</p>
                                    <p><strong className="text-slate-100">Loss Aversion:</strong> Losing points hurts more than gaining feels good.</p>
                                    <p><strong className="text-slate-100">Status Seeking:</strong> High score becomes identity ("I'm a disciplined person").</p>
                                    <p><strong className="text-slate-100">Goal Gradient Effect:</strong> Closer to 100, harder they try.</p>
                                    <p><strong className="text-slate-100">Streak Psychology:</strong> "Don't break the chain" motivation.</p>
                                </div>
                            </div>
                        </section>

                        {/* Behavioral Model Breakdown */}
                        <section className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)] overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-[80px]" />
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="p-2 rounded-xl bg-sky-500/20 text-sky-400 border border-sky-500/30">
                                    <BarChart className="w-5 h-5" />
                                </span>
                                Score Components Breakdown
                            </h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {/* Consistency */}
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                    <h4 className="font-bold text-lg text-indigo-400 mb-2 flex items-center gap-2">Consistency (40%)</h4>
                                    <p className="text-xs text-slate-400 mb-4 bg-black/30 p-2 rounded uppercase tracking-wider font-semibold">Daily savings adherence</p>
                                    <ul className="text-sm text-slate-300 space-y-2 mb-4">
                                        <li><strong>Calculation:</strong> (Days Saved / Total Days) × 40</li>
                                        <li><strong>Penalties:</strong> Missed day: -1 pt. Partial: -0.5 pt.</li>
                                    </ul>
                                </div>
                                
                                {/* Completion */}
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                    <h4 className="font-bold text-lg text-emerald-400 mb-2 flex items-center gap-2">Completion (30%)</h4>
                                    <p className="text-xs text-slate-400 mb-4 bg-black/30 p-2 rounded uppercase tracking-wider font-semibold">Goals achieved vs abandoned</p>
                                    <ul className="text-sm text-slate-300 space-y-2 mb-4">
                                        <li><strong>Calculation:</strong> (Completed / Total Goals) × 30</li>
                                        <li><strong>Multipliers:</strong> Early: ×1.2. Late: ×0.8. Priority 1: Triple.</li>
                                    </ul>
                                </div>
                                
                                {/* Recovery */}
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                    <h4 className="font-bold text-lg text-amber-400 mb-2 flex items-center gap-2">Recovery (15%)</h4>
                                    <p className="text-xs text-slate-400 mb-4 bg-black/30 p-2 rounded uppercase tracking-wider font-semibold">Bounce back after miss</p>
                                    <ul className="text-sm text-slate-300 space-y-2 mb-4">
                                        <li><strong>Calculation:</strong> (Recoveries / Misses) × 15</li>
                                        <li><strong>Bonus:</strong> Recovery after critical pet state: +2. Perfect score if never missed!</li>
                                    </ul>
                                </div>

                                {/* Social */}
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                    <h4 className="font-bold text-lg text-purple-400 mb-2 flex items-center gap-2">Social (10%)</h4>
                                    <p className="text-xs text-slate-400 mb-4 bg-black/30 p-2 rounded uppercase tracking-wider font-semibold">Guardian health & community</p>
                                    <ul className="text-sm text-slate-300 space-y-2">
                                        <li><strong>Guardian:</strong> Up to 4 pts based on approval %.</li>
                                        <li><strong>Community:</strong> Referrals, Groups, Encouragement.</li>
                                    </ul>
                                </div>

                                {/* Bonus */}
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:col-span-2 lg:col-span-2 flex flex-col justify-center">
                                    <h4 className="font-bold text-lg text-rose-400 mb-2 flex items-center gap-2">Bonus Points (5% + Extra)</h4>
                                    <p className="text-sm text-slate-300">
                                        Awarded for milestones (7, 30, 100 days), Pet evolutions, and special events (no overrides for 90 days). 
                                        Bonus points can push overall score &gt; 100 to show as <strong>100+</strong>.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Streaks */}
                        <section className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="p-2 rounded-xl bg-orange-500/20 text-orange-400 border border-orange-500/30">
                                    <Flame className="w-5 h-5" />
                                </span>
                                The Streak System
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <ul className="space-y-4">
                                        <li className="bg-white/5 p-4 rounded-xl border border-white/5">
                                            <strong className="text-orange-400 flex items-center gap-2 mb-1"><Flame className="w-4 h-4" /> Saving Streak</strong>
                                            <p className="text-sm text-slate-400">Consecutive days saved. Resets to 0 if missed. Rewards at 7, 30, 100 days.</p>
                                        </li>
                                        <li className="bg-white/5 p-4 rounded-xl border border-white/5">
                                            <strong className="text-yellow-400 flex items-center gap-2 mb-1"><Target className="w-4 h-4" /> Perfect Week Streak</strong>
                                            <p className="text-sm text-slate-400">7 days saved in a week. Resets on any miss in the week.</p>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <ul className="space-y-4">
                                        <li className="bg-white/5 p-4 rounded-xl border border-white/5">
                                            <strong className="text-cyan-400 flex items-center gap-2 mb-1"><Trophy className="w-4 h-4" /> Goal Completion Streak</strong>
                                            <p className="text-sm text-slate-400">Consecutive goals completed without failure or abandon.</p>
                                        </li>
                                        <li className="bg-white/5 p-4 rounded-xl border border-white/5">
                                            <strong className="text-emerald-400 flex items-center gap-2 mb-1"><Shield className="w-4 h-4" /> No-Override Streak</strong>
                                            <p className="text-sm text-slate-400">Days without burning bridge. Increases guardian trust score.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="mt-8 bg-black/30 p-6 rounded-xl border border-white/10">
                                <h4 className="font-bold text-slate-200 mb-3 text-sm tracking-widest uppercase">Decay Rules</h4>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                                    <div>
                                        <strong className="text-rose-400">Miss One Day:</strong>
                                        <p className="text-slate-400 mt-1">Saving streak → 0. Perfect week lost. No-override continues.</p>
                                    </div>
                                    <div>
                                        <strong className="text-rose-500">Miss Three Days:</strong>
                                        <p className="text-slate-400 mt-1">All streaks affected. Pet critical. <strong>Score Penalty: -5</strong>.</p>
                                    </div>
                                    <div>
                                        <strong className="text-red-500">Use Override:</strong>
                                        <p className="text-slate-400 mt-1">No-override streak → 0. <strong>Score Penalty: -20</strong>.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Achievement Tiers */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Trophy Achievements</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                                <div className="bg-amber-700/10 border border-amber-700/30 rounded-2xl p-5 text-center shadow-[0_4px_16px_rgba(180,83,9,0.1)]">
                                    <div className="w-12 h-12 rounded-full bg-amber-700/20 text-amber-600 flex items-center justify-center mx-auto mb-3"><Award className="w-6 h-6"/></div>
                                    <h4 className="font-bold text-amber-500 mb-2">Bronze Base</h4>
                                    <p className="text-xs text-slate-400">First Save. 7-Day Streak. First Pet. Guardian Added.</p>
                                </div>
                                <div className="bg-slate-300/10 border border-slate-300/30 rounded-2xl p-5 text-center shadow-[0_4px_16px_rgba(203,213,225,0.1)]">
                                    <div className="w-12 h-12 rounded-full bg-slate-300/20 text-slate-300 flex items-center justify-center mx-auto mb-3"><Award className="w-6 h-6"/></div>
                                    <h4 className="font-bold text-slate-300 mb-2">Silver Steps</h4>
                                    <p className="text-xs text-slate-400">30-Day Streak. Goal Master. Pet Stage 2. Friend Referral.</p>
                                </div>
                                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-5 text-center shadow-[0_4px_16px_rgba(234,179,8,0.1)]">
                                    <div className="w-12 h-12 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center mx-auto mb-3"><Award className="w-6 h-6"/></div>
                                    <h4 className="font-bold text-yellow-500 mb-2">Gold Grade</h4>
                                    <p className="text-xs text-slate-400">100-Day Streak. KES 100K Saved. Pet Stage 3. Perfect Month.</p>
                                </div>
                                <div className="bg-cyan-200/5 border border-cyan-200/20 rounded-2xl p-5 text-center shadow-[0_4px_16px_rgba(165,243,252,0.1)]">
                                    <div className="w-12 h-12 rounded-full bg-cyan-200/10 text-cyan-200 flex items-center justify-center mx-auto mb-3"><Award className="w-6 h-6"/></div>
                                    <h4 className="font-bold text-cyan-200 mb-2">Platinum Peak</h4>
                                    <p className="text-xs text-slate-400">365-Day Streak. KES 500K Saved. Perfect Quarter.</p>
                                </div>
                                <div className="bg-fuchsia-500/10 border border-fuchsia-500/30 rounded-2xl p-5 text-center shadow-[0_4px_16px_rgba(217,70,239,0.1)] sm:col-span-2 lg:col-span-1">
                                    <div className="w-12 h-12 rounded-full bg-fuchsia-500/20 text-fuchsia-500 flex items-center justify-center mx-auto mb-3"><Award className="w-6 h-6"/></div>
                                    <h4 className="font-bold text-fuchsia-500 mb-2">Legendary</h4>
                                    <p className="text-xs text-slate-400">1000-Day Streak. Top 1% Hall of Fame. Max Evolutions.</p>
                                </div>
                            </div>
                        </section>

                        {/* Integration Loop & Architecture */}
                        <section className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="p-2 rounded-xl bg-teal-500/20 text-teal-400 border border-teal-500/30">
                                    <Layers className="w-5 h-5" />
                                </span>
                                System Integrations
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-bold text-slate-200 mb-4 border-b border-white/5 pb-2">Pet Interplay</h4>
                                    <ul className="text-sm text-slate-300 space-y-2">
                                        <li><strong>High Score (&gt;80):</strong> Pet is deeply happy, evolves faster.</li>
                                        <li><strong>Medium (50-80):</strong> Content status quo.</li>
                                        <li><strong>Drop &gt;20 points:</strong> Pet depressed model triggers.</li>
                                        <li><strong>Pet Death:</strong> Inflicts a heavy -20 score penalty.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-200 mb-4 border-b border-white/5 pb-2">Guardian Dynamics</h4>
                                    <ul className="text-sm text-slate-300 space-y-2">
                                        <li><strong>High Score:</strong> Guardian auto-approval thresholds extended.</li>
                                        <li><strong>Approval/Denial:</strong> Fairness adjustments to Social Score algorithm.</li>
                                        <li><strong>Guardian Veto Override:</strong> Hard -20 score dive, breaks no-override streak.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Analytics & Real-World Use Cases */}
                        <section className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                            <h2 className="text-2xl font-bold text-white mb-6">Predictive Behavioral Models (ML/AI)</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="border-l-2 border-indigo-500 pl-4 py-2">
                                    <strong className="text-indigo-400 block mb-1 font-semibold">Churn Prediction</strong>
                                    <p className="text-xs text-slate-300">Monitors score trends (last 30d). Plunging score isolates churning users. Triggers "Score Coach" or SMS motivation.</p>
                                </div>
                                <div className="border-l-2 border-emerald-500 pl-4 py-2">
                                    <strong className="text-emerald-400 block mb-1 font-semibold">Goal Completion Algo</strong>
                                    <p className="text-xs text-slate-300">Current score + historical hit rate cross-references the goal's KES size to estimate success probability.</p>
                                </div>
                                <div className="border-l-2 border-rose-500 pl-4 py-2">
                                    <strong className="text-rose-400 block mb-1 font-semibold">Override Risk</strong>
                                    <p className="text-xs text-slate-300">Identifies impulsive users. Low consistency score heavily correlates to "burn-the-bridge" vetos leading to Guardian alerts.</p>
                                </div>
                            </div>
                        </section>

                        {/* Pitfalls */}
                        <section className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                            <h2 className="text-2xl font-bold text-white mb-6">Pitfalls & Mitigation</h2>
                            <div className="space-y-4">
                                <div className="bg-black/20 rounded-xl p-5 border border-white/5">
                                    <h4 className="font-bold text-white text-[15px] mb-2">1. Score Anxiety ("Perfect or Nothing")</h4>
                                    <p className="text-sm text-slate-400 mb-2">Users obsessed with minor fluctuations will ragequit after 1 miss.</p>
                                    <p className="text-sm text-emerald-400 font-medium">Mitigation: Add "Rest Days", emphasize Recovery stats over raw hits, show 7-day moving averages.</p>
                                </div>
                                <div className="bg-black/20 rounded-xl p-5 border border-white/5">
                                    <h4 className="font-bold text-white text-[15px] mb-2">2. Gaming the Algorithms</h4>
                                    <p className="text-sm text-slate-400 mb-2">Saving KES 1 just to trick the streak sequence.</p>
                                    <p className="text-sm text-emerald-400 font-medium">Mitigation: Enforce minimum meaningful saves (e.g. KES 100 base) to trigger streaks. Verify referral behaviors.</p>
                                </div>
                                <div className="bg-black/20 rounded-xl p-5 border border-white/5">
                                    <h4 className="font-bold text-white text-[15px] mb-2">3. DB Scale Operations</h4>
                                    <p className="text-sm text-slate-400 mb-2">Recalculating score variables for millions at midnight crushes servers.</p>
                                    <p className="text-sm text-emerald-400 font-medium">Mitigation: Redis queuing, Background workers (BullMQ), TSDB (TimescaleDB) specifically for aggregation tracking.</p>
                                </div>
                            </div>
                        </section>

                    </div>
                </main>
            </div>
        </div>
    );
}
