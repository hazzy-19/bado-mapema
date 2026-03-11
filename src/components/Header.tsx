interface HeaderProps {
    toggleSidebar?: () => void;
}

export default function Header({ toggleSidebar }: HeaderProps) {
    return (
        <div style={{ background: "#0f766e", padding: "0 40px", position: "sticky", top: 0, zIndex: 60 }} className="header-container">
            <div className="header-title-container" style={{ display: "flex", alignItems: "center", height: 56, gap: 20 }}>
                {toggleSidebar && (
                    <button className="mobile-flex hamburger-btn" onClick={toggleSidebar} aria-label="Toggle Sidebar">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="4" y1="12" x2="20" y2="12"></line>
                            <line x1="4" y1="6" x2="20" y2="6"></line>
                            <line x1="4" y1="18" x2="20" y2="18"></line>
                        </svg>
                    </button>
                )}
                <div style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 20, color: "#fff", letterSpacing: 0.3 }}>
                    Bado Mapema
                </div>
                <div style={{ width: 1, height: 18, background: "rgba(255,255,255,0.35)" }} />
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.75)" }}>
                    Functional Architecture · Next.js + TypeScript
                </div>
                <div style={{ marginLeft: "auto", display: "flex", gap: 6 }}>
                </div>
            </div>
        </div>
    );
}
