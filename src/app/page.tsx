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
        <div style={{ background: "#f0fdf4", minHeight: "100vh", fontFamily: "'Georgia', serif", color: "#1a1a1a" }}>
            <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
            <div style={{ display: "flex", position: "relative" }}>
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
    );
}
