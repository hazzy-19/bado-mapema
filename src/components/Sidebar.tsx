import { sections } from "../data/constants";

interface SidebarProps {
    activeSection: string;
    setActiveSection: (id: string) => void;
    setExpandedItem: (id: string | null) => void;
    isOpen?: boolean;
    setIsOpen?: (open: boolean) => void;
}

export const navExtras = [
    { id: "graph", label: "Architecture Map", icon: "🗺️" },
    { id: "pet", label: "Pet State Machine" },
    { id: "workflow", label: "Workflows" },
    { id: "env", label: "Env Variables" },
];

export default function Sidebar({ activeSection, setActiveSection, setExpandedItem, isOpen, setIsOpen }: SidebarProps) {
    return (
        <>
            {isOpen && (
                <div 
                    className="mobile-only"
                    style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 40 }}
                    onClick={() => setIsOpen?.(false)}
                />
            )}
            <div className={`sidebar-container ${isOpen ? 'open' : ''}`} style={{ width: 210, background: "#fff", borderRight: "1px solid #e5ddd3", minHeight: "calc(100vh - 56px)", flexShrink: 0 }}>
            <div style={{ padding: "22px 0 8px" }}>
                <div style={{ padding: "0 18px 8px", fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: "#bbb", letterSpacing: 1.5, textTransform: "uppercase" }}>
                    Layers
                </div>
                {sections.map(s => (
                    <button key={s.id} className="nav-btn" onClick={() => { setActiveSection(s.id); setExpandedItem(null); setIsOpen?.(false); }} style={{
                        width: "100%", textAlign: "left", padding: "9px 18px",
                        border: "none",
                        borderLeft: activeSection === s.id ? `3px solid ${s.color}` : "3px solid transparent",
                        background: activeSection === s.id ? "#ccfbf1" : "transparent",
                        fontFamily: "'DM Sans', sans-serif", fontSize: 13,
                        color: activeSection === s.id ? "#0f766e" : "#444",
                        fontWeight: activeSection === s.id ? 600 : 400,
                        cursor: "pointer", display: "flex", alignItems: "center", gap: 8,
                    }}>
                        <span style={{ fontSize: 14 }}>{s.icon}</span> {s.label}
                    </button>
                ))}

                <div style={{ margin: "16px 0 8px", borderTop: "1px solid #ece5db", padding: "14px 18px 6px" }}>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: "#bbb", letterSpacing: 1.5, textTransform: "uppercase" }}>
                        Reference
                    </div>
                </div>
                {navExtras.map(s => (
                    <button key={s.id} className="nav-btn" onClick={() => { setActiveSection(s.id); setExpandedItem(null); setIsOpen?.(false); }} style={{
                        width: "100%", textAlign: "left", padding: "9px 18px",
                        border: "none",
                        borderLeft: activeSection === s.id ? "3px solid #0f766e" : "3px solid transparent",
                        background: activeSection === s.id ? "#ccfbf1" : "transparent",
                        fontFamily: "'DM Sans', sans-serif", fontSize: 13,
                        color: activeSection === s.id ? "#0f766e" : "#444",
                        fontWeight: activeSection === s.id ? 600 : 400,
                        cursor: "pointer",
                    }}>
                        {s.label}
                    </button>
                ))}
            </div>
            </div>
        </>
    );
}
