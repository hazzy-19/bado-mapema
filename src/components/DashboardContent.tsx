import { sections, petStates, workflows, disciplineRules, envVars } from "../data/constants";
import ArchitectureGraph from "../components/ArchitectureGraph";
import * as LucideIcons from "lucide-react";
import Link from "next/link";

const renderIcon = (name: string | undefined, className?: string) => {
    if (!name) return null;
    const Icon = (LucideIcons as any)[name];
    if (!Icon) return null;
    return <Icon className={className} />;
};

interface DashboardContentProps {
    activeSection: string;
    expandedItem: string | null;
    setExpandedItem: (id: string | null) => void;
    activeWorkflow: string;
    setActiveWorkflow: (id: string) => void;
}

export default function DashboardContent({ activeSection, expandedItem, setExpandedItem, activeWorkflow, setActiveWorkflow }: DashboardContentProps) {
    const section = sections.find((s) => s.id === activeSection);
    
    return (
        <div className="flex-1 overflow-auto relative z-10 scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="max-w-7xl mx-auto py-12 px-8 md:px-14 lg:px-24">
            {/* Section title */}
            {section && (
                <div className="mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-6">
                    <div>
                        <h1 className="font-sans text-[32px] font-bold text-white tracking-tight flex items-center gap-3 drop-shadow-md">
                            <span className="p-2.5 rounded-xl bg-white/5 border border-white/10 shadow-inner flex items-center justify-center">
                                {renderIcon(section.icon, "w-7 h-7 text-white")}
                            </span> 
                            {section.label}
                        </h1>
                        <div className="mt-4 h-[4px] w-16 rounded-full transition-all duration-500" style={{ background: section.color, boxShadow: `0 0 16px ${section.color}` }} />
                    </div>
                    {section.id === "veto" && (
                        <Link href="/guardian-docs" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-rose-500/10 text-rose-400 rounded-xl border border-rose-500/30 hover:bg-rose-500/20 transition-all hover:scale-105 shadow-[0_0_15px_rgba(225,29,72,0.15)] font-semibold text-sm group shrink-0">
                            <LucideIcons.FileText className="w-4 h-4 group-hover:text-white transition-colors" />
                            <span className="group-hover:text-white transition-colors">Detailed Info</span>
                        </Link>
                    )}
                    {section.id === "daraja" && (
                        <Link href="/mpesa-docs" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-teal-500/10 text-teal-400 rounded-xl border border-teal-500/30 hover:bg-teal-500/20 transition-all hover:scale-105 shadow-[0_0_15px_rgba(20,184,166,0.15)] font-semibold text-sm group shrink-0">
                            <LucideIcons.FileText className="w-4 h-4 group-hover:text-white transition-colors" />
                            <span className="group-hover:text-white transition-colors">Detailed Info</span>
                        </Link>
                    )}
                    {section.id === "personality" && (
                        <div className="flex gap-2">
                            <Link href="/sms-docs" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-indigo-500/10 text-indigo-400 rounded-xl border border-indigo-500/30 hover:bg-indigo-500/20 transition-all hover:scale-105 shadow-[0_0_15px_rgba(99,102,241,0.15)] font-semibold text-sm group shrink-0">
                                <LucideIcons.MessageSquare className="w-4 h-4 group-hover:text-white transition-colors" />
                                <span className="group-hover:text-white transition-colors">SMS Parser Docs</span>
                            </Link>
                            <Link href="/personality-docs" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-pink-500/10 text-pink-400 rounded-xl border border-pink-500/30 hover:bg-pink-500/20 transition-all hover:scale-105 shadow-[0_0_15px_rgba(236,72,153,0.15)] font-semibold text-sm group shrink-0">
                                <LucideIcons.Heart className="w-4 h-4 group-hover:text-white transition-colors" />
                                <span className="group-hover:text-white transition-colors">Personality Docs</span>
                            </Link>
                        </div>
                    )}
                    {section.id === "models" && (
                        <Link href="/escrow-docs" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-500/10 text-emerald-400 rounded-xl border border-emerald-500/30 hover:bg-emerald-500/20 transition-all hover:scale-105 shadow-[0_0_15px_rgba(16,185,129,0.15)] font-semibold text-sm group shrink-0">
                            <LucideIcons.Database className="w-4 h-4 group-hover:text-white transition-colors" />
                            <span className="group-hover:text-white transition-colors">Escrow Ledger Docs</span>
                        </Link>
                    )}
                </div>
            )}

            {/* Cards grid */}
            {section && (
                <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-6">
                    {section.items.map((item, idx) => {
                        const key = `${section.id}-${idx}`;
                        const open = expandedItem === key;
                        return (
                            <div key={key} 
                                className={`rounded-2xl p-6 cursor-pointer transition-all duration-300 group backdrop-blur-xl border ${open ? 'bg-slate-800/80 scale-[1.02] shadow-[0_12px_40px_rgba(0,0,0,0.4)]' : 'bg-slate-900/40 hover:bg-slate-800/60 hover:scale-[1.01] shadow-[0_8px_32px_rgba(0,0,0,0.2)]'}`} 
                                onClick={() => setExpandedItem(open ? null : key)} 
                                style={{
                                    borderColor: open ? section.color : "rgba(255,255,255,0.08)",
                                    boxShadow: open ? `0 8px 32px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.1), 0 0 20px ${section.color}33` : 'inset 0 1px 1px rgba(255,255,255,0.05)'
                                }}>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <div className="font-sans text-base font-bold tracking-wide" style={{ color: section.color, textShadow: `0 0 10px ${section.color}66` }}>{item.title}</div>
                                        <div className="font-mono text-xs text-slate-400 mt-1 italic">{item.file}</div>
                                    </div>
                                    <div className={`flex items-center justify-center w-6 h-6 rounded-full bg-white/5 text-slate-400 text-[10px] transition-transform duration-300 ${open ? 'rotate-180 bg-white/10 text-white' : ''}`}>
                                        ▼
                                    </div>
                                </div>
                                {open && (
                                    <div className="mt-5 border-t border-white/10 pt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                                        {item.fields.map((f: any) => (
                                            <div key={f.name} className="flex flex-col sm:flex-row justify-between items-start p-2 rounded-lg mb-2 sm:mb-1 gap-1 sm:gap-4 transition-colors hover:bg-white/5 group/field">
                                                <span className="font-mono text-[13px] font-medium text-slate-200 break-all sm:break-normal group-hover/field:text-white transition-colors">{f.name}</span>
                                                <div className="text-left sm:text-right shrink-0">
                                                    <div className="font-mono text-xs font-semibold tracking-wide" style={{ color: section.color }}>{f.type}</div>
                                                    {f.note && <div className="font-sans text-[11px] text-slate-400 italic mt-0.5 whitespace-normal">{f.note}</div>}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Pet State Machine */}
            {activeSection === "pet" && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="mb-10 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-6">
                        <div>
                            <h1 className="font-sans text-[32px] font-bold text-white tracking-tight flex items-center gap-3 drop-shadow-md">
                                <span className="p-2.5 rounded-xl bg-white/5 border border-white/10 shadow-inner">
                                    <LucideIcons.Activity className="w-7 h-7 text-emerald-400" />
                                </span> Pet State Machine
                            </h1>
                            <div className="mt-4 h-[4px] w-16 bg-emerald-500 rounded-full shadow-[0_0_16px_rgba(16,185,129,0.8)]" />
                        </div>
                        <Link href="/pet-docs" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-500/10 text-emerald-400 rounded-xl border border-emerald-500/30 hover:bg-emerald-500/20 transition-all hover:scale-105 shadow-[0_0_15px_rgba(16,185,129,0.15)] font-semibold text-sm group shrink-0">
                            <LucideIcons.FileText className="w-4 h-4 group-hover:text-white transition-colors" />
                            <span className="group-hover:text-white transition-colors">Detailed Info</span>
                        </Link>
                    </div>
                    <p className="font-sans text-[15px] text-slate-400 leading-relaxed max-w-[600px] mb-10">
                        The digital pet is the emotional engine of Bado Mapema. It degrades each day a save is missed, and recovers instantly on a confirmed M-Pesa payment.
                    </p>
                    <div className="flex gap-4 flex-wrap mb-10">
                        {petStates.map((p, i) => (
                            <div key={p.label} className="flex items-center gap-3">
                                <div className="rounded-2xl p-5 text-center min-w-[140px] backdrop-blur-md relative overflow-hidden group" style={{
                                    background: `linear-gradient(135deg, ${p.bg}11, ${p.bg}33)`, 
                                    border: `1px solid ${p.color}44`,
                                    boxShadow: `0 8px 32px rgba(0,0,0,0.2), inset 0 1px 1px rgba(255,255,255,0.05), 0 0 20px ${p.color}22`
                                }}>
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: `radial-gradient(circle at center, ${p.color}33 0%, transparent 70%)` }} />
                                    <div className="mb-3 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] filter transition-transform group-hover:scale-110 duration-300 flex justify-center">
                                        {renderIcon(p.icon, "w-10 h-10")}
                                    </div>
                                    <div className="font-sans text-sm font-bold tracking-wide" style={{ color: p.color, textShadow: `0 0 10px ${p.color}66` }}>{p.label}</div>
                                    <div className="font-mono text-[11px] mt-1.5 opacity-90 font-medium" style={{ color: p.color }}>{p.days}</div>
                                    <div className="font-sans text-[11px] text-slate-400 mt-2 italic">{p.desc}</div>
                                </div>
                                {i < petStates.length - 1 && (
                                    <div className="text-center px-1">
                                        <div className="font-mono text-[10px] text-slate-500 font-semibold uppercase tracking-wider">miss</div>
                                        <div className="text-slate-500 text-xl my-0.5">→</div>
                                        <div className="font-mono text-[10px] text-emerald-400 font-semibold uppercase tracking-wider">save ↩</div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-5 max-w-[640px] shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                        <span className="font-sans text-[14px] text-slate-300 leading-relaxed">
                            <strong className="text-emerald-400 mr-2 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]">Recovery:</strong> Any <code className="bg-white/5 border border-white/10 px-1.5 py-0.5 rounded text-cyan-300 font-mono text-[13px] mx-1 shadow-inner">ResultCode === 0</code> from the Daraja callback immediately sets pet status to <strong className="text-white mx-1">Healthy</strong> and resets <code className="bg-white/5 border border-white/10 px-1.5 py-0.5 rounded text-cyan-300 font-mono text-[13px] mx-1 shadow-inner">missedDaysCount</code> to 0.
                        </span>
                    </div>
                </div>
            )}

            {/* Architecture Graph */}
            {activeSection === "graph" && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                     <div className="mb-10">
                        <h1 className="font-sans text-[32px] font-bold text-white tracking-tight flex items-center gap-3 drop-shadow-md">
                            <span className="p-2.5 rounded-xl bg-white/5 border border-white/10 shadow-inner">
                                <LucideIcons.Map className="w-7 h-7 text-orange-400" />
                            </span> Architecture Map
                        </h1>
                        <div className="mt-4 h-[4px] w-16 bg-orange-500 rounded-full shadow-[0_0_16px_rgba(249,115,22,0.8)]" />
                    </div>
                    <p className="font-sans text-[15px] text-slate-400 leading-relaxed max-w-[600px] mb-10">
                        Interactive visualization of the core models, back-end APIs, behavioral logic vectors, and communication logic that power Bado Mapema's savings loop.
                    </p>
                    <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] overflow-hidden p-2">
                        <ArchitectureGraph />
                    </div>
                </div>
            )}

            {/* Workflows */}
            {activeSection === "workflow" && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="mb-10">
                        <h1 className="font-sans text-[32px] font-bold text-white tracking-tight flex items-center gap-3 drop-shadow-md">
                            <span className="p-2.5 rounded-xl bg-white/5 border border-white/10 shadow-inner">
                                <LucideIcons.GitMerge className="w-7 h-7 text-cyan-400" />
                            </span> Workflows
                        </h1>
                        <div className="mt-4 h-[4px] w-16 bg-cyan-500 rounded-full shadow-[0_0_16px_rgba(6,182,212,0.8)]" />
                    </div>
                    <div className="flex gap-3 mb-10 overflow-x-auto pb-2 scrollbar-none">
                        {workflows.map(w => (
                            <button key={w.id} onClick={() => setActiveWorkflow(w.id)} className={`py-2.5 px-6 rounded-xl border border-white/10 font-sans text-sm font-semibold cursor-pointer transition-all duration-300 whitespace-nowrap ${activeWorkflow === w.id ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.3)]' : 'bg-slate-900/40 text-slate-400 hover:bg-white/5 hover:text-slate-200'}`}>
                                {w.label}
                            </button>
                        ))}
                    </div>
                    {workflows.filter(w => w.id === activeWorkflow).map(w => (
                        <div key={w.id} className="max-w-[600px] relative">
                            {w.steps.map((step, i) => (
                                <div key={i} className="flex gap-5 items-start mb-5 relative group">
                                    <div className="flex flex-col items-center shrink-0">
                                        <div className={`w-9 h-9 rounded-full flex items-center justify-center font-mono text-sm font-bold border-2 transition-transform group-hover:scale-110 duration-300 z-10 ${step.type === "success" ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.4)]" : step.type === "failure" ? "bg-rose-500/20 border-rose-500/50 text-rose-400 shadow-[0_0_15px_rgba(225,29,72,0.4)]" : step.type === "decision" ? "bg-amber-500/20 border-amber-500/50 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.4)]" : "bg-slate-800 border-white/20 text-slate-300"}`}>
                                            {i + 1}
                                        </div>
                                        {i < w.steps.length - 1 && <div className="absolute top-9 bottom-[-20px] left-1/2 w-[2px] -ml-[1px] bg-gradient-to-b from-white/20 to-transparent z-0" />}
                                    </div>
                                    <div className={`flex-1 backdrop-blur-md rounded-xl p-4 font-sans text-[14px] leading-relaxed transition-all duration-300 border shadow-lg ${step.type === 'success' ? 'bg-emerald-500/5 border-emerald-500/20 text-emerald-100 group-hover:bg-emerald-500/10' : step.type === 'failure' ? 'bg-rose-500/5 border-rose-500/20 text-rose-100 group-hover:bg-rose-500/10' : step.type === 'decision' ? 'bg-amber-500/5 border-amber-500/20 text-amber-100 font-medium group-hover:bg-amber-500/10' : 'bg-slate-900/40 border-white/10 text-slate-300 group-hover:bg-white/5'}`}>
                                        {step.text}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}

            {/* Env vars */}
            {activeSection === "env" && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="mb-10">
                        <h1 className="font-sans text-[32px] font-bold text-white tracking-tight flex items-center gap-3 drop-shadow-md">
                            <span className="p-2.5 rounded-xl bg-white/5 border border-white/10 shadow-inner">
                                <LucideIcons.Key className="w-7 h-7 text-amethyst-400" color="#a855f7" />
                            </span> Environment Variables
                        </h1>
                        <div className="mt-4 h-[4px] w-16 bg-amethyst-500 rounded-full shadow-[0_0_16px_rgba(168,85,247,0.8)]" style={{ backgroundColor: '#a855f7' }} />
                    </div>
                    <div className="flex gap-8 flex-wrap items-start">
                        <div className="w-full lg:w-auto bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden min-w-0 md:min-w-[380px] shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                            {envVars.map((v, i) => (
                                <div key={v.key} className={`flex justify-between items-center p-4 transition-colors hover:bg-white/5 ${i < envVars.length - 1 ? 'border-b border-white/5' : ''}`}>
                                    <div className="mr-4">
                                        <code className="font-mono text-[13px] font-bold text-slate-200 tracking-wide break-all">{v.key}</code>
                                        {v.note && <div className="font-sans text-[11px] text-slate-500 italic mt-1 max-w-[220px]">{v.note}</div>}
                                    </div>
                                    <span className={`shrink-0 font-mono text-[11px] font-bold px-2.5 py-1 rounded-md border ${v.type === 'secret' ? 'text-rose-400 bg-rose-500/10 border-rose-500/30 shadow-[0_0_10px_rgba(225,29,72,0.2)]' : 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.2)]'}`}>{v.type.toUpperCase()}</span>
                                </div>
                            ))}
                        </div>

                        <div className="w-full lg:w-auto min-w-0 md:min-w-[340px]">
                            <div className="font-sans text-lg font-bold mb-4 text-white flex justify-between items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]" /> 
                                    Discipline Score Rules
                                </div>
                                <Link href="/discipline-docs" className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-indigo-500/10 text-indigo-400 rounded-lg border border-indigo-500/30 hover:bg-indigo-500/20 transition-all hover:scale-105 shadow-[0_0_15px_rgba(99,102,241,0.15)] font-semibold text-[11px] group shrink-0">
                                    <LucideIcons.FileText className="w-3.5 h-3.5 group-hover:text-white transition-colors" />
                                    <span className="group-hover:text-white transition-colors">Detailed Info</span>
                                </Link>
                            </div>
                            <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                                {disciplineRules.map((r, i) => (
                                    <div key={r.event} className={`flex justify-between items-center p-4 transition-colors hover:bg-white/5 ${i < disciplineRules.length - 1 ? 'border-b border-white/5' : ''}`}>
                                        <span className="font-sans text-sm text-slate-300 font-medium">{r.event}</span>
                                        <span className={`font-mono text-base font-bold drop-shadow-md px-3 py-1 bg-white/5 rounded-lg border border-white/10 ${r.positive ? 'text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.1)]' : 'text-rose-400 shadow-[0_0_10px_rgba(225,29,72,0.1)]'}`}>{r.delta}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Document Upload Section */}
            {(activeSection === "workflow" || activeSection === "models") && (
                <div className="mt-20 pt-10 border-t border-white/10 relative animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="absolute top-[-1px] left-0 w-1/3 h-[1px] bg-gradient-to-r from-cyan-500/50 to-transparent" />
                    <h2 className="font-sans text-[24px] font-bold text-white mb-2 flex items-center gap-3">
                        <span className="p-2 rounded-xl bg-white/5 border border-white/10 shadow-inner">
                            <LucideIcons.Files className="w-5 h-5 text-white" />
                        </span> 
                        Shared Documents
                    </h2>
                    <p className="font-sans text-[15px] text-slate-400 mb-6">Upload PDFs and assets for your team to access.</p>
                    
                    <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 border-dashed rounded-2xl p-10 flex flex-col items-center justify-center text-center group transition-all duration-300 hover:border-cyan-500/50 hover:bg-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.2)] cursor-pointer">
                        <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                            <LucideIcons.UploadCloud className="w-8 h-8 text-cyan-400" />
                        </div>
                        <h3 className="text-white font-semibold text-lg mb-1">Click to upload or drag & drop</h3>
                        <p className="text-slate-500 text-sm">PDF, DOCX, or Images (max. 10MB)</p>
                    </div>
                </div>
            )}
          </div>
        </div>
    );
}
