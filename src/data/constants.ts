export const sections = [
    {
        id: "veto", label: "Veto Protocol & Override", icon: "Shield", color: "#9f1239",
        items: [
            {
                title: "runVetoProtocol()", file: "lib/behavioral.ts", fields: [
                    { name: "check 1", type: "now >= targetDate → AutoApprove" },
                    { name: "check 2", type: "else → generateGuardianToken()" },
                    { name: "returns", type: "{ autoApproved, guardianToken?, reason }" },
                ]
            },
            {
                title: "Guardian JWT", file: "lib/behavioral.ts", fields: [
                    { name: "algorithm", type: "HS256" },
                    { name: "TTL", type: "48 hours" },
                    { name: "payload", type: "withdrawalRequestId, userId, goalId, amount" },
                    { name: "verify", type: "verifyGuardianToken() — server-side only" },
                ]
            },
            {
                title: "burnTheBridge()", file: "lib/behavioral.ts", fields: [
                    { name: "disciplineDelta", type: "−20" },
                    { name: "newStreak", type: "0 (hard reset)" },
                    { name: "approved", type: "always true" },
                ]
            },
            {
                title: "processDailyLoop()", file: "lib/behavioral.ts", fields: [
                    { name: "input", type: "stkPushSucceeded: boolean" },
                    { name: "success", type: "+1 streak, +1 score, heal pet" },
                    { name: "failure", type: "degrade pet, no score change" },
                ]
            },
        ],
    },
    {
        id: "models", label: "Core Data Models", icon: "Database", color: "#0f766e",
        items: [
            {
                title: "UserProfile", file: "types/index.ts", fields: [
                    { name: "id", type: "string", note: "UUID representing the core user account." },
                    { name: "phone", type: "string", note: "E.164 format, strictly used for MPESA." },
                    { name: "disciplineScore", type: "number", note: "0–100. The behavioral gravity score." },
                    { name: "currentStreak", type: "number", note: "Continuous daily saves without missing." },
                    { name: "language", type: "Language", note: "'sheng' | 'english' tone selection." },
                    { name: "guardianPhone?", type: "string", note: "The emergency contact for Veto Auth." },
                    { name: "guardianName?", type: "string", note: "Friendly name of the veto guardian." },
                ]
            },
            {
                title: "SavingGoal", file: "types/index.ts", fields: [
                    { name: "targetAmount", type: "number", note: "KES amount the user aims to hit." },
                    { name: "targetDate", type: "Date", note: "The hard lock-in date for the goal." },
                    { name: "currentBalance", type: "number", note: "KES held securely in escrow." },
                    { name: "dailySavingsAmount", type: "number", note: "The daily bite-sized deduction." },
                    { name: "priorityLevel", type: "PriorityLevel", note: "1 | 2 | 3 to dictate urgency." },
                    { name: "isActive", type: "boolean", note: "Is the saving loop currently firing?" },
                ]
            },
            {
                title: "PetState", file: "types/index.ts", fields: [
                    { name: "status", type: "PetStatus", note: "Healthy → Sick → Critical → Dead" },
                    { name: "missedDaysCount", type: "number", note: "Tally of M-Pesa failures. Resets fast." },
                    { name: "lastFedAt", type: "Date | null", note: "Timestamp of last successful STK." },
                    { name: "name", type: "string", note: "Personalized companion name." },
                ]
            },
            {
                title: "EscrowLedgerEntry", file: "types/index.ts", fields: [
                    { name: "amount", type: "number", note: "+ credit / − debit (in pure KES)" },
                    { name: "type", type: "TransactionType", note: "Enum classifying the movement." },
                    { name: "mpesaRef?", type: "string", note: "Safaricom Daraja receipt code." },
                    { name: "description", type: "string", note: "Human readable transaction log." },
                ]
            },
            {
                title: "WithdrawalRequest", file: "types/index.ts", fields: [
                    { name: "status", type: "WithdrawalStatus", note: "Pending | Approved | Denied | Override" },
                    { name: "guardianToken?", type: "string", note: "Used in secure external URLs." },
                    { name: "guardianDecidedAt?", type: "Date", note: "Timestamp of veto outcome." },
                    { name: "guardianNote?", type: "string", note: "Reasoning from the emergency contact." },
                ]
            },
        ],
    },
    {
        id: "api", label: "Server Logic (API)", icon: "Server", color: "#0369a1",
        items: [
            {
                title: "GET /api/user/[id]/state", file: "api/routes.ts", fields: [
                    { name: "returns", type: "{ user, goal, pet, escrow }" },
                    { name: "purpose", type: "Hydrates React Context on mount" },
                ]
            },
            {
                title: "POST /api/sms/analyze", file: "api/routes.ts", fields: [
                    { name: "input", type: "SMSLogEntry[]" },
                    { name: "model", type: "gemini-1.5-flash" },
                    { name: "returns", type: "BurnRateAnalysis" },
                    { name: "fields", type: "burnRate, successProbability, riskCategory" },
                ]
            },
            {
                title: "POST /api/mpesa/callback", file: "api/routes.ts", fields: [
                    { name: "source", type: "Daraja webhook (Safaricom)" },
                    { name: "success", type: "credit Escrow + heal Pet + +1 streak" },
                    { name: "failure", type: "log only — Pet degrades on next daily check" },
                ]
            },
            {
                title: "POST /api/withdrawal/request", file: "api/routes.ts", fields: [
                    { name: "runs", type: "runVetoProtocol()" },
                    { name: "if date passed", type: "AutoApprove → disburseFunds() via B2C" },
                    { name: "else", type: "generateGuardianToken() → SMS guardian" },
                ]
            },
            {
                title: "POST /api/withdrawal/override", file: "api/routes.ts", fields: [
                    { name: "effect", type: "burnTheBridge()" },
                    { name: "penalty", type: "DisciplineScore −20, streak → 0" },
                    { name: "then", type: "disburse funds via Daraja B2C" },
                ]
            },
            {
                title: "GET + POST /api/guardian/review", file: "api/routes.ts", fields: [
                    { name: "auth", type: "verifyGuardianToken(JWT) — server-side only" },
                    { name: "GET", type: "return withdrawal details for guardian UI" },
                    { name: "POST approve", type: "disburseFunds() via B2C" },
                    { name: "POST deny", type: "update status, notify user" },
                ]
            },
            {
                title: "POST /api/cron/daily-check", file: "api/routes.ts", fields: [
                    { name: "auth", type: "CRON_SECRET header" },
                    { name: "fires", type: "triggerSTKPush() for all active goals" },
                    { name: "STK failure", type: "degrade Pet immediately" },
                ]
            },
        ],
    },
    {
        id: "daraja", label: "Daraja Integration", icon: "Link", color: "#14b8a6",
        items: [
            {
                title: "triggerSTKPush()", file: "lib/daraja.ts", fields: [
                    { name: "endpoint", type: "mpesa/stkpush/v1/processrequest" },
                    { name: "input", type: "phone, amount, accountReference" },
                    { name: "password", type: "Base64(paybill + passkey + timestamp)" },
                    { name: "callback", type: "/api/mpesa/callback" },
                ]
            },
            {
                title: "parseMpesaCallback()", file: "lib/daraja.ts", fields: [
                    { name: "checks", type: "ResultCode === 0" },
                    { name: "extracts", type: "Amount, MpesaReceiptNumber, PhoneNumber" },
                    { name: "returns", type: "ParsedMpesaCallback" },
                ]
            },
            {
                title: "disburseFunds() B2C", file: "lib/daraja.ts", fields: [
                    { name: "endpoint", type: "mpesa/b2c/v3/paymentrequest" },
                    { name: "commandID", type: "BusinessPayment" },
                    { name: "use cases", type: "goal achieved / guardian approved / override" },
                ]
            },
            {
                title: "getDarajaToken()", file: "lib/daraja.ts", fields: [
                    { name: "caches token", type: "in-memory, refreshes 60s early" },
                    { name: "auth", type: "Basic Base64(consumerKey:consumerSecret)" },
                ]
            },
        ],
    },
    {
        id: "state", label: "State Handlers", icon: "Brain", color: "#0d9488",
        items: [
            {
                title: "BadoMapemaState", file: "context/BadoMapemaContext.tsx", fields: [
                    { name: "user", type: "UserProfile | null" },
                    { name: "goal", type: "SavingGoal | null" },
                    { name: "pet", type: "PetState | null" },
                    { name: "escrow", type: "EscrowBalance | null" },
                    { name: "pendingWithdrawal", type: "WithdrawalRequest | null" },
                    { name: "burnRateAnalysis", type: "BurnRateAnalysis | null" },
                    { name: "isLoading", type: "boolean" },
                ]
            },
            {
                title: "Context Actions", file: "context/BadoMapemaContext.tsx", fields: [
                    { name: "triggerDailyCheck()", type: "async void" },
                    { name: "requestWithdrawal(amount, reason)", type: "async void" },
                    { name: "burnTheBridge(id)", type: "async void", note: "override guardian veto" },
                    { name: "analyzeSMS(logs)", type: "async void", note: "calls Gemini LLM" },
                    { name: "refreshUserData()", type: "async void" },
                ]
            },
            {
                title: "Reducer Actions", file: "context/BadoMapemaContext.tsx", fields: [
                    { name: "INCREMENT_STREAK", type: "dispatch" },
                    { name: "RESET_STREAK", type: "dispatch" },
                    { name: "APPLY_DISCIPLINE_BONUS", type: "dispatch", note: "+1 score" },
                    { name: "APPLY_DISCIPLINE_PENALTY", type: "dispatch", note: "−20 score" },
                    { name: "DEGRADE_PET", type: "dispatch" },
                    { name: "HEAL_PET", type: "dispatch" },
                    { name: "UPDATE_ESCROW", type: "dispatch" },
                ]
            },
        ],
    },
    {
        id: "personality", label: "Messaging Engine", icon: "MessageSquare", color: "#475569",
        items: [
            {
                title: "getPersonalityMessage()", file: "lib/personality.ts", fields: [
                    { name: "input", type: "user, pet, burnRateAnalysis" },
                    { name: "lang rule", type: "riskCategory=High → force Sheng" },
                    { name: "message pool", type: "4 PetStatus × 2 Language banks" },
                    { name: "tone", type: "Celebratory | Warning | Critical" },
                ]
            },
            {
                title: "SMS Builders", file: "lib/personality.ts", fields: [
                    { name: "buildDailySaveReminder()", type: "personalized nudge by pet state" },
                    { name: "buildGuardianRequestSMS()", type: "signed URL + withdrawal details" },
                    { name: "buildGoalAchievedSMS()", type: "Sheng / English celebration" },
                ]
            },
        ],
    },
];

