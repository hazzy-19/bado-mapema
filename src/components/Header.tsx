"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

interface HeaderProps {
    toggleSidebar?: () => void;
}

export default function Header({ toggleSidebar }: HeaderProps) {
    const [isLightMode, setIsLightMode] = useState(false);

    useEffect(() => {
        if (isLightMode) {
            document.documentElement.classList.add("light-theme");
        } else {
            document.documentElement.classList.remove("light-theme");
        }
    }, [isLightMode]);

    return (
        <div className="bg-[#020617]/70 backdrop-blur-md border-b border-white/[0.08] px-6 lg:px-10 sticky top-0 z-[60]">
            <div className="flex items-center h-16 gap-4 lg:gap-6">
                {toggleSidebar && (
                    <button className="max-[900px]:flex hidden items-center justify-center p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-slate-300 transition-all cursor-pointer" onClick={toggleSidebar} aria-label="Toggle Sidebar">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </button>
                )}
                
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-emerald-400 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                            <path d="M2 17l10 5 10-5"></path>
                            <path d="M2 12l10 5 10-5"></path>
                        </svg>
                    </div>
                    <div className="font-semibold text-lg text-white tracking-wide">
                        Bado Mapema
                    </div>
                </div>

                <div className="ml-auto flex items-center gap-3">
                    <button 
                        onClick={() => setIsLightMode(!isLightMode)}
                        className="p-2 rounded-xl hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                        aria-label="Toggle Theme"
                    >
                        {isLightMode ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
                    </button>
                </div>
            </div>
        </div>
    );
}
