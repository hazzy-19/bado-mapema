"use client";

import Link from "next/link";
import Header from "../../components/Header";
import { ArrowLeft, Target, Brain, Activity, TrendingUp, Shield, BarChart, Trophy, Flame, Zap, Award, Share2, Layers, Goal, LineChart, MessageSquare, Lock, AlertTriangle, Fingerprint, Database, CheckCircle2 } from "lucide-react";

export default function SmsDocsPage() {
    return (
        <div className="bg-[#020617] min-h-screen font-sans text-slate-300 relative overflow-auto selection:bg-indigo-500/30">
            {/* Background dynamic ambient glow */}
            <div className="fixed top-0 left-[20%] w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-[120px] pointer-events-none opacity-60"></div>
            <div className="fixed bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none opacity-40"></div>
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
                        <h1 className="font-sans text-4xl md:text-5xl font-extrabold text-white tracking-tight flex items-center gap-4 drop-shadow-md mb-4 bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-indigo-400">
                            SMS PARSER & GEMINI AI
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl font-light">
                            Complete Documentation. An AI-powered system that analyzes an M-Pesa SMS backlog to calculate Burn Rates and predict Success Probability.
                        </p>
                        <div className="mt-6 h-[4px] w-24 bg-gradient-to-r from-rose-500 to-indigo-500 rounded-full shadow-[0_0_20px_rgba(244,63,94,0.5)]" />
                    </div>

                    <div className="space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150 fill-mode-both">
                        
                        {/* Executive Summary & Purpose */}
                        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="p-2 rounded-xl bg-rose-500/20 text-rose-400 border border-rose-500/30">
                                        <Target className="w-5 h-5" />
                                    </span>
                                    Strategic Purpose
                                </h3>
                                <ul className="space-y-4 text-sm">
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(244,63,94,0.8)]" />
                                        <div><strong className="text-slate-200 block">Primary Goal:</strong> Understand the user's complete financial picture.</div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(244,63,94,0.8)]" />
                                        <div><strong className="text-slate-200 block">Secondary Goal:</strong> Provide predictive insights about goal success.</div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(244,63,94,0.8)]" />
                                        <div><strong className="text-slate-200 block">Tertiary Goal:</strong> Build personalized coaching based on spending patterns.</div>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="p-2 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30">
                                        <Brain className="w-5 h-5" />
                                    </span>
                                    Why This Is Genius
                                </h3>
                                <div className="space-y-3 text-sm text-slate-300">
                                    <p><strong className="text-slate-100">Data Moat:</strong> Most fintechs only see money in their system. You see ALL M-Pesa transactions. This creates an un-copyable advantage.</p>
                                    <p><strong className="text-slate-100">User Value:</strong> No manual entry required. "How am I REALLY doing?" answered instantly with zero friction.</p>
                                    <p><strong className="text-slate-100">Business Value:</strong> Predict churn before it happens, create risk profiles for lending, and identify upselling opportunities.</p>
                                </div>
                            </div>
                        </section>

                        {/* What The SMS Parser Analyzes */}
                        <section className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                                    <MessageSquare className="w-5 h-5" />
                                </span>
                                Input / Output Parsing Matrix
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-black/30 rounded-2xl p-6 border border-white/5">
                                    <h4 className="font-bold text-indigo-400 mb-4 border-b border-indigo-500/20 pb-2">RAW INPUT TRACES</h4>
                                    <div className="space-y-4 text-xs font-mono text-slate-400">
                                        <div>
                                            <span className="text-rose-400 fw-bold">PAYMENTS:</span><br/>
                                            "KES 2,500.00 sent to TILL NUMBER 523456 for Nairobi Supermarket on 15/3/24 at 6:15 PM New M-PESA balance is KES 700.00"
                                        </div>
                                        <div>
                                            <span className="text-emerald-400 fw-bold">RECEIPTS:</span><br/>
                                            "KES 15,000.00 received from JOHN OTIENO on 15/3/24 at 2:00 PM New M-PESA balance is KES 15,700.00"
                                        </div>
                                        <div>
                                            <span className="text-purple-400 fw-bold">FULIZA (DEBT):</span><br/>
                                            "Fuliza loan of KES 500.00 taken on 15/3/24 at 9:00 AM. Repay by 25/3/24 to avoid charges"
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-indigo-950/20 rounded-2xl p-6 border border-indigo-500/20">
                                    <h4 className="font-bold text-indigo-300 mb-4 border-b border-indigo-500/20 pb-2">STRUCTURED OUTPUT</h4>
                                    <ul className="text-sm text-slate-300 space-y-2">
                                        <li><strong>Parsed Tx:</strong> Type, Amount, Timestamp, Counterparty, Categorical Tag, Post-Balance.</li>
                                        <li><strong>Batch Summary:</strong> Total Inflow, Total Outflow, Net Flow, Transaction Volume.</li>
                                        <li><strong>Category Breakdown:</strong> Food, Transport, Utilities, Savings, Shopping (calculated weekly).</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Burn Rate */}
                        <section className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="p-2 rounded-xl bg-orange-500/20 text-orange-400 border border-orange-500/30">
                                    <Flame className="w-5 h-5" />
                                </span>
                                The Burn Rate Engine
                            </h3>
                            <div className="mb-6 p-4 bg-orange-500/10 border border-orange-500/20 rounded-xl text-orange-200 text-sm">
                                <strong>Formula:</strong> (Total Outflow - Savings - Essentials) / Days<br/>
                                <em>Represents average daily spending (excluding investments + fixed costs) to measure true spending velocity.</em>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center shadow">
                                    <div className="text-4xl font-bold text-emerald-400 mb-2">10</div>
                                    <h4 className="font-bold text-slate-200 border-b border-white/10 pb-2 mb-2">Optimal</h4>
                                    <p className="text-xs text-slate-400">Burn &lt; 30% of income. Savings &gt; 20%. No Fuliza.</p>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center shadow">
                                    <div className="text-4xl font-bold text-blue-400 mb-2">7-9</div>
                                    <h4 className="font-bold text-slate-200 border-b border-white/10 pb-2 mb-2">Healthy</h4>
                                    <p className="text-xs text-slate-400">Burn 30-50% of income. Occasional splurges.</p>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center shadow">
                                    <div className="text-4xl font-bold text-amber-400 mb-2">4-6</div>
                                    <h4 className="font-bold text-slate-200 border-b border-white/10 pb-2 mb-2">Warning</h4>
                                    <p className="text-xs text-slate-400">Burn 50-70%. Erratic spending. Savings drop &lt; 10%.</p>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center shadow">
                                    <div className="text-4xl font-bold text-rose-500 mb-2">1-3</div>
                                    <h4 className="font-bold text-slate-200 border-b border-white/10 pb-2 mb-2">Dangerous</h4>
                                    <p className="text-xs text-slate-400">Burn &gt; 70%. Constant Fuliza usage. Late bills.</p>
                                </div>
                            </div>
                        </section>

                        {/* Gemini Implementation specifics */}
                        <section className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)] relative overflow-hidden">
                            <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]" />
                            <h2 className="text-2xl font-bold text-white mb-6 relative z-10 flex items-center gap-3">
                                Gemini AI Intelligence Layer
                                <SparklesIcon className="w-5 h-5 text-cyan-400" />
                            </h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                                <div>
                                    <h4 className="font-bold text-cyan-300 mb-4 flex items-center gap-2 border-b border-cyan-900 pb-2">Why Gemini 1.5?</h4>
                                    <ul className="text-sm text-slate-300 space-y-3">
                                        <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-cyan-500 mt-0.5"/> <strong>Massive Context:</strong> Can process months of SMS backlog (1M tokens).</li>
                                        <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-cyan-500 mt-0.5"/> <strong>Kenyan Context:</strong> Understands Sheng out of the box ("umeshika", "kula", Till, Paybill conventions).</li>
                                        <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-cyan-500 mt-0.5"/> <strong>Cost Economics:</strong> Highly cost-effective at scale compared to GPT-4 context windows.</li>
                                        <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-cyan-500 mt-0.5"/> <strong>Fast Inference:</strong> &lt;500ms response targets for real-time dashboards.</li>
                                    </ul>
                                </div>
                                
                                <div className="bg-black/40 rounded-xl p-4 font-mono text-xs text-slate-400 border border-slate-800">
                                    <div className="text-slate-500 mb-2">// Sample Output Node</div>
                                    <div className="text-emerald-400">"successProbability": &#123;</div>
                                    <div className="pl-4">"score": 65,</div>
                                    <div className="pl-4">"confidence": "medium",</div>
                                    <div className="pl-4 text-purple-400">"factors": &#123;</div>
                                    <div className="pl-8">"positive": ["consistent daily saves", "guardian support"],</div>
                                    <div className="pl-8 text-rose-400">"negative": ["rising food spending", "Fuliza usage"]</div>
                                    <div className="pl-4 text-purple-400">&#125;,</div>
                                    <div className="pl-4 text-sky-400">"recommendation": "Reduce eating out by KES 200/day to save extra KES 6,000/month"</div>
                                    <div className="text-emerald-400">&#125;</div>
                                </div>
                            </div>
                        </section>

                        {/* Privacy & Security */}
                        <section className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)] border-t-4 border-t-amber-500">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                                    <Shield className="w-5 h-5" />
                                </span>
                                Privacy & Security Architecture
                            </h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-bold text-slate-200 mb-4 border-b border-white/5 pb-2">The Consent Flow</h4>
                                    <ul className="text-sm text-slate-300 space-y-3">
                                        <li><strong>Radical Transparency:</strong> Plain text UI explaining we need to calculate burn rates, find savings opportunities, and alert to unusual spending.</li>
                                        <li><strong>Hard Guarantees:</strong> Never read personal texts. No advertising targets. Never sell individual data.</li>
                                        <li><strong>Granular Tiers:</strong> Level 1 (30 day history cache) up to Level 3 (7 year retention for strict analytics).</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-200 mb-4 border-b border-white/5 pb-2">Data Protection (DPA 2019)</h4>
                                    <ul className="text-sm text-slate-300 space-y-3">
                                        <li><strong className="text-amber-400">Encryption:</strong> AES-256 at rest, TLS 1.3 in transit. End-to-end to DB.</li>
                                        <li><strong className="text-amber-400">Anonymization:</strong> Immediate stripping of names and secondary phone numbers via hashing before DB hit.</li>
                                        <li><strong className="text-amber-400">Retention:</strong> Raw SMS dropped after 30 days. Only parsed categorized JSON arrays persist.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Pitfalls */}
                        <section className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                            <h2 className="text-2xl font-bold text-white mb-6">Pitfalls & Mitigation</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-black/20 rounded-xl p-5 border border-white/5">
                                    <h4 className="font-bold text-white text-[15px] mb-2 flex gap-2"><AlertTriangle className="w-4 h-4 text-rose-500" /> AI Hallucinations</h4>
                                    <p className="text-sm text-slate-400 mb-2">Gemini occasionally making up transactions or mis-categorizing items entirely.</p>
                                    <p className="text-sm text-emerald-400 font-medium border-t border-white/10 pt-2 mt-2">Mitigation: Confidence thresholds. Hide &lt;90% confidence results. A/B test vs rule-based Regex engine.</p>
                                </div>
                                <div className="bg-black/20 rounded-xl p-5 border border-white/5">
                                    <h4 className="font-bold text-white text-[15px] mb-2 flex gap-2"><AlertTriangle className="w-4 h-4 text-rose-500" /> iOS Limitations</h4>
                                    <p className="text-sm text-slate-400 mb-2">Apple heavily restricts SMS programmatic reading. Missing a massive wealthy market segment.</p>
                                    <p className="text-sm text-emerald-400 font-medium border-t border-white/10 pt-2 mt-2">Mitigation: Screenshot + OCR (Google Vision). Or email forwarding options.</p>
                                </div>
                                <div className="bg-black/20 rounded-xl p-5 border border-white/5">
                                    <h4 className="font-bold text-white text-[15px] mb-2 flex gap-2"><AlertTriangle className="w-4 h-4 text-rose-500" /> Privacy Backlash</h4>
                                    <p className="text-sm text-slate-400 mb-2">Users and regulatory bodies feeling "spied on" causing PR disasters.</p>
                                    <p className="text-sm text-emerald-400 font-medium border-t border-white/10 pt-2 mt-2">Mitigation: 100% On-device processing when possible. 3rd party security audits.</p>
                                </div>
                                <div className="bg-black/20 rounded-xl p-5 border border-white/5">
                                    <h4 className="font-bold text-white text-[15px] mb-2 flex gap-2"><AlertTriangle className="w-4 h-4 text-rose-500" /> API Costs at Scale</h4>
                                    <p className="text-sm text-slate-400 mb-2">Parsing millions of SMS rows via LLM endpoints bankrupts the startup.</p>
                                    <p className="text-sm text-emerald-400 font-medium border-t border-white/10 pt-2 mt-2">Mitigation: LangChain context memory. Send only unstructured edge-cases to API, use regex for 95% of standard Till logs.</p>
                                </div>
                            </div>
                        </section>

                    </div>
                </main>
            </div>
        </div>
    );
}

// Fallback for SparklesIcon if not imported from lucide-react above
function SparklesIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    </svg>
  );
}
