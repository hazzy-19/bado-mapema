import { sections } from "../data/constants";
import * as LucideIcons from "lucide-react";

interface SidebarProps {
    activeSection: string;
    setActiveSection: (id: string) => void;
    setExpandedItem: (id: string | null) => void;
    isOpen?: boolean;
    setIsOpen?: (open: boolean) => void;
}

export const navExtras = [
    { id: "graph", label: "Architecture Map", icon: "Map" },
    { id: "pet", label: "Pet State Machine", icon: "Activity" },
    { id: "workflow", label: "Workflows", icon: "GitMerge" },
    { id: "env", label: "Env Variables", icon: "Key" },
];

const renderIcon = (name: string | undefined, className?: string) => {
    if (!name) return null;
    const Icon = (LucideIcons as any)[name];
    if (!Icon) return null;
    return <Icon className={className} />;
};

export default function Sidebar({ activeSection, setActiveSection, setExpandedItem, isOpen, setIsOpen }: SidebarProps) {
    return (
        <>
            {isOpen && (
                <div 
                    className="max-[900px]:block hidden fixed inset-0 bg-black/50 z-40"
                    onClick={() => setIsOpen?.(false)}
                />
            )}
            <div className={`w-[240px] bg-[#020617]/50 backdrop-blur-xl border-r border-white/10 h-full overflow-y-auto scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] shrink-0 transition-transform duration-300 ease-out max-[900px]:fixed max-[900px]:top-[64px] max-[900px]:left-0 max-[900px]:bottom-0 max-[900px]:z-50 ${isOpen ? 'max-[900px]:translate-x-0' : 'max-[900px]:-translate-x-full'} shadow-[4px_0_24px_rgba(0,0,0,0.5)]`}>
                <div className="pt-6 pb-8 px-3">
                    <div className="px-4 pb-3 text-[11px] font-semibold text-slate-500 tracking-widest uppercase">
                        Layers
                    </div>
                    <div className="space-y-1">
                        {sections.map(s => {
                            const isActive = activeSection === s.id;
                            return (
                                <button 
                                    key={s.id} 
                                    className={`w-full text-left px-4 py-2.5 rounded-xl font-medium text-sm flex items-center gap-3 cursor-pointer transition-all duration-200 group ${isActive ? 'bg-white/10 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]' : 'bg-transparent text-slate-400 hover:bg-white/5 hover:text-slate-200'}`} 
                                    onClick={() => { setActiveSection(s.id); setExpandedItem(null); setIsOpen?.(false); }}
                                >
                                    <span className={`flex items-center justify-center w-7 h-7 rounded-lg transition-transform group-hover:scale-110 ${isActive ? 'bg-white/10' : 'bg-transparent group-hover:bg-white/5'}`} style={isActive ? { color: s.color, filter: `drop-shadow(0 0 6px ${s.color}66)` } : {}}>
                                        {renderIcon(s.icon, "w-4 h-4")}
                                    </span>
                                    {s.label}
                                    {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full" style={{ backgroundColor: s.color, boxShadow: `0 0 8px ${s.color}` }} />}
                                </button>
                            );
                        })}
                    </div>

                    <div className="mt-8 mb-4">
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                    </div>

                    <div className="px-4 pb-3 text-[11px] font-semibold text-slate-500 tracking-widest uppercase">
                        Reference
                    </div>
                    <div className="space-y-1">
                        {navExtras.map(s => {
                            const isActive = activeSection === s.id;
                            return (
                                <button 
                                    key={s.id} 
                                    className={`w-full text-left px-4 py-2.5 rounded-xl font-medium text-sm flex items-center gap-3 cursor-pointer transition-all duration-200 group ${isActive ? 'bg-white/10 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]' : 'bg-transparent text-slate-400 hover:bg-white/5 hover:text-slate-200'}`} 
                                    onClick={() => { setActiveSection(s.id); setExpandedItem(null); setIsOpen?.(false); }}
                                >
                                    {s.icon && <span className="text-base group-hover:scale-110 transition-transform">{renderIcon(s.icon, "w-4 h-4")}</span>}
                                    {!s.icon && <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-cyan-400 transition-colors mr-1"></span>}
                                    {s.label}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
