"use client";

import Link from "next/link";
import Header from "../../components/Header";
import { ArrowLeft, Target, Brain, Activity, TrendingUp, Shield, BarChart, Trophy, Flame, Zap, Award, Share2, Layers, Goal, LineChart, MessageSquare, Lock, AlertTriangle, Fingerprint, Database, CheckCircle2, Heart, Sparkles, Smile, MessageCircle } from "lucide-react";

export default function PersonalityDocsPage() {
    return (
        <div className="bg-[#020617] min-h-screen font-sans text-slate-300 relative overflow-auto selection:bg-pink-500/30">
            {/* Background dynamic ambient glow */}
            <div className="fixed top-0 left-[20%] w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[120px] pointer-events-none opacity-60"></div>
            <div className="fixed bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[120px] pointer-events-none opacity-40"></div>
            <div className="fixed top-[40%] left-[-10%] w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none opacity-40"></div>

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
                        <h1 className="font-sans text-4xl md:text-5xl font-extrabold text-white tracking-tight flex items-center gap-4 drop-shadow-md mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-violet-400">
                            PET PERSONALITY ENGINE
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl font-light">
                            Complete Documentation. An AI-driven system that gives each user's pet a unique character that evolves based on behavior, building deep emotional attachment.
                        </p>
                        <div className="mt-6 h-[4px] w-24 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full shadow-[0_0_20px_rgba(236,72,153,0.5)]" />
                    </div>

                    <div className="space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150 fill-mode-both">
                        
                        {/* Executive Summary & Purpose */}
                        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="p-2 rounded-xl bg-pink-500/20 text-pink-400 border border-pink-500/30">
                                        <Heart className="w-5 h-5" />
                                    </span>
                                    Purpose & Psychology
                                </h3>
                                <ul className="space-y-4 text-sm">
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(236,72,153,0.8)]" />
                                        <div><strong className="text-slate-200 block">Primary Goal:</strong> Create deep emotional attachment through unique personality.</div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(236,72,153,0.8)]" />
                                        <div><strong className="text-slate-200 block">Secondary Goal:</strong> Reflect user's own behavior back to them.</div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(236,72,153,0.8)]" />
                                        <div><strong className="text-slate-200 block">Tertiary Goal:</strong> Drive engagement through curiosity ("What will my pet say today?").</div>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)] border-t-4 border-t-amber-500 relative overflow-hidden">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3 relative z-10">
                                    <span className="p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                                        <Brain className="w-5 h-5" />
                                    </span>
                                    Attachment Pyramid
                                </h3>
                                <div className="space-y-3 text-[13px] relative z-10 font-mono">
                                    <div className="bg-white/5 border border-white/10 p-2 text-center rounded text-pink-300">▲ LOVE/ATTACHMENT ("I care about THIS pet")</div>
                                    <div className="bg-white/5 border border-white/10 p-2 text-center rounded text-violet-300">▲ RELATIONSHIP ("We understand each other")</div>
                                    <div className="bg-amber-500/20 border border-amber-500/50 p-2 text-center rounded text-amber-200 font-bold shadow-[0_0_15px_rgba(245,158,11,0.2)]">▲ PERSONALITY ("He's sassy/sweet") [ENGINE LIVES HERE]</div>
                                    <div className="bg-white/5 border border-white/10 p-2 text-center rounded text-slate-300">▲ HEALTH STATE ("He's healthy/sick")</div>
                                    <div className="bg-white/5 border border-white/10 p-2 text-center rounded text-slate-400">▲ EXISTENCE ("There is a pet")</div>
                                </div>
                            </div>
                        </section>

                        {/* Personality Archetypes */}
                        <section className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)] border-t-4 border-t-violet-500">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="p-2 rounded-xl bg-violet-500/20 text-violet-400 border border-violet-500/30">
                                    <Smile className="w-5 h-5" />
                                </span>
                                Core Archetypes
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                
                                <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors">
                                    <h4 className="font-bold text-emerald-400 mb-2">1. The Cheerleader</h4>
                                    <div className="text-xs bg-black/40 p-3 rounded mb-3 text-slate-300 italic border border-white/5 hover:border-emerald-500/30 transition-colors">"Wah! Another day, another coin! You're killing it, boss! 🎉"</div>
                                    <ul className="text-xs text-slate-400 space-y-1">
                                        <li>• Optimistic, lots of emojis</li>
                                        <li>• Calls you "boss", "champ"</li>
                                        <li>• Triggers: Consistent saver</li>
                                    </ul>
                                </div>

                                <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors">
                                    <h4 className="font-bold text-rose-400 mb-2">2. The Sassy One</h4>
                                    <div className="text-xs bg-black/40 p-3 rounded mb-3 text-slate-300 italic border border-white/5 hover:border-rose-500/30 transition-colors">"Ehh, you missed yesterday. I'm not mad, just disappointed. 😒"</div>
                                    <ul className="text-xs text-slate-400 space-y-1">
                                        <li>• Sarcastic, uses "..." dramatically</li>
                                        <li>• Eye-rolling energy</li>
                                        <li>• Triggers: Inconsistent, overrides</li>
                                    </ul>
                                </div>

                                <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors">
                                    <h4 className="font-bold text-sky-400 mb-2">3. The Philosopher</h4>
                                    <div className="text-xs bg-black/40 p-3 rounded mb-3 text-slate-300 italic border border-white/5 hover:border-sky-500/30 transition-colors">"Consider this: the KES 500 you save today is tomorrow's freedom. 🧘"</div>
                                    <ul className="text-xs text-slate-400 space-y-1">
                                        <li>• Metaphors, Kenyan proverbs</li>
                                        <li>• Calm, measured tone</li>
                                        <li>• Triggers: Long-term thinker, older</li>
                                    </ul>
                                </div>

                                <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors">
                                    <h4 className="font-bold text-pink-400 mb-2">4. The Baby</h4>
                                    <div className="text-xs bg-black/40 p-3 rounded mb-3 text-slate-300 italic border border-white/5 hover:border-pink-500/30 transition-colors">"Pwease save today? For me? I'll be a good pet! 🥺"</div>
                                    <ul className="text-xs text-slate-400 space-y-1">
                                        <li>• Cutesy ("pwease"), innocent</li>
                                        <li>• Makes you feel protective</li>
                                        <li>• Triggers: New user, young</li>
                                    </ul>
                                </div>

                                <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors">
                                    <h4 className="font-bold text-orange-400 mb-2">5. The Hustler</h4>
                                    <div className="text-xs bg-black/40 p-3 rounded mb-3 text-slate-300 italic border border-white/5 hover:border-orange-500/30 transition-colors">"My guy! Save is done. Now let's talk about that side hustle... 💼"</div>
                                    <ul className="text-xs text-slate-400 space-y-1">
                                        <li>• Business-like, uses Sheng</li>
                                        <li>• Motivational but practical</li>
                                        <li>• Triggers: Entrepreneur type</li>
                                    </ul>
                                </div>

                                <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors">
                                    <h4 className="font-bold text-amber-400 mb-2">6. The Elder</h4>
                                    <div className="text-xs bg-black/40 p-3 rounded mb-3 text-slate-300 italic border border-white/5 hover:border-amber-500/30 transition-colors">"My child, I have seen many savers. You remind me of your grandmother... 👵"</div>
                                    <ul className="text-xs text-slate-400 space-y-1">
                                        <li>• Old stories, wise, patient</li>
                                        <li>• Gentle but firm</li>
                                        <li>• Triggers: Completed many goals</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Evolution */}
                        <section className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                                    <TrendingUp className="w-5 h-5" />
                                </span>
                                Personality Evolution Over Time
                            </h3>
                            
                            <div className="relative border-l-2 border-slate-700/50 ml-4 space-y-8 pb-4">
                                <div className="relative pl-8">
                                    <div className="absolute w-4 h-4 bg-slate-500 rounded-full left-[-9px] top-1 border-[3px] border-[#020617] shadow-[0_0_8px_rgba(100,116,139,0.8)]" />
                                    <h4 className="font-bold text-slate-200">1. Birth (Days 1-7)</h4>
                                    <p className="text-sm text-slate-400 mt-1">Status: <strong className="text-slate-300">UNKNOWN</strong>. Purpose: Collect baseline behavioral data. Default messages. User projects their own expectations.</p>
                                </div>
                                <div className="relative pl-8">
                                    <div className="absolute w-4 h-4 bg-cyan-500 rounded-full left-[-9px] top-1 border-[3px] border-[#020617] shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                                    <h4 className="font-bold text-cyan-300">2. Formation (Weeks 2-4)</h4>
                                    <p className="text-sm text-slate-400 mt-1">Status: <strong className="text-cyan-200">EMERGING</strong>. Analyzes save-times and emotional reactions. Begins leaning toward a specific archetype, testing different tones.</p>
                                </div>
                                <div className="relative pl-8">
                                    <div className="absolute w-4 h-4 bg-violet-500 rounded-full left-[-9px] top-1 border-[3px] border-[#020617] shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
                                    <h4 className="font-bold text-violet-300">3. Stabilization (Months 2-3)</h4>
                                    <p className="text-sm text-slate-400 mt-1">Status: <strong className="text-violet-200">DEFINED</strong>. Highly recognizable voice and characteristics. Inside jokes begin to develop with the user.</p>
                                </div>
                                <div className="relative pl-8">
                                    <div className="absolute w-4 h-4 bg-pink-500 rounded-full left-[-9px] top-1 border-[3px] border-[#020617] shadow-[0_0_8px_rgba(236,72,153,0.8)] animate-pulse" />
                                    <h4 className="font-bold text-pink-300">4. Evolution (Month 4+)</h4>
                                    <p className="text-sm text-slate-400 mt-1">Status: <strong className="text-pink-200">DEEPENING</strong>. Pet references shared history ("Remember day 7?"), mixes archetypes seamlessly, and acts like a genuine old friend.</p>
                                </div>
                            </div>
                        </section>

                        {/* Tone matrix */}
                        <section className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
                                <MessageCircle className="w-5 h-5 text-indigo-400" />
                                Code-Switching & Dialect Routing
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <div className="text-sm text-slate-300 mb-4 bg-indigo-500/10 p-4 border border-indigo-500/20 rounded-xl">
                                        The AI detects preferred languages and routes context dynamically:
                                    </div>
                                    <ul className="text-sm text-slate-400 space-y-4 font-mono">
                                        <li><strong className="text-slate-200">ENGLISH:</strong> Formal, professional. Serious topics.<br/><span className="text-xs opacity-70">"Your completion rate has increased 15%."</span></li>
                                        <li><strong className="text-slate-200">SWAHILI:</strong> Warm, cultural, proverbs.<br/><span className="text-xs opacity-70">"Habari za leo? Umefanikiwa!"</span></li>
                                        <li><strong className="text-slate-200">SHENG:</strong> Youthful, urban, cool slang.<br/><span className="text-xs opacity-70">"Umesave leo? Wueh! Pet yangu anadance!"</span></li>
                                        <li><strong className="text-slate-200 text-indigo-300">MIXED:</strong> Natural code-switching.<br/><span className="text-xs opacity-70">"Boss, umesave tena? You're on fire! 🔥"</span></li>
                                    </ul>
                                </div>
                                
                                <div className="bg-black/30 rounded-xl p-5 border border-white/5 space-y-4">
                                    <h4 className="font-bold text-sm text-rose-300 border-b border-rose-900/50 pb-2">Reaction Matrix (If Pet is CRITICAL)</h4>
                                    <div className="text-xs text-slate-400 space-y-2">
                                        <p><strong className="text-emerald-400">Cheerleader:</strong> "WE NEED YOU! (ok sorry for yelling but please save)"</p>
                                        <p><strong className="text-rose-400">Sassy:</strong> "..."</p>
                                        <p><strong className="text-sky-400">Philosopher:</strong> "This is your moment of truth."</p>
                                        <p><strong className="text-pink-400">Baby:</strong> "I'm scared... pwease don't let me die 🥺"</p>
                                        <p><strong className="text-orange-400">Hustler:</strong> "CRITICAL. NO TIME FOR GAMES. SAVE. NOW."</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Integration logic */}
                        <section className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                            <h2 className="text-2xl font-bold text-white mb-6">Cross-Component Synergy</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-black/20 rounded-xl p-5 border border-white/5">
                                    <h4 className="font-bold text-white text-[15px] mb-2 flex gap-2 items-center"><Award className="w-4 h-4 text-emerald-500" /> + Discipline Score</h4>
                                    <p className="text-sm text-slate-400">
                                        Personality drives the score, and the score drives personality. A High Score makes the pet more confident, whereas Low Scores make it anxious and clingy. The Cheerleader naturally boosts user scores via constant praise.
                                    </p>
                                </div>
                                <div className="bg-black/20 rounded-xl p-5 border border-white/5">
                                    <h4 className="font-bold text-white text-[15px] mb-2 flex gap-2 items-center"><Shield className="w-4 h-4 text-rose-500" /> + Guardian Veto</h4>
                                    <p className="text-sm text-slate-400">
                                        The pet comments on the Guardian's choices. If approved: "Guardian loves you! 🥰" If denied: "Guardian said no... but I'm still on your side! 🤝". Builds intense social-emotional gravity.
                                    </p>
                                </div>
                                <div className="bg-black/20 rounded-xl p-5 border border-white/5">
                                    <h4 className="font-bold text-white text-[15px] mb-2 flex gap-2 items-center"><Sparkles className="w-4 h-4 text-cyan-500" /> + SMS Insights</h4>
                                    <p className="text-sm text-slate-400">
                                        The pet playfully judges M-Pesa statements via Gemini. If Fuliza is used: "Fuliza again? Let's build an emergency fund!" If high food spending: "You've been eating well! Pet is jealous 😋"
                                    </p>
                                </div>
                            </div>
                        </section>
                        
                    </div>
                </main>
            </div>
        </div>
    );
}
