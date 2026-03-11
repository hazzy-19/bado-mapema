# Bado Mapema Functional Architecture

Bado Mapema is a fictional Kenyan FinTech tool designed for goal-based savings with rigorous behavioral discipline mechanics built directly into the codebase.

This project visualizes the core architecture, data structures, React state management, back-end APIs, and routing logic that power the platform.

## Features

- **Interactive Architecture Map:** A draggable, zoomable canvas visualizing the flow of logic from User Action (Withdrawal Requests/Saves) to M-Pesa interactions and algorithmic penalties. Built with `@xyflow/react` (React Flow).
- **Behavioral Logic Visualization:** Documented logic paths for complex behaviors like "The Veto Protocol" (preventing early withdrawals) and the "Burn-The-Bridge" override mechanic.
- **Data Models:** Clean representation of the database shapes required to run the application (EscrowLedgers, Pet States, User Profiles).
- **Communication Engine:** Visualizing how SMS logs are processed through an LLM (Gemini) to determine the user's "Burn Rate" and dynamically shift the application's tone from formal English to aggressive Sheng.

## Getting Started

This project is a Next.js 14 application built with React and TypeScript. 

### Prerequisites

Ensure you have Node.js installed on your machine.

### Installation

1. Clone the repository.
2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

Start the local server to view the architecture map in your browser:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or whichever port the terminal specifies) with your browser to see the Dashboard.

## Built With

- Next.js (App Router)
- React
- TypeScript
- `@xyflow/react` (for the interactive canvas)
- Vanilla CSS (for styling)
