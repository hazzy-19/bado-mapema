# Bado Mapema

This is a supporting web-app to clearly map out the project's structure and ensure there is total understanding, and allow room for mutual improvements, suggestions, and criticisms are highly advised!.

## Features
- **Premium Glassmorphic UI**: Deep slate backgrounds, colorful neon glows, and smooth micro-animations.
- **Dark/Light Mode**: Integrated theme toggle utilizing smart CSS inversion, perfectly preserving all high-contrast accents.
- **Interactive Architecture Graph**: Visualize the core models and logic vectors.
- **Behavioral Savings State**: Real-time updates for "Pet State Machine" based on saving milestones. 

---

## How It Works (The Savings Loop)

1. **Commit & Configure:** The user defines a savings goal (e.g., Emergency Fund), a target date, and a daily savings wedge (e.g., 50 KES/day). They also appoint a trusted friend or family member as their "Guardian."
2. **The Daily Nudge:** Every day at a designated time, the system triggers an automatic M-PESA STK Push to the user's phone, requesting the daily amount.
3. **Behavioral Feedback:** 
   - **Success:** Approving the payment credits their escrow account, heals their digital pet, and increases their "Discipline Score."
   - **Failure:** Ignoring or rejecting the payment causes the digital pet's health to deteriorate (Healthy → Sick → Critical) and lowers their score.
4. **Friction on Withdrawals:** If the user attempts an impulsive early withdrawal, the request is intercepted by the Guardian Veto System. The Guardian must approve the release of funds. The user can forcefully override the Guardian ("burn the bridge"), but at the cost of severe penalties to their Discipline Score and their pet's life.

---

## Core Components & Features

The platform is powered by seven deeply integrated systems:

### 1. The Pet State Machine
A digital Tamagotchi-style companion that lives or dies based on the user's daily saving consistency. It utilizes "Loss Aversion"—users will often fight harder to keep their pet alive than they will to save money for themselves.

### 2. The Guardian / Veto System
A social accountability protocol. By involving a trusted third party in the withdrawal process, the system introduces positive friction. It relies on the "Hawthorne Effect" (people behave better when watched) to prevent frivolous internal transfers and impulse spending.

### 3. M-PESA Integration Engine
The financial bridge. It handles all real money movements securely: 
- **Collections:** via automated daily STK Pushes.
- **Verifications:** via instant Daraja B2C Callbacks.
- **Disbursements:** Automatically routing funds back to the user upon goal completion or Guardian approval.

### 4. Discipline Score Engine
A quantifiable behavioral "credit score" (0–100) that tracks financial reliability. It powers the pet's evolution, governs the severity of penalties, and provides users with a tangible metric of their personal growth and consistency.

### 5. SMS Parser & AI Insights
Users can optionally allow the app to securely parse their M-PESA SMS receipt logs. Bado Mapema uses **Gemini AI** to calculate the user's "Burn Rate" (spending velocity) and predict their probability of successfully completing their savings goals, offering proactive, personalized coaching. 

### 6. Pet Personality Engine
An AI-driven persona system that gives the digital pet a voice. Based on the user's behavior, the pet develops a unique archetype (e.g., The Cheerleader, The Sassy One, The Hustler). It communicates using dynamic language routing, smoothly switching between English, Swahili, and Sheng depending on the urgency and the user's demographic.

### 7. Escrow Ledger System
The bank-grade, double-entry accounting foundation. Built on PostgreSQL, it enforces strict ACID compliance, cryptographic hashing for audit trails, and automated daily reconciliation with M-PESA to ensure every shilling is accounted for and user trust is never compromised.

---

## Vision
Bado Mapema isn't just a digital wallet; it's a financial behavior modification tool. It proves that with the right combination of emotional attachment, social friction, and seamless automation, anyone can build a robust financial safety net.
