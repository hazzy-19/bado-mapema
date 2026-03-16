"use client";

import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import DashboardContent from "../components/DashboardContent";

export default function BadoMapema() {
    const [activeSection, setActiveSection] = useState("models");
    const [expandedItem, setExpandedItem] = useState<string | null>(null);
    const [activeWorkflow, setActiveWorkflow] = useState("daily");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="bg-[#020617] min-h-screen font-sans text-slate-300 relative overflow-hidden selection:bg-cyan-500/30">
            {/* Background dynamic ambient glow */}
            <div className="absolute top-0 left-[20%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none opacity-60"></div>
            <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none opacity-50"></div>
            <div className="absolute top-[40%] left-[-10%] w-[400px] h-[400px] bg-amethyst-500/10 rounded-full blur-[120px] pointer-events-none opacity-40" style={{ backgroundColor: 'rgba(168, 85, 247, 0.08)' }}></div>

            <div className="relative z-10 flex flex-col h-screen">
                <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
                <div className="flex flex-1 overflow-hidden">
                    <Sidebar 
                        activeSection={activeSection} 
                        setActiveSection={setActiveSection} 
                        setExpandedItem={setExpandedItem} 
                        isOpen={isSidebarOpen}
                        setIsOpen={setIsSidebarOpen}
                    />
                    <DashboardContent 
                        activeSection={activeSection} 
                        expandedItem={expandedItem} 
                        setExpandedItem={setExpandedItem} 
                        activeWorkflow={activeWorkflow} 
                        setActiveWorkflow={setActiveWorkflow} 
                    />
                </div>
            </div>
        </div>
    );
}