export const petStates = [
    { label: "Healthy", color: "#0f766e", bg: "#f0fdf4", border: "#5eead4", icon: "CheckCircle2", days: "0 days missed", desc: "Saving on track" },
    { label: "Sick", color: "#b45309", bg: "#fffbeb", border: "#fde68a", icon: "AlertCircle", days: "1 day missed", desc: "Warning SMS sent" },
    { label: "Critical", color: "#9f1239", bg: "#fff1f2", border: "#fecdd3", icon: "AlertTriangle", days: "2 days missed", desc: "Urgent Sheng alert" },
    { label: "Dead", color: "#334155", bg: "#f8fafc", border: "#cbd5e1", icon: "XOctagon", days: "3+ days missed", desc: "Streak reset required" },
];

export const workflows = [
    {
        id: "daily", label: "Daily Loop",
        steps: [
            { text: "Cron fires at 11 PM EAT", type: "trigger" },
            { text: "triggerSTKPush() called for each active goal", type: "action" },
            { text: "User approves payment on their phone (M-Pesa STK)", type: "external" },
            { text: "Daraja posts to /api/mpesa/callback", type: "webhook" },
            { text: "ResultCode === 0?", type: "decision" },
            { text: "YES → credit Escrow + heal Pet + streak +1 + score +1", type: "success" },
            { text: "NO → degrade Pet (Healthy → Sick → Critical → Dead)", type: "failure" },
        ],
    },
    {
        id: "veto", label: "Veto Protocol",
        steps: [
            { text: "User requests withdrawal", type: "trigger" },
            { text: "runVetoProtocol() checks goal targetDate", type: "action" },
            { text: "targetDate reached?", type: "decision" },
            { text: "YES → AutoApprove → disburseFunds() via B2C → done", type: "success" },
            { text: "NO → generateGuardianToken() (HS256 JWT, 48hr TTL)", type: "action" },
            { text: "Guardian receives SMS with one-time secure URL", type: "external" },
            { text: "Guardian Approves → disburseFunds() via B2C", type: "success" },
            { text: "Guardian Denies → user notified via SMS", type: "failure" },
            { text: "User overrides → burnTheBridge() → score −20, streak → 0", type: "failure" },
        ],
    },
];

