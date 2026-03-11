import { sections, petStates, workflows, disciplineRules, envVars } from "../data/constants";
import ArchitectureGraph from "../components/ArchitectureGraph";

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
        <div style={{ flex: 1, padding: "36px 44px", overflow: "auto" }}>
            {/* Section title */}
            {section && (
                <div style={{ marginBottom: 28 }}>
                    <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 26, fontWeight: 400, color: "#1a1a1a" }}>
                        {section.icon} {section.label}
                    </h1>
                    <div style={{ marginTop: 10, height: 3, width: 40, background: section.color, borderRadius: 2 }} />
                </div>
            )}

            {/* Cards grid */}
            {section && (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))", gap: 14 }}>
                    {section.items.map((item, idx) => {
                        const key = `${section.id}-${idx}`;
                        const open = expandedItem === key;
                        return (
                            <div key={key} className="hover-card" onClick={() => setExpandedItem(open ? null : key)} style={{
                                background: "#fff", border: `1px solid ${open ? section.color : "#e5ddd3"}`,
                                borderRadius: 8, padding: "18px 20px", cursor: "pointer",
                                transition: "border-color 0.15s, background 0.15s",
                            }}>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div>
                                        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, color: section.color }}>{item.title}</div>
                                        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#aaa", marginTop: 3, fontStyle: "italic" }}>{item.file}</div>
                                    </div>
                                    <span style={{ fontFamily: "'DM Sans', sans-serif", color: "#ccc", fontSize: 11, marginTop: 2 }}>{open ? "▲" : "▼"}</span>
                                </div>
                                {open && (
                                    <div style={{ marginTop: 14, borderTop: "1px solid #f0e8e0", paddingTop: 12 }}>
                                        {item.fields.map((f: any) => (
                                            <div key={f.name} className="field-row" style={{
                                                display: "flex", justifyContent: "space-between", alignItems: "flex-start",
                                                padding: "5px 6px", borderRadius: 4, marginBottom: 2, gap: 12,
                                            }}>
                                                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 500, color: "#333", whiteSpace: "nowrap" }}>{f.name}</span>
                                                <div style={{ textAlign: "right", flexShrink: 0 }}>
                                                    <div style={{ fontFamily: "monospace", fontSize: 11, color: section.color }}>{f.type}</div>
                                                    {f.note && <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: "#aaa", fontStyle: "italic" }}>{f.note}</div>}
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
                <div>
                    <div style={{ marginBottom: 28 }}>
                        <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 26, fontWeight: 400 }}>🐾 Pet State Machine</h1>
                        <div style={{ marginTop: 10, height: 3, width: 40, background: "#0f766e", borderRadius: 2 }} />
                    </div>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#666", lineHeight: 1.7, maxWidth: 560, marginBottom: 28 }}>
                        The digital pet is the emotional engine of Bado Mapema. It degrades each day a save is missed, and recovers instantly on a confirmed M-Pesa payment.
                    </p>
                    <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 24 }}>
                        {petStates.map((p, i) => (
                            <div key={p.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                <div style={{
                                    background: p.bg, border: `1px solid ${p.border}`,
                                    borderRadius: 8, padding: "18px 22px", textAlign: "center", minWidth: 130,
                                }}>
                                    <div style={{ fontSize: 26, marginBottom: 8, color: p.color }}>{p.icon}</div>
                                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, color: p.color }}>{p.label}</div>
                                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: p.color, marginTop: 4, opacity: 0.8 }}>{p.days}</div>
                                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#888", marginTop: 5, fontStyle: "italic" }}>{p.desc}</div>
                                </div>
                                {i < petStates.length - 1 && (
                                    <div style={{ textAlign: "center" }}>
                                        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: "#1e293b" }}>miss</div>
                                        <div style={{ color: "#1e293b", fontSize: 18, margin: "2px 0" }}>→</div>
                                        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: "#0f766e" }}>save ↩</div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div style={{ background: "#fff", border: "1px solid #e5ddd3", borderRadius: 8, padding: "14px 20px", maxWidth: 600 }}>
                        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#555" }}>
                            <strong style={{ color: "#1B6B3A" }}>Recovery:</strong> Any <code style={{ background: "#f5f0e8", padding: "1px 5px", borderRadius: 3, fontSize: 12 }}>ResultCode === 0</code> from the Daraja callback immediately sets pet status to <strong>Healthy</strong> and resets <code style={{ background: "#f5f0e8", padding: "1px 5px", borderRadius: 3, fontSize: 12 }}>missedDaysCount</code> to 0.
                        </span>
                    </div>
                </div>
            )}

            {/* Architecture Graph */}
            {activeSection === "graph" && (
                <div>
                     <div style={{ marginBottom: 28 }}>
                        <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 26, fontWeight: 400 }}>🗺️ Architecture Map</h1>
                        <div style={{ marginTop: 10, height: 3, width: 40, background: "#C8472A", borderRadius: 2 }} />
                    </div>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#666", lineHeight: 1.7, maxWidth: 560, marginBottom: 28 }}>
                        Interactive visualization of the core models, back-end APIs, behavioral logic vectors, and communication logic that power Bado Mapema's savings loop.
                    </p>
                    <ArchitectureGraph />
                </div>
            )}

            {/* Workflows */}
            {activeSection === "workflow" && (
                <div>
                    <div style={{ marginBottom: 28 }}>
                        <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 26, fontWeight: 400 }}>⟶ Workflows</h1>
                        <div style={{ marginTop: 10, height: 3, width: 40, background: "#0f766e", borderRadius: 2 }} />
                    </div>
                    <div style={{ display: "flex", gap: 8, marginBottom: 28 }}>
                        {workflows.map(w => (
                            <button key={w.id} onClick={() => setActiveWorkflow(w.id)} style={{
                                padding: "8px 22px", borderRadius: 4,
                                background: activeWorkflow === w.id ? "#0f766e" : "#fff",
                                border: `1px solid ${activeWorkflow === w.id ? "#0f766e" : "#e5ddd3"}`,
                                color: activeWorkflow === w.id ? "#fff" : "#444",
                                fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, cursor: "pointer",
                                transition: "all 0.15s",
                            }}>{w.label}</button>
                        ))}
                    </div>
                    {workflows.filter(w => w.id === activeWorkflow).map(w => (
                        <div key={w.id} style={{ maxWidth: 500 }}>
                            {w.steps.map((step, i) => (
                                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 14 }}>
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                                        <div style={{
                                            width: 30, height: 30, borderRadius: "50%",
                                            display: "flex", alignItems: "center", justifyContent: "center",
                                            fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600,
                                            background: step.type === "success" ? "#1B6B3A" : step.type === "failure" ? "#C8472A" : step.type === "decision" ? "#8B4513" : "#fff",
                                            border: `2px solid ${step.type === "success" ? "#1B6B3A" : step.type === "failure" ? "#C8472A" : step.type === "decision" ? "#8B4513" : "#e5ddd3"}`,
                                            color: ["success", "failure", "decision"].includes(step.type) ? "#fff" : "#aaa",
                                        }}>{i + 1}</div>
                                        {i < w.steps.length - 1 && <div style={{ width: 1, height: 20, marginTop: 4, background: "#e5ddd3" }} />}
                                    </div>
                                    <div className="wf-step" style={{
                                        flex: 1, background: "#fff", border: "1px solid #e5ddd3",
                                        borderRadius: 6, padding: "9px 14px", marginBottom: 0,
                                        fontFamily: "'DM Sans', sans-serif", fontSize: 13,
                                        color: step.type === "success" ? "#1B6B3A" : step.type === "failure" ? "#C8472A" : step.type === "decision" ? "#8B4513" : "#333",
                                        fontWeight: step.type === "decision" ? 600 : 400,
                                        borderColor: step.type === "success" ? "#a8d5b5" : step.type === "failure" ? "#f5b8ae" : "#e5ddd3",
                                    }}>{step.text}</div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}

            {/* Env vars */}
            {activeSection === "env" && (
                <div>
                    <div style={{ marginBottom: 28 }}>
                        <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 26, fontWeight: 400 }}>🔑 Environment Variables</h1>
                        <div style={{ marginTop: 10, height: 3, width: 40, background: "#0f766e", borderRadius: 2 }} />
                    </div>
                    <div style={{ display: "flex", gap: 28, flexWrap: "wrap", alignItems: "flex-start" }}>
                        <div style={{ background: "#fff", border: "1px solid #e5ddd3", borderRadius: 8, overflow: "hidden", minWidth: 360 }}>
                            {envVars.map((v, i) => (
                                <div key={v.key} style={{
                                    display: "flex", justifyContent: "space-between", alignItems: "center",
                                    padding: "11px 20px",
                                    borderBottom: i < envVars.length - 1 ? "1px solid #f0e8e0" : "none",
                                    background: i % 2 === 0 ? "#fff" : "#fdfaf7",
                                }}>
                                    <div>
                                        <code style={{ fontFamily: "monospace", fontSize: 12, color: "#1a1a1a" }}>{v.key}</code>
                                        {v.note && <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: "#aaa", fontStyle: "italic", marginTop: 1 }}>{v.note}</div>}
                                    </div>
                                    <span style={{
                                        fontFamily: "'DM Sans', sans-serif", fontSize: 10, padding: "2px 8px",
                                        borderRadius: 10, fontWeight: 500,
                                        color: v.type === "secret" ? "#9f1239" : "#0f766e",
                                        background: v.type === "secret" ? "#fff1f2" : "#f0fdf4",
                                        border: `1px solid ${v.type === "secret" ? "#fecdd3" : "#5eead4"}`,
                                    }}>{v.type}</span>
                                </div>
                            ))}
                        </div>

                        <div style={{ minWidth: 300 }}>
                            <div style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 18, fontWeight: 400, marginBottom: 14, color: "#1a1a1a" }}>
                                Discipline Score Rules
                            </div>
                            <div style={{ background: "#fff", border: "1px solid #e5ddd3", borderRadius: 8, overflow: "hidden" }}>
                                {disciplineRules.map((r, i) => (
                                    <div key={r.event} style={{
                                        display: "flex", justifyContent: "space-between", alignItems: "center",
                                        padding: "11px 18px",
                                        borderBottom: i < disciplineRules.length - 1 ? "1px solid #f0e8e0" : "none",
                                    }}>
                                        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#444" }}>{r.event}</span>
                                        <span style={{
                                            fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 700,
                                            color: r.positive ? "#0f766e" : "#9f1239",
                                        }}>{r.delta}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