export const disciplineRules = [
    { event: "Daily save confirmed", delta: "+1", positive: true },
    { event: "Consecutive save streak", delta: "+1 per day", positive: true },
    { event: "Score ceiling", delta: "100", positive: true },
    { event: "Burn-the-Bridge override", delta: "−20", positive: false },
    { event: "Streak reset on override", delta: "→ 0", positive: false },
    { event: "Score floor", delta: "0", positive: false },
];

export const envVars = [
    { key: "MPESA_ENV", type: "config", note: "sandbox | production" },
    { key: "MPESA_CONSUMER_KEY", type: "secret" },
    { key: "MPESA_CONSUMER_SECRET", type: "secret" },
    { key: "MPESA_PAYBILL", type: "config", note: "business shortcode" },
    { key: "MPESA_PASSKEY", type: "secret" },
    { key: "MPESA_INITIATOR_NAME", type: "config" },
    { key: "MPESA_SECURITY_CREDENTIAL", type: "secret" },
    { key: "GUARDIAN_JWT_SECRET", type: "secret", note: "min 32 chars" },
    { key: "CRON_SECRET", type: "secret", note: "protects /api/cron/daily-check" },
    { key: "GEMINI_API_KEY", type: "secret" },
    { key: "APP_BASE_URL", type: "config", note: "e.g. https://bado.co.ke" },
];
